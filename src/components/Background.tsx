import {component$, useVisibleTask$} from '@builder.io/qwik';
//const backgrounds = import.meta.glob<string>('../assets/img/backgrounds/*.jpg', { import: 'default', eager: true });

export const Background = component$(() => {
  useVisibleTask$(() => {
    console.log('1st visible');
  })

  return (
    <div
      class="h-full w-full fixed -z-2 bg-cover group-hover:blur group-hover:scale-105 transition duration-500"
    />
  );
});
