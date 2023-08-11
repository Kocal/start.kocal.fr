import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import shortcuts from '~/shortcuts.json';
import { List, ListItem, ListTitle } from '~/components/List';
import { Background } from '~/components/Background';
import { Overlay } from '~/components/Overlay';

export default component$(() => {
  return (
    <div class="w-screen h-screen flex flex-wrap items-center justify-center font-sans leading-relaxed group">
      <Background />
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

export const head: DocumentHead = {
  title: 'start.kocal.fr',
};
