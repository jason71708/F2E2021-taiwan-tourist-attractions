#!bash

yarn build
# For github page use, in order to redirect to spa route
cp ./build/index.html ./build/404.html
yarn deploy