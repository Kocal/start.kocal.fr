import React from 'react';
import { pickRandomBackground } from '../background';

function Background() {
  const background = pickRandomBackground();

  return <div
    className="h-full w-full fixed -z-2 bg-cover group-hover:filter-blur-10 transition-filter transition-500"
    style={{ backgroundImage: `url(${background})` }}
  />;
}

export default Background;
