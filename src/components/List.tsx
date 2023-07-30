import React from 'react';

export const List: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-w-48 m-2 shadow-2xl bg-white text-center">{children}</div>
);

export const ListTitle: React.FunctionComponent<{ children: string }> = ({ children }) => (
  <div className="font-bold p-2">{children}</div>
);

export const ListItem = <C extends React.ElementType = 'div'>({
  as,
  children,
  ...rest
}: PolymorphicComponentProp<C, { children: string }>) => {
  const Component = as || 'div';

  return (
    <Component
      className="block p-2 no-underline text-gray-800 hover:bg-gray-300 transition-colors duration-300"
      {...rest}
    >
      {children}
    </Component>
  );
};
