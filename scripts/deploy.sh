#!/bin/bash
#
# Export expo script

ACCOUNT_NAME="timivietnam"
PROJECT_NAME="abc"

# Clear before build
rm -rf ./dist

# Execute for build expo run files
expo export --public-url https://${ACCOUNT_NAME}.github.io/${PROJECT_NAME}

cd ./dist

qrencode -l L -v 1 -o android.png "exps://${ACCOUNT_NAME}.github.io/${PROJECT_NAME}/android-index.json" --foreground=007AFF
qrencode -l L -v 1 -o ios.png "exps://${ACCOUNT_NAME}.github.io/${PROJECT_NAME}/ios-index.json" --foreground=353535

cat <<EOT >> index.html
<h1> SCAN WITH EXPO </h1>
<table>
  <thead>
    <tr>
      <th> ANDROID </th>
      <th> IOS </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> <img src="./android.png"> </td>
      <td> <img src="./ios.png"> </td>
    </tr>
  </tbody>
</table>
EOT

git init
git add -A
git commit -m "Deploy"
git remote add origin git@github.com:${ACCOUNT_NAME}/${PROJECT_NAME}.git
git push origin master --force
