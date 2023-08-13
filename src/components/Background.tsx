import {component$, useSignal, useVisibleTask$} from '@builder.io/qwik';
const backgrounds = import.meta.glob<string>('../assets/img/backgrounds/*.jpg', { import: 'default', eager: true });

export const Background = component$(() => {
  const background = useSignal<string | null>(null);

  useVisibleTask$(() => {
    console.log('1st visible');
  })

  useVisibleTask$(async () => {
    console.log('2nd visible async');
  })

  useVisibleTask$(async () => {
    console.log('3rd visible async document-ready');
  }, {
    strategy: 'document-ready'
  })

  useVisibleTask$(async () => {
    console.log(backgrounds);
    console.log(Object.values(backgrounds));
    console.log(Object.values(backgrounds)[0]);
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
