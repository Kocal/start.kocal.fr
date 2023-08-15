import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import shortcuts from '~/shortcuts.json';
import { List, ListItem, ListTitle } from '~/components/List';
import { Background } from '~/components/Background';
import { Overlay } from '~/components/Overlay';
import type { Background as BackgroundType } from 'virtual:app-backgrounds';
import { backgrounds } from 'virtual:app-backgrounds';

export default component$(() => {
  const randomBackground = useSignal<BackgroundType | null>(null);

  useVisibleTask$(function() {
    console.log('visible');
    console.log(backgrounds);
  })

  return (
    <div class="w-screen h-screen flex flex-wrap items-center justify-center font-sans leading-relaxed group">
      {randomBackground.value !== null ? <Background background={randomBackground.value} /> : null}
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
