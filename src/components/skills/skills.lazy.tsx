import React, { lazy, Suspense } from 'react';

const Lazyskills = lazy(() => import('./skills'));

const skills = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <Lazyskills {...props} />
  </Suspense>
);

export default skills;
