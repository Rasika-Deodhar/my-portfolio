import React, { lazy, Suspense } from 'react';
import Loading from '../loading/loading';

const Lazyexperience = lazy(() => import('./experience'));

const experience = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<Loading />}>
    <Lazyexperience {...props} />
  </Suspense>
);

export default experience;
