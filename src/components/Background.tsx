import { component$, useSignal, useTask$ } from '@builder.io/qwik';

const backgrounds = import.meta.glob<string>('../assets/img/backgrounds/*.jpg', { import: 'default', as: 'string' });

export const Background = component$(() => {
  const background = useSignal<string | null>(null);

  useTask$(async () => {
    const randomBackgroundIndex = Math.floor(Math.random() * Object.keys(backgrounds).length);
    background.value = await Object.values(backgrounds)[randomBackgroundIndex]();
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
