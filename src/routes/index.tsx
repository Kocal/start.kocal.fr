import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';
import shortcuts from '~/shortcuts.json';
import { List, ListItem, ListTitle } from '~/components/List';
import { Background } from '~/components/Background';
import { Overlay } from '~/components/Overlay';
import type { Background as BackgroundType } from 'virtual:app-backgrounds';
import { backgrounds } from 'virtual:app-backgrounds';

export const useRandomBackground = routeLoader$(async (): Promise<BackgroundType> => {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)];
});

export default component$(() => {
  const randomBackground = useRandomBackground();

  return (
    <div class="w-screen h-screen flex flex-wrap items-center justify-center font-sans leading-relaxed group">
      <Background background={randomBackground} />
      <Overlay />

      {shortcuts.map(({ title, links }) => {
        return (
          <List key={title}>
            <ListTitle>{title}</ListTitle>
            {links.map(({ link, text }) => {
              return (
                <ListItem key={link} as="a" href={link} target="_blank" rel="noreferrer noopener">
                  {text}
                </ListItem>
              );
            })}
          </List>
        );
      })}
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const background = resolveValue(useRandomBackground);

  return {
    links: [
      {
        rel: 'preload',
        as: 'image',
        href: background.src,
      },
    ],
  };
};
