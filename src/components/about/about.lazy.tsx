import React, { lazy, Suspense } from "react";
import Loading from "../loading/loading";

const Lazyabout = lazy(() => import("./about"));

const about = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={<Loading />}>
    <Lazyabout {...props} />
  </Suspense>
);

export default about;
