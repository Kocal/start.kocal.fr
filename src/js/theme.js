const backgrounds = [
  {name: 'fate-stay-night', max: 1},
  {name: 'hatsune-miku', max: 2},
  {name: 'no-game-no-life', max: 2},
  {name: 'shingeki-no-kyojin', max: 2},
  {name: 'sword-art-online', max: 2},
  {name: 'tokyo-ghoul', max: 3}
]

function pickRandomBackground (backgrounds) {
  const background = backgrounds [Math.floor(Math.random() * backgrounds.length)]
  const {name, max} = background
  
  return name + '-' + Math.floor(Math.random() * max + 1)
}

document.body.style.backgroundImage = 'url(./img/' + pickRandomBackground(backgrounds) + '.jpg)'
