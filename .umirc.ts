/*
 * @Autor: Yhao
 * @Date: 2021-11-06 00:35:06
 * @LastEditors: Yhao
 * @LastEditTime: 2021-11-07 20:46:08
 * @Description:
 */
import { defineConfig } from 'dumi';
import slash from 'slash2';

export default defineConfig({
  title: 'newbie-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  cssLoader: {
    localsConvention: 'camelCase',
    modules: {
      getLocalIdent(context, localIdentName, localName) {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }
        const match = context.resourcePath.match(/src(.*)/);
        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = slash(antdProPath)
            .split('/')
            .map((a) => a.replace(/([A-Z])/g, '-$1'))
            .map((a) => a.toLowerCase())
            .filter((a) => a && a !== 'components');
          return `${localName}-${[...new Set(arr)].join('-')}`.replace(
            /--/g,
            '-',
          );
        }

        return localName;
      },
    },
  },
});
