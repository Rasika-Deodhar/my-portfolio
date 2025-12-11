import React, { lazy, Suspense } from 'react';

const LazythemeToggle = lazy(() => import('./themeToggle'));

const themeToggle = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazythemeToggle {...props} />
  </Suspense>
);

export default themeToggle;
