import {component$, useSignal, useVisibleTask$} from '@builder.io/qwik';
const backgrounds = import.meta.glob<string>('../assets/img/backgrounds/*.jpg', { import: 'default' });

export const Background = component$(() => {
  const background = useSignal<string | null>(null);

  useVisibleTask$(async () => {
    console.log(backgrounds);
    background.value = await Object.values(backgrounds)[0]();
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
