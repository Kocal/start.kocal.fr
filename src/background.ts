// @ts-expect-error glob is not defined on ImportMeta, but IDK why because Vite client.d.ts define it
const backgrounds: Record<string, () => { default: string }> = import.meta.glob(
  "./assets/img/backgrounds/*"
);

export async function pickRandomBackground(): Promise<string> {
  const bgs = Object.values(backgrounds);
  const randomBackground = bgs[Math.floor(Math.random() * bgs.length)];

  return (await randomBackground()).default;
}
