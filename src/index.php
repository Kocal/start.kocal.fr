<?php
    $shortcuts = [
        '4chan' => [
            '/a/' => 'https://boards.4chan.org/a',
            '/b/' => 'https://boards.4chan.org/b',
            '/g/' => 'https://boards.4chan.org/g',
        ],

        'reddit' => [
            '/r/leagueoflegends'      => 'https://www.reddit.com/r/leagueoflegends',
            '/r/programmerhumor'      => 'https://www.reddit.com/r/programmerhumor',
            '/r/talesfromtechsupport' => 'https://www.reddit.com/r/talesfromtechsupport',
        ],

        'tech' => [
            'korben.info'    => 'https://korben.info', 
            'developpez.net' => 'http://www.developpez.com',
            'numerama.com'   => 'http://www.numerama.com',
            'thenews.im'     => 'http://thenews.im',
        ],

        'internet' => [
            'twitter'   => 'https://tweetdeck.twitter.com',
            'facebook'  => 'https://www.facebook.com',
            'eclypsia'  => 'http://www.eclypsia.com/fr/ectv2',
            'youtube'   => 'https://www.youtube.com',
            'twitch'    => 'http://www.twitch.tv/directory/game/League of Legends',
            'hiddenlol' => 'http://hiddenlol.com',
            'hugelol'   => 'http://hugelol.com',
        ]
    ];
?>
<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>start.kocal.fr</title>
        <link rel="stylesheet" href="css/style.min.css">
    </head>
    <body>
        <h1>start.kocal.fr</h1>
        <?php foreach($shortcuts as $title => $urls): ?>
            <div class="tile">
                <h2><?=$title?></h2>
                <?php foreach($urls as $text => $url): ?>
                    <a href="<?=$url?>"><?=$text?></a><br>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>

        <script src="js/app.min.js"></script>
    </body>
</html>