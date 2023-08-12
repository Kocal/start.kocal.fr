import { pickRandomBackground } from '~/background';
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const Background = component$(() => {
  const background = useSignal<string | null>(null);

  useVisibleTask$(async () => {
    background.value = await pickRandomBackground()
  }, {
    strategy: 'document-ready'
  });

  return (
    <div
      class="h-full w-full fixed -z-2 bg-cover group-hover:blur group-hover:scale-105 transition duration-500"
      style={{
        backgroundImage: background.value !== null ? `url(${background.value})` : undefined,
      }}
    />
  );
});
