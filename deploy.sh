# abort on errors
set -e

# build
npm run build

# move CNAME
cp CNAME dist/CNAME

# navigate into the build output directory
cd dist



# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# criar branch gh-pages caso não exista
# git checkout -b gh-pages

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/felipedacs/portfolio master:gh-pages


# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
