// @ts-expect-error Type is incorrect :(
const backgrounds: Record<string, () => { default: string }> = import.meta.glob('./assets/img/backgrounds/*.jpg');

export async function pickRandomBackground(): Promise<string> {
  const bgs = Object.values(backgrounds);
  const randomBackground = bgs[Math.floor(Math.random() * bgs.length)];

  return (await randomBackground()).default;
}
