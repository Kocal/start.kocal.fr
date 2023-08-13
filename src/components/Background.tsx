import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

interface BackgroundProps {
  background: Signal<string>;
}

export const Background = component$<BackgroundProps>(({ background }) => {
  return (
    <div
      class="h-full w-full fixed -z-2 bg-cover bg-center group-hover:blur group-hover:scale-105 transition duration-500"
      style={
        background.value ? {
            backgroundImage: `url(${background.value})`,
        } : {}
      }
    />
  );
});
