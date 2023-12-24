from itertools import count
from os import read, remove
import re
import json


def replaceDataContent(data, start_pattern, end_pattern, file_to_open) -> list:
    result = []
    start_compiled_pattern = re.compile(start_pattern)
    end_compiled_pattern = re.compile(end_pattern)
    check = False
    start_num_line = -1
    end_num_line = -1
    for i, line in enumerate(data, start=1):
        if check == False and start_compiled_pattern.match(line):
            start_num_line = i
            check = True
        if check == True and end_compiled_pattern.match(line):
            end_num_line = i
            break
    for i in range(start_num_line):
        result.append(data[i])
    with open(file_to_open, 'r', encoding='utf-8') as f:
        read_data = f.readlines()
    result.extend(read_data)
    for i in range(end_num_line-1, len(data)):
        result.append(data[i])

    return result


def replaceUserHeader(data) -> list:
    return replaceDataContent(data, r"^\s*// Website: https://gdi.js.org\s*$", r"^\s*// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING\s*$", 'resources/userHeader.js')


def replaceDriveRoot(data) -> list:
    return replaceDataContent(data, r"^\s*\"roots\"\s*:\s*\[\s*$", r"^\s*\]\s*(,){0,1}\s*$", 'resources/finalDrives.json')


def mergeDriveRootAndRcloneDrives(first_file, sec_file, output_file) -> None:
    with open(first_file, 'r', encoding='utf-8') as f:
        driveRoot = json.load(f)
    try:
        with open(sec_file, 'r', encoding='utf-8') as f:
            rcloneDrives = json.load(f)
    except FileNotFoundError:
        rcloneDrives = []
    for drive in rcloneDrives:
        driveRoot.append(drive)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(driveRoot, f, indent=4)


def removeSquareBrackets(file) -> None:
    with open(file, 'r', encoding='utf-8') as f:
        data = f.readlines()
    with open(file, 'w', encoding='utf-8') as f:
        f.writelines(data[1:len(data)-1])


def main() -> None:
    with open('resources/GDI.js', 'r', encoding='utf-8') as f:
        GDIContent = f.readlines()
    GDIContent = replaceUserHeader(GDIContent)
    mergeDriveRootAndRcloneDrives(
        'resources/driveRoot.json', 'resources/rcloneDrives.json', 'resources/finalDrives.json')
    removeSquareBrackets('resources/finalDrives.json')
    GDIContent = replaceDriveRoot(GDIContent)
    with open('resources/GDI-modified.js', 'w', encoding='utf-8') as f:
        f.writelines(GDIContent)


if __name__ == "__main__":
    main()
