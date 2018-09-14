const backgrounds = [
  { name: "fate-stay-night", count: 1 },
  { name: "hatsune-miku", count: 2 },
  { name: "no-game-no-life", count: 2 },
  { name: "shingeki-no-kyojin", count: 2 },
  { name: "sword-art-online", count: 2 },
  { name: "tokyo-ghoul", count: 3 }
];

export const pickRandomBackground = () => {
  const background =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const { name, count } = background;

  return name + "-" + Math.floor(Math.random() * count + 1);
};

export const applyBackground = (background, el = document.body) => {
  el.style.backgroundImage = `url(./img/backgrounds/${background}.jpg)`;
};
