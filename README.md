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

## **4. Create deploy.sh script**

    // building for productiion and generating dist file with static content
    npm run build
    // change into dist directory
    cd dist
    // commiting changes
    git init
    git add -A
    git commit -m "dist commit"
    // pushing changes on gh-pages branch 
    git push -f https://github.com/DziadoszWiktor/vue-test.git master:gh-pages
    // returning to project directory
    cd ..

## **5. Run deploy.sh script**

    ./deploy.sh


