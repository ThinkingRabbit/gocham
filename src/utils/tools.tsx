import React, { useEffect, useRef } from 'react';

export const index = () => {
  return <div>index</div>;
};

export const useDidUnMountEffect = (func: any, deps: any) => {
  const didMount = useRef(false);

  useEffect(() => {
    return () => {
      if (didMount.current) func();
      else didMount.current = true;
    };
  }, deps);
};
