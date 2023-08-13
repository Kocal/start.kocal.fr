import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import shortcuts from '~/shortcuts.json';
import {List, ListItem, ListTitle} from '~/components/List';
import {Background} from '~/components/Background';
import {Overlay} from '~/components/Overlay';
import {routeLoader$} from '@builder.io/qwik-city';

const backgrounds = import.meta.glob<string>('../../public/assets/backgrounds/*.jpg', {import: 'default', eager: true});

export const useRandomBackground = routeLoader$(async () => {
    const backgroundsPaths = Object.keys(backgrounds).map(path => path.replace(/^(\.\.\/)*public/, ''));
    const randomBackgroundIndex = Math.floor(Math.random() * backgroundsPaths.length);

    return backgroundsPaths[randomBackgroundIndex];
});

export default component$(() => {
    const randomBackground = useRandomBackground();

    return (
        <div class="w-screen h-screen flex flex-wrap items-center justify-center font-sans leading-relaxed group">
            <Background background={randomBackground}/>
            <Overlay/>

            {shortcuts.map(({title, links}) => {
                return (
                    <List key={title}>
                        <ListTitle>{title}</ListTitle>
                        {links.map(({link, text}) => {
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
});

export const head: DocumentHead = ({resolveValue}) => {
    const background = resolveValue(useRandomBackground);

    return {
        links: [
            {
                rel: 'preload',
                as: 'image',
                href: background,
            },
        ],
    };
};
