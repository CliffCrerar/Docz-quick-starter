echo add-all
git add --all

echo 'commit with message' $1
git commit -m $1

echo 'push'
git push
