import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

interface BackgroundProps {
  background: Signal<string>;
}

export const Background = component$<BackgroundProps>(({ background }) => {
  return (
    <img
      src={background.value}
      alt=""
      role="presentation"
      class="h-full w-full fixed -z-2 object-cover object-center group-hover:blur group-hover:scale-105 transition duration-500"
      loading="eager"
      decoding="async"
      // @ts-expect-error The `fetchpriority` attribute is not yet supported.
      fetchpriority="high"
    />
  );
});
