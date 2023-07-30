import React from 'react';
import Background from './components/Background';
import { List, ListItem, ListTitle } from './components/List';
import Overlay from './components/Overlay';
import shortcuts from './shortcuts.json';

const App: React.FunctionComponent = () => (
  <div className="w-screen h-screen flex flex-wrap items-center justify-center font-sans leading-relaxed group">
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

export default App;
