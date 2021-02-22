import React from 'react';
import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

const List: React.FunctionComponent & { Title: typeof Title; Item: typeof Item } = ({ children }) => (
  <div className="min-w-48 m-2 shadow-2xl bg-white text-center">{children}</div>
);

const Title: React.FunctionComponent = ({ children }) => <div className="font-bold p-2">{children}</div>;

const itemDefaultElement = 'div';
type ItemOwnProps = Record<string, unknown>;
type ItemProps<E extends React.ElementType> = PolymorphicComponentProps<E, ItemOwnProps>;
const Item = <E extends React.ElementType = typeof itemDefaultElement>({ children, ...rest }: ItemProps<E>) => {
  return (
    <Box
      as={itemDefaultElement}
      className="block p-2 no-underline text-gray-800 hover:bg-gray-300 transition-bg transition-300"
      {...rest}
    >
      {children}
    </Box>
  );
};

List.Title = Title;
List.Item = Item;

export default List;
