#!/bin/bash

rm -f rclone.conf

if [ $? -ne 0 ]; then
	echo "No arguments provided"
	exit 1
elif [ -z "$1" ]; then
	echo "No URL provided"
	exit 1
else
	echo "Downloading rclone.conf..."
	wget -O rclone.conf "$1" >/dev/null 2>&1
fi
