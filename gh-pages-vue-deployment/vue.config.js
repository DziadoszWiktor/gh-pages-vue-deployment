const { defineConfig } = require('@vue/cli-service')
    module.exports = defineConfig({
        transpileDependencies: true,
        publicPath: process.env.NODE_ENV === 'production'
            ? '/gh-pages-vue-deployment/'
            : '/',
        pwa: {
            name: 'My App',
            themeColor: 'red',
            msTileColor: '#000000',
            appleMobileWebAppCapable: 'yes',
            appleMobileWebAppStatusBarStyle: 'black',
            // configure the workbox plugin
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'dev/sw.js',
            // ...other Workbox options...
            }
        }
    })
