backgrounds = ['fate-stay-night-1', 
    'hatsune-miku-1', 'hatsune-miku-2', 
    'no-game-no-life-1', 'no-game-no-life-2', 
    'shingeki-no-kyojin-1', 'shingeki-no-kyojin-2', 
    'sword-art-online-1', 'sword-art-online-2',
    'tokyo-ghoul-1', 'tokyo-ghoul-2', 'tokyo-ghoul-3']

document . querySelector('html') . classList . add( 
    backgrounds[ Math.floor( Math.random() * backgrounds.length ) ]
)