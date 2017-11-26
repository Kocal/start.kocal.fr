<?php
    $shortcuts = [
        'internet' => [
            'twitter'   => 'https://tweetdeck.twitter.com',
            'facebook'  => 'https://www.facebook.com',
            'youtube'   => 'https://www.youtube.com',
            'twitch'    => 'http://www.twitch.tv/directory/game/League of Legends',
            'hiddenlol' => 'http://hiddenlol.com',
            'hugelol'   => 'http://hugelol.com',
        ],

        'tech' => [
            'korben.info'    => 'https://korben.info',
            'developpez.net' => 'http://www.developpez.com',
            'numerama.com'   => 'http://www.numerama.com',
            'thenews.im'     => 'http://thenews.im',
        ],

        'mail' => [
            'outlook' => 'https://outlook.com',
            'gmail' => 'https://gmail.com',
            'iut' => 'http://accesbv.univ-lyon1.fr/owa'
        ],

        '4chan' => [
            '/a/' => 'https://boards.4chan.org/a',
            '/b/' => 'https://boards.4chan.org/b',
            '/g/' => 'https://boards.4chan.org/g',
            '/pol/' => 'https://boards.4chan.org/pol'
        ],

        'reddit' => [
            '/r/leagueoflegends'      => 'https://www.reddit.com/r/leagueoflegends',
            '/r/programmerhumor'      => 'https://www.reddit.com/r/programmerhumor',
            '/r/talesfromtechsupport' => 'https://www.reddit.com/r/talesfromtechsupport',
        ],

        'lol' => [
            'op.gg Konata Izumi' => 'http://euw.op.gg/summoner/userName=Konata+Izumi',
            'op.gg Sardou71' => 'http://euw.op.gg/summoner/userName=Sardou71',
            'op.gg samnvg' => 'http://euw.op.gg/summoner/userName=samnvg',
            'lolking' => 'http://www.lolking.net/summoner/euw/30827817',
            'champ. masteries' => 'http://championmasterylookup.derpthemeus.com/summoner/?summoner=Konata%20Izumi&region=EUW'
        ],

        'e-shop' => [
            'amazon' => 'https://www.amazon.fr/',
            'ebay' => 'http://www.ebay.fr/',
            'dx' => 'http://www.dx.com/',
            'aliexpress' => 'https://fr.aliexpress.com',
        ]
    ];
?>
<!DOCTYPE html>
<html lang="fr" manifest="manifest.appcache">
    <head>
        <meta charset="utf-8">
        <title>start.kocal.fr</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto:400,500' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="./css/app.css">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    </head>
    <body>
        <div id="overlay"></div>
        <div class="tiles-container">
        <?php ksort($shortcuts); ?>
        <?php foreach($shortcuts as $title => $urls): ?>
            <div class="tile">
                <header class="tile__header"><?= $title ?></header>
                <section class="tile__content">
                    <?php ksort($urls); ?>
                    <?php foreach($urls as $text => $url): ?>
                        <a class="tile__item" href="<?= $url ?>"><?= $text ?></a>
                    <?php endforeach; ?>
                </section>
            </div>
        <?php endforeach; ?>
        </div>

        <script src="./js/app.js"></script>
    </body>
</html>
