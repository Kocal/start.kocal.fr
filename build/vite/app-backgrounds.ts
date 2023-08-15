import { PluginOption } from 'vite';
import fs from 'node:fs/promises';
import { Background } from 'virtual:app-backgrounds';
import sizeOf from 'image-size';
import { promisify } from 'util';
import path from 'path';

export function appBackgroundsPlugin({
  rootPath,
                                     }: {
  rootPath: string;
}): PluginOption {
  const virtualModuleId = 'virtual:app-backgrounds';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'app-backgrounds',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    async load(id) {
      if (id === resolvedVirtualModuleId) {
        const files = await fs.readdir(rootPath);
        const backgrounds: Background[] = await Promise.all(files.map(async (file): Promise<Background> => {
          const backgroundPath = path.join(rootPath, file);
          const size = await promisify(sizeOf)(backgroundPath);
          if (!size || !size.width || !size.height) {
            throw new Error(`Failed to get size of ${backgroundPath}`);
          }

          return {
            src: `/assets/backgrounds/${file}`,
            width: size.width,
            height: size.height,
          };
        }));

        return `export const backgrounds = ${JSON.stringify(backgrounds)};
        
        export function getRandomBackground() {
          return backgrounds[Math.floor(Math.random() * backgrounds.length)];
        }`;
      }
    }
  }
}