import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { css } from '~/styled-system/css';

export const List = component$(() => (
  <div
    class={css({
      width: '48',
      margin: '2',
      boxShadow: 'md',
      backgroundColor: 'white',
      textAlign: 'center',
    })}
  >
    <Slot />
  </div>
));

export const ListTitle = component$(() => (
  <div
    class={css({
      fontWeight: 'bold',
      padding: '2',
    })}
  >
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
    <Component
      class={css({
        display: 'block',
        padding: '2',
        color: 'gray.800',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'gray.300',
        },
      })}
      {...props}
    >
      <Slot />
    </Component>
  );
});
