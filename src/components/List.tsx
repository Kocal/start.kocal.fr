import React from 'react';

function List({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="min-w-48 m-2 shadow-2xl bg-white text-center">
      {children}
    </div>
  );
}

function Title({ children }: React.PropsWithChildren<{}>) {
  return <div className="font-bold p-2">{children}</div>;
}

function Item({ tag = 'div', children, ...rest }: React.PropsWithChildren<{ tag: keyof JSX.IntrinsicElements } & { [attr: string]: string }>) {
  const Tag = tag;

  return <Tag className="block p-2 no-underline text-gray-800 hover:bg-gray-300 transition-bg transition-250" {...rest}>
    {children}
  </Tag>;
}

List.Title = Title;
List.Item = Item;

export default List;
