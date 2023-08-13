import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useRandomBackground } from '~/routes';

export const Background = component$(() => {
  const background = useRandomBackground();

  return (
    <div
      class="h-full w-full fixed -z-2 bg-cover group-hover:blur group-hover:scale-105 transition duration-500"
      style={{
        backgroundImage: `url(${background.value})`,
      }}
    />
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const background = resolveValue(useRandomBackground);

  return {
    links: [
      {
        rel: 'preload',
        as: 'image',
        href: background,
      },
    ],
  };
};
