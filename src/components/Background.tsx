import { component$ } from '@builder.io/qwik';
import { css } from '~/styled-system/css';

interface BackgroundProps {
  background: {
    src: string;
    width: number;
    height: number;
  };
}

export const Background = component$<BackgroundProps>(({ background }) => {
  return (
    <img
      src={background.src}
      width={background.width}
      height={background.height}
      alt=""
      role="presentation"
      class={css({
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        userSelect: 'none',
        transition: 'opacity 0.5s ease-in-out, filter 0.5s ease-in-out, transform 0.5s ease-in-out',
        filter: 'blur(7px)',
        transform: 'scale(1.05) rotate(-1deg)',
        opacity: 0.65,
        '&:hover': {
          opacity: 1,
          filter: 'blur(0)',
          transform: 'scale(1) rotate(0deg)',
        },
      })}
      loading="eager"
      decoding="async"
      // @ts-expect-error The `fetchpriority` attribute is not yet supported.
      fetchpriority="high"
    />
  );
});
