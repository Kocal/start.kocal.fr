type AnyTag = string | React.FunctionComponent<never> | (new (props: never) => React.Component);

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never;
