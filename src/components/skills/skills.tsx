import { FC, useRef, useEffect, useCallback } from "react";
import "./skills.css";
import { useTheme } from "../../context/ThemeContext";

const CATS = [
  { name: "Languages & Frameworks", stroke: "#d49656", fill: "rgba(212,150,86,0.18)" },
  { name: "AI / LLM",              stroke: "#d6715e", fill: "rgba(214,113,94,0.18)" },
  { name: "Cloud & DevOps",        stroke: "#6fa783", fill: "rgba(111,167,131,0.18)" },
  { name: "Data",                   stroke: "#6992c5", fill: "rgba(105,146,197,0.18)" },
  { name: "Product & PM",          stroke: "#b57baf", fill: "rgba(181,123,175,0.18)" },
];

interface SkillDef { label: string; cat: number; r?: number }

const SKILLS: SkillDef[] = [
  // Languages & Frameworks
  { label: "JavaScript",    cat: 0, r: 44 },
  { label: "TypeScript",    cat: 0, r: 42 },
  { label: "React",         cat: 0, r: 44 },
  { label: "Angular",       cat: 0, r: 36 },
  { label: "Python",        cat: 0, r: 46 },
  { label: "Node.js",       cat: 0, r: 38 },
  { label: "Java 8",        cat: 0, r: 36 },
  { label: "Express",       cat: 0, r: 30 },
  { label: "FastAPI",       cat: 0, r: 30 },
  { label: "Pandas",        cat: 0, r: 32 },
  // AI / LLM
  { label: "LangChain",     cat: 1, r: 44 },
  { label: "Gen AI",        cat: 1, r: 40 },
  { label: "Agents",        cat: 1, r: 38 },
  { label: "RAG",           cat: 1, r: 38 },
  { label: "Embeddings",    cat: 1, r: 34 },
  { label: "GPT-4o",        cat: 1, r: 34 },
  { label: "LLaMA 3",       cat: 1, r: 34 },
  { label: "Prompt Eng",    cat: 1, r: 34 },
  { label: "NLP",           cat: 1, r: 30 },
  { label: "Scikit-Learn",  cat: 1, r: 36 },
  // Cloud & DevOps
  { label: "GitHub Actions",cat: 2, r: 40 },
  { label: "Jenkins",       cat: 2, r: 32 },
  { label: "Docker",        cat: 2, r: 36 },
  { label: "Kubernetes",    cat: 2, r: 36 },
  { label: "CI/CD",         cat: 2, r: 32 },
  { label: "AWS",           cat: 2, r: 36 },
  { label: "Git",           cat: 2, r: 30 },
  { label: "BDD",           cat: 2, r: 28 },
  // Data
  { label: "SQL",           cat: 3, r: 36 },
  { label: "MongoDB",       cat: 3, r: 38 },
  { label: "PostgreSQL",    cat: 3, r: 36 },
  { label: "Vector DBs",    cat: 3, r: 36 },
  { label: "Semantic Search", cat: 3, r: 40 },
  { label: "JVM",           cat: 3, r: 28 },
  // Product & PM
  { label: "Agile",         cat: 4, r: 34 },
  { label: "Kanban",        cat: 4, r: 32 },
  { label: "Roadmapping",   cat: 4, r: 38 },
  { label: "Stakeholders",  cat: 4, r: 38 },
  { label: "SAFe",          cat: 4, r: 28 },
  { label: "n8n",           cat: 4, r: 30 },
];

interface Bubble {
  x: number; y: number; vx: number; vy: number;
  r: number; label: string; fill: string; stroke: string;
}

function makeBubbles(w: number, h: number): Bubble[] {
  return SKILLS.map((s) => ({
    x: w * 0.15 + Math.random() * w * 0.7,
    y: h * 0.15 + Math.random() * h * 0.7,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    r: s.r ?? 34,
    label: s.label,
    fill: CATS[s.cat].fill,
    stroke: CATS[s.cat].stroke,
  }));
}

const Skills: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubblesRef = useRef<Bubble[]>([]);
  const dragRef = useRef<{ idx: number; ox: number; oy: number } | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);
  const { isDark } = useTheme();

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;
    const w = container.clientWidth;
    const h = Math.max(440, Math.min(580, window.innerHeight * 0.58));
    canvas.width = w;
    canvas.height = h;
    bubblesRef.current = makeBubbles(w, h);
  }, []);

  useEffect(() => {
    resize();
    const ro = new ResizeObserver(resize);
    const container = canvasRef.current?.parentElement;
    if (container) ro.observe(container);
    window.addEventListener("resize", resize, { passive: true });
    return () => { ro.disconnect(); window.removeEventListener("resize", resize); };
  }, [resize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const textColor = isDark ? "#F1E7D8" : "#2A2019";

    function tick() {
      if (!canvas || !ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const bubbles = bubblesRef.current;
      const mouse = mouseRef.current;
      const drag = dragRef.current;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        if (drag && drag.idx === i) continue;

        // Attract to centre
        b.vx += (cx - b.x) * 0.0018;
        b.vy += (cy - b.y) * 0.0018;

        // Cursor repulsion
        if (mouse) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const rep = b.r * 2.8;
          if (dist < rep && dist > 0) {
            const f = ((rep - dist) / rep) * 2.8;
            b.vx += (dx / dist) * f;
            b.vy += (dy / dist) * f;
          }
        }

        // Bubble repulsion
        for (let j = i + 1; j < bubbles.length; j++) {
          const o = bubbles[j];
          const dx = b.x - o.x;
          const dy = b.y - o.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const min = b.r + o.r + 5;
          if (dist < min && dist > 0) {
            const overlap = ((min - dist) / min) * 1.6;
            const fx = (dx / dist) * overlap;
            const fy = (dy / dist) * overlap;
            b.vx += fx; b.vy += fy;
            o.vx -= fx; o.vy -= fy;
          }
        }

        b.vx *= 0.88; b.vy *= 0.88;
        const spd = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (spd > 5) { b.vx = (b.vx / spd) * 5; b.vy = (b.vy / spd) * 5; }

        b.x += b.vx; b.y += b.vy;
        if (b.x - b.r < 0) { b.x = b.r; b.vx = Math.abs(b.vx) * 0.5; }
        if (b.x + b.r > W) { b.x = W - b.r; b.vx = -Math.abs(b.vx) * 0.5; }
        if (b.y - b.r < 0) { b.y = b.r; b.vy = Math.abs(b.vy) * 0.5; }
        if (b.y + b.r > H) { b.y = H - b.r; b.vy = -Math.abs(b.vy) * 0.5; }
      }

      // Draw bubbles
      for (const b of bubbles) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.fill;
        ctx.fill();
        ctx.strokeStyle = b.stroke;
        ctx.lineWidth = 2;
        ctx.stroke();

        const fontSize = Math.max(9, Math.min(12, b.r * 0.3));
        ctx.font = `500 ${fontSize}px 'Hanken Grotesk', sans-serif`;
        ctx.fillStyle = textColor;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const words = b.label.split(" ");
        if (words.length === 1 || ctx.measureText(b.label).width < b.r * 1.7) {
          ctx.fillText(b.label, b.x, b.y);
        } else {
          const mid = Math.ceil(words.length / 2);
          const line1 = words.slice(0, mid).join(" ");
          const line2 = words.slice(mid).join(" ");
          ctx.fillText(line1, b.x, b.y - fontSize * 0.6);
          ctx.fillText(line2, b.x, b.y + fontSize * 0.6);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isDark]);

  // Pointer helpers
  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width;
    const sy = canvas.height / rect.height;
    if ("touches" in e) {
      const t = e.touches[0];
      return { x: (t.clientX - rect.left) * sx, y: (t.clientY - rect.top) * sy };
    }
    return { x: (e.clientX - rect.left) * sx, y: (e.clientY - rect.top) * sy };
  };

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    const { x, y } = getPos(e);
    const bubbles = bubblesRef.current;
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      const dx = x - b.x; const dy = y - b.y;
      if (dx * dx + dy * dy <= b.r * b.r) {
        dragRef.current = { idx: i, ox: dx, oy: dy };
        b.vx = 0; b.vy = 0;
        break;
      }
    }
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    const { x, y } = getPos(e);
    mouseRef.current = { x, y };
    if (dragRef.current) {
      const b = bubblesRef.current[dragRef.current.idx];
      b.x = x - dragRef.current.ox;
      b.y = y - dragRef.current.oy;
      b.vx = 0; b.vy = 0;
    }
  };

  const onUp = () => { dragRef.current = null; };
  const onLeave = () => { mouseRef.current = null; dragRef.current = null; };

  return (
    <section id="skills" className="pf-skills pf-section">
      <div className="pf-skills__header pf-inner">
        <div className="pf-skills__header-left">
          <p className="pf-section-label">02 · Tech Stack</p>
          <h2 className="pf-section-title">A stack you can push around.</h2>
        </div>
        <p className="pf-skills__hint">
          / drag the bubbles — they<br />
          collide, repel &amp; settle. built<br />
          on canvas w/ a tiny physics<br />
          loop.
        </p>
      </div>

      <div className="pf-skills__canvas-wrap">
        <canvas
          ref={canvasRef}
          className="pf-skills__canvas"
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onLeave}
          onTouchStart={onDown}
          onTouchMove={onMove}
          onTouchEnd={onUp}
          aria-label="Interactive skills visualization — drag bubbles to explore"
        />
      </div>

      <div className="pf-skills__legend pf-inner">
        {CATS.map((cat) => (
          <span key={cat.name} className="pf-skills__legend-item">
            <span
              className="pf-skills__legend-dot"
              style={{ background: cat.stroke }}
            />
            {cat.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
