const { defineConfig } = require('@vue/cli-service')
    module.exports = defineConfig({
        transpileDependencies: true,
        publicPath: process.env.NODE_ENV === 'production'
            ? '/gh-pages-vue-deployment/'
            : '/',
        pwa: {
            name: 'gh-pages Vue PWA App deployment ',
            short_name: 'Vue PWA',
            themeColor: 'black',
            msTileColor: '#000000',
            appleMobileWebAppCapable: 'yes',
            appleMobileWebAppStatusBarStyle: 'black',
            color: 'white',
            background_color: 'black'
            /*
            // configure the workbox plugin
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
            // swSrc is required in InjectManifest mode.
            swSrc: 'dev/sw.js',
            // ...other Workbox options...
            }*/
        }
    })
