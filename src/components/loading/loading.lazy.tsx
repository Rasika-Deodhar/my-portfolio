import React, { lazy, Suspense } from 'react';

const Lazyloading = lazy(() => import('./loading'));

const loading = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazyloading {...props} />
  </Suspense>
);

export default loading;
