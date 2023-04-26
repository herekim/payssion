// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    configure: (webpackConfig, { env, paths }) => {
      const isEnvDevelopment = env === 'development'

      // Entry points 설정
      webpackConfig.entry = {
        main: [isEnvDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(
          Boolean,
        ),
      }

      // Output 설정
      webpackConfig.output = {
        ...webpackConfig.output,
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].chunk.js',
        libraryTarget: 'umd', // 이 부분을 추가하여 UMD를 지원합니다.
      }

      return webpackConfig
    },
  },
}
