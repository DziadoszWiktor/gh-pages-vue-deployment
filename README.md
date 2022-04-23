# **How to deploy a Vue project on gh-pages**

## **1. Create Vue project**
     
    vue create *project name*

## **2. Modify vue.config.js file**
     
    const { defineConfig } = require('@vue/cli-service')
    module.exports = defineConfig({
        transpileDependencies: true,
        publicPath: process.env.NODE_ENV === 'production'
            ? '/gh-pages-vue-deployment/'
            : '/'
    })

## **3. Modify .gitignore file**
dist file should be commented

    #/dist

## **4. Commit project changes**

    git add -A
    git commit -am "commit mess"
    git push

## **5. Create deploy.sh script**

    # building for productiion and generating dist file with static content
    npm run build
    # change into dist directory
    cd dist
    # commiting changes
    git init
    git add -A
    git commit -m "dist commit"
    # pushing changes on gh-pages branch 
    git push -f https://github.com/DziadoszWiktor/gh-pages-vue-deployment.git master:gh-pages
    # returning to project directory
    cd ..

## **5. Run deploy.sh script**
Script must be runned on every project commit

    ./deploy.sh
<br>

## **Useful links**
* ### [Native camera in mobile browser](https://github.com/pixochi/native-camera-in-mobile-browsers/)
* ### [Native camera in mobile browser (gh-pages)](https://pixochi.github.io/native-camera-in-mobile-browsers/)
* ### [Camera example 1](https://codepen.io/chrisbeast/pen/ebYwpX)
* ### [Javascript-Camera](https://github.com/doug2k1/javascript-camera)
* ### [Camera example 2](https://codepen.io/ditarahma08/pen/GRRxZLW)
<br>

## **Check the site**
## [**Deployed Vue site here..**](https://dziadoszwiktor.github.io/gh-pages-vue-deployment/)


