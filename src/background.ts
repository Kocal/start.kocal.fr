// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import backgrounds from 'globby!./assets/img/backgrounds/*.jpg';

export const pickRandomBackground = (): string => {
  const bgs = Object.values(backgrounds);
  const randomBackground = bgs[Math.floor(Math.random() * bgs.length)];

  return randomBackground as string;
};
