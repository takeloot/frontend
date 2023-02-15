import React, {createElement, forwardRef} from "react";

import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function twFactory(element: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return ([className, ..._]: TemplateStringsArray) => {
    return restyle(element)(() => className);
  };
}

type ClassnameFactory<T> = (s: TemplateStringsArray) => T;

type TailwindFactory = {
  [K in keyof JSX.IntrinsicElements]: ClassnameFactory<React.ForwardRefExoticComponent<JSX.IntrinsicElements[K]>>;
} & {
  <T>(c: T): ClassnameFactory<T>;
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const tw = new Proxy((() => {}) as unknown as TailwindFactory, {
  get: (_, property: string) => twFactory(property),
  apply: (_, __, [el]: [React.ReactElement]) => twFactory(el),
});

export const restyle = <
  T extends string | React.FunctionComponent<{className: string}> | React.ComponentClass<{className: string}>,
>(element: T) => {
  return (cls: () => string) =>
    // eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
    forwardRef(({className, ...props}: any, ref) =>
      createElement(element, {
        ...props,
        className: clsx(cls(), className),
        ref,
      }),
    );
};
