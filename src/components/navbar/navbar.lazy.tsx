import React, { lazy, Suspense } from 'react';

const Lazynavbar = lazy(() => import('./navbar'));

const navbar = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<div>Loading....</div>}>
    <Lazynavbar {...props} />
  </Suspense>
);

export default navbar;
