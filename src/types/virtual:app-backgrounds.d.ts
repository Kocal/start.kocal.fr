declare module 'virtual:app-backgrounds' {
  interface Background {
    src: string;
    width: number;
    height: number;
  }

  export const backgrounds: Background[];
}
