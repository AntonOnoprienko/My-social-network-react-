import React from "react";
import Preloder from "../components/Common/Preloader/Preloader";

export const withSuspense = (Component, props) => {
  return (
    <React.Suspense fallback={<Preloder />}>
      <Component {...props} />
    </React.Suspense>
  );
};
