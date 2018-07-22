export const pickRandomBackground = backgrounds => {
  const background =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const { name, count } = background;

  return name + "-" + Math.floor(Math.random() * count + 1);
};

export const applyBackground = (background, el = document.body) => {
  el.style.backgroundImage = `url(./img/backgrounds/${background}.jpg)`;
};
