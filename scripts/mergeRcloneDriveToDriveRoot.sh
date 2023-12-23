#!/bin/bash

sed -i '1d;$d' resources/driveRoot.json

# Check if the last line has odd spaces, tabs, or newline characters
if [[ $(tail -n 1 resources/driveRoot.json | grep -cE '[[:space:]]+$') -eq 1 ]]; then
	# Remove odd spaces, tabs, or newline characters from the last line
	sed -i '$s/[ \t\n]*$//' resources/driveRoot.json
fi

# Check if the last character is not ","
if [[ $(tail -c 1 "resources/driveRoot.json" | grep -cE ",") -eq 0 ]]; then
	# Add "," to the end of the last line
	echo "," >>"resources/driveRoot.json"
fi

sed '1d;$d' resources/rcloneDrive.json >>"resources/driveRoot.json"
