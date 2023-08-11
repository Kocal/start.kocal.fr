import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export const List = component$(() => (
  <div class="min-w-48 m-2 shadow-2xl bg-white text-center">
    <Slot />
  </div>
));

export const ListTitle = component$(() => (
  <div class="font-bold p-2">
    <Slot />
  </div>
));

type ListItemProps<C extends keyof QwikIntrinsicElements> = QwikIntrinsicElements[C] & {
  as?: C;
};

export const ListItem = component$(<C extends keyof QwikIntrinsicElements>(props: ListItemProps<C>) => {
  const Component = props.as || 'div';

  return (
    // @ts-expect-error IDK why this is failing
    <Component class="block p-2 no-underline text-gray-800 hover:bg-gray-300 transition-colors duration-300" {...props}>
      <Slot />
    </Component>
  );
});
