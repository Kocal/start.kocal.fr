import { component$, useSignal } from '@builder.io/qwik';
import shortcuts from '~/shortcuts.json';
import { List, ListItem, ListTitle } from '~/components/List';
import { Background } from '~/components/Background';
import type { Background as BackgroundType } from 'virtual:app-backgrounds';
import { getRandomBackground } from 'virtual:app-backgrounds';
import { css } from '~/styled-system/css';

export default component$(() => {
  const randomBackground = useSignal<BackgroundType | null>(getRandomBackground);

  return (
    <div
      class={['group', css({
        width: 'screen',
        height: 'screen',
        fontFamily: 'sans-serif',
        backgroundColor: '#000',
      })]}
    >
      {randomBackground.value !== null ? <Background background={randomBackground.value} /> : null}

      <div
        class={css({
          position: 'absolute',
          top: 0,
          height: 'full',
          width: 'full',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
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
    </div>
  );
});
