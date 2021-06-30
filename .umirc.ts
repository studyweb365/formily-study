import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],

  // 配置babel-plugin-import，让在使用@formily/antd按需加载，保证样式不丢失
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      { libraryName: 'antd', libraryDirectory: 'lib', style: true },
      'antd',
    ],
    [
      'babel-plugin-import',
      { libraryName: '@formily/antd', libraryDirectory: 'lib', style: true },
    ],
  ],
  dynamicImport: {},
//   publicPath: '/formily-form/', // 设置静态文件路径
  history: { type: 'hash' },
});
