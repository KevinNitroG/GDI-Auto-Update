from itertools import count
import re


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
    counter = count(start=1, step=1)
    done = False
    for line in data:
        if start_num_line < next(counter) < end_num_line:
            if done == False:
                with open(file_to_open, 'r', encoding='utf-8') as f:
                    read_data = f.readlines()
                result.extend(read_data)
                done = True
        else:
            result.append(line)
    return result


def replaceUserHeader(data) -> list:
    return replaceDataContent(data, r"^\s*// Website: https://gdi.js.org\s*$", r"^\s*// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING\s*$", 'resources/userHeader.js')


def replaceDriveRoot(data) -> list:
    return replaceDataContent(data, r"^\s*roots\s*:\s*\[\s*$", r"^\s*\]\s*$", 'resources/driveRoot.json')


def main():
    with open('resources/GDI.js', 'r', encoding='utf-8') as f:
        GDIContent = f.readlines()
    GDIContent = replaceUserHeader(GDIContent)
    GDIContent = replaceDriveRoot(GDIContent)
    with open('resources/GDI-modified.js', 'w', encoding='utf-8') as f:
        f.writelines(GDIContent)


if __name__ == "__main__":
    main()
