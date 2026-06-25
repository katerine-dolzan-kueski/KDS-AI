export type DataAttributes = {
  [key: `data-${string}`]: string | number | boolean | undefined;
};

export type PropsOf<T extends keyof JSX.IntrinsicElements> =
  React.ComponentPropsWithoutRef<T> & DataAttributes;
