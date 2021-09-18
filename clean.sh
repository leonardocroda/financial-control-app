 echo "Cleaning Project"
 
 watchman watch-del-all
 rm -rf node_modules
 yarn install
 rm -rf /tmp/metro-*
 yarn start --reset-cache

echo "Cleaning completed"