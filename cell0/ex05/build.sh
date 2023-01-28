#!/bin/bash

if [ -z "$1" ]
then
	echo "No arguments supplied"
fi

for var in "$@"; do
    mkdir ex$var
done

