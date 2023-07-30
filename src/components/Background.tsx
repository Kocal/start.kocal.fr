import React, { useState, useEffect } from 'react';
import { pickRandomBackground } from '../background';

const Background: React.FunctionComponent = () => {
  const [background, setBackground] = useState<string | null>(null);

  useEffect(() => {
    pickRandomBackground().then(setBackground);
  });

  return (
    <div
      className="h-full w-full fixed -z-2 bg-cover group-hover:blur group-hover:scale-105 transition duration-500"
      style={{ backgroundImage: background !== null ? `url(${background})` : undefined }}
    />
  );
};

export default Background;
