#!/bin/bash

curl https://downloads.rclone.org/rclone-current-linux-amd64.zip -o rclone.zip
unzip rclone.zip
mv rclone-*-linux-amd64/* ./
rm -r rclone-*-linux-amd64 rclone.1 rclone.zip README.html README.txt git-log.txt
