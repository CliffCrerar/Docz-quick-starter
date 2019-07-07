sudo rm -rd ./docz
sudo rm -rd /dist

echo add-all
git add --all

echo 'commit with message' $1
git commit -m $1

echo 'pull'
git pull

echo 'push'
git push
