import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@pinia/nuxt'],
  experimental: {
    reactivityTransform: true,
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({ importStyle: 'less', resolveIcons: true }),
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    // 指定哪些插件不使用ssr渲染
    ssr: {
      noExternal: [
        'moment',
        'compute-scroll-into-view',
        'ant-design-vue',
        'lodash-es',
        'dayjs',
      ],
    },
  },
  // ant-design-vue 源码底层使用了dayjs，打包时更改为es6 module模块
  alias: {
    dayjs: 'dayjs/esm/',
  },
  build: {
    // 禁用指定的打包优化，本地启动需要删除@babel/runtime
    // transpile: ['lodash-es','swiper','@babel/runtime'],
    transpile: ['lodash-es','swiper'],
  },
});

