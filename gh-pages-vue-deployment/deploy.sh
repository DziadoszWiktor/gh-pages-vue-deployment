npm run build

cd dist

git init
git add -A
git commit -m "dist commit"

git push -f https://github.com/DziadoszWiktor/gh-pages-vue-deployment.git master:gh-pages

cd ..