#!/bin/sh
if [ $# -lt 1 ]; then
	echo "usage: prog <commit message>"
	exit 1
fi

#npm run build
git commit -am "$1"
firebase deploy

