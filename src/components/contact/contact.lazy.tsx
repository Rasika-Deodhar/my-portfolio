import React, { lazy, Suspense } from 'react';
import Loading from '../loading/loading';

const Lazycontact = lazy(() => import('./contact'));

const contact = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<Loading />}>
    <Lazycontact {...props} />
  </Suspense>
);

export default contact;
