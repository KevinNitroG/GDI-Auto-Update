#!/bin/bash

source="$1"
target="$2"

if [ -f "$target" ]; then
	rm -f "$target"
fi

if [ -z "$source" ]; then
	echo "No source provided!"
	exit 1
else
	curl -o "$target" "$source"
fi

sed -i '/^[[:space:]]*$/d' "$target"
