#!/bin/bash

./rclone backend drives "$1:" --config ./rclone.conf >"resources/rcloneDrives.json"
