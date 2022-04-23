git add -A
git commit -am $1
git push

npm run build

cd dist

git init
git add -A
git commit -m $1

git push -f https://github.com/DziadoszWiktor/gh-pages-vue-deployment.git master:gh-pages

cd ..