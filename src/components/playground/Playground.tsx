import { FC, useState, useRef } from "react";
import "./playground.css";

const DEFAULT_CODE = `// Live JS — edit me, then hit ▶ Run (or Ctrl+Enter)
function brew(strength) {
  return '☕ '.repeat(strength).trim();
}

const stack = ['React', 'Python', 'LLMs', 'Agents'];
console.log('Good morning! I ship with:');
stack.forEach((t, i) => console.log(\`  \${i + 1}. \${t}\`));
console.log('\\nBrewing 4 shots of espresso...');
return brew(4);`;

interface RunResult {
  logs: string[];
  result?: string;
  error?: string;
}

function runSandbox(code: string): RunResult {
  const logs: string[] = [];
  const mockConsole = {
    log:   (...args: unknown[]) => logs.push(args.map(safeStr).join(" ")),
    warn:  (...args: unknown[]) => logs.push("[warn] " + args.map(safeStr).join(" ")),
    error: (...args: unknown[]) => logs.push("[error] " + args.map(safeStr).join(" ")),
    info:  (...args: unknown[]) => logs.push(args.map(safeStr).join(" ")),
  };
  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function("console", code);
    const result = fn(mockConsole);
    return { logs, result: result !== undefined ? safeStr(result) : undefined };
  } catch (e) {
    return { logs, error: (e as Error).message };
  }
}

function safeStr(v: unknown): string {
  if (v === null) return "null";
  if (v === undefined) return "undefined";
  if (typeof v === "object") {
    try { return JSON.stringify(v, null, 2); }
    catch { return String(v); }
  }
  return String(v);
}

const Playground: FC = () => {
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<RunResult | null>(null);
  const [running, setRunning] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const run = () => {
    setRunning(true);
    setTimeout(() => { setOutput(runSandbox(code)); setRunning(false); }, 40);
  };

  const reset = () => {
    setCode(DEFAULT_CODE);
    setOutput(null);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); run(); return; }
    if (e.key === "Tab") {
      e.preventDefault();
      const ta = textareaRef.current;
      if (!ta) return;
      const s = ta.selectionStart;
      const ns = code.substring(0, s) + "  " + code.substring(ta.selectionEnd);
      setCode(ns);
      requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = s + 2; });
    }
  };

  const hasOutput = output !== null;
  const hasError = !!output?.error;

  return (
    <section id="playground" className="pf-play pf-section">
      <div className="pf-inner">
        <p className="pf-section-label">04 · Live Playground</p>
        <h2 className="pf-section-title">Don't take my word for it, run it.</h2>
        <p className="pf-section-sub">
          A real JavaScript sandbox. Edit the code, hit Run, and it executes live
          in your browser <code>console.log</code> and a <code>return</code> value both show up.
        </p>

        <div className="pf-play__container">
          {/* Editor */}
          <div className="pf-play__editor-pane">
            <div className="pf-play__pane-header">
              <span className="pf-play__pane-label">play.js</span>
              <div className="pf-play__header-actions">
                <button className="pf-play__reset-btn" onClick={reset} aria-label="Reset code">
                  reset
                </button>
                <button
                  className={`pf-btn pf-btn--accent pf-play__run-btn${running ? " pf-play__run-btn--running" : ""}`}
                  onClick={run}
                  disabled={running}
                  aria-label="Run code"
                >
                  {running ? "Running…" : "▶ Run"}
                </button>
              </div>
            </div>
            <textarea
              ref={textareaRef}
              className="pf-play__textarea"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              aria-label="JavaScript code editor"
            />
          </div>

          {/* Output */}
          <div className="pf-play__output-pane">
            <div className="pf-play__pane-header">
              <span className="pf-play__pane-label">output</span>
            </div>
            <div className={`pf-play__output${hasError ? " pf-play__output--error" : ""}`}>
              {!hasOutput && (
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <span className="pf-play__placeholder">
                  // output appears here after you Run ▶
                </span>
              )}
              {hasOutput && (
                <>
                  {output.logs.map((line, i) => (
                    <div key={i} className="pf-play__log-line">{line}</div>
                  ))}
                  {output.result !== undefined && (
                    <div className="pf-play__result">
                      <span className="pf-play__result-label">↩ return </span>
                      {output.result}
                    </div>
                  )}
                  {output.error && (
                    <div className="pf-play__error">✖ {output.error}</div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playground;
