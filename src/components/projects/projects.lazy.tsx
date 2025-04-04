import React, { lazy, Suspense } from "react";

const Lazyprojects = lazy(() => import("./projects"));

const projects = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <Lazyprojects {...props} />
  </Suspense>
);

export default projects;
