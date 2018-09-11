#!/bin/sh

#Navigate to workspace, which is mounted to /tmp
WORKSPACE=/tmp
cd $WORKSPACE

rm -rf dist
ember -v

npm install

ember install oath-ui-components

npm run build

cp $WORKSPACE/build.txt $WORKSPACE/dist/build.txt
