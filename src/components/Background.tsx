import {component$, useSignal, useVisibleTask$} from '@builder.io/qwik';
import {pickRandomBackground} from "~/background";

export const Background = component$(() => {
  const background = useSignal<string | null>(null);

  useVisibleTask$(async () => {
    console.log('Background: visible');
    background.value = null;
    console.log('Background: random before')
    console.log(await pickRandomBackground());
    console.log('Background: random after')
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
