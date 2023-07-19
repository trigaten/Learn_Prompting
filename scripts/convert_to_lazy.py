import os
import fileinput
import re

# Define the directory you want to start from
rootDir = '../docs'

for dirName, subdirList, fileList in os.walk(rootDir):
    for fname in fileList:
        if fname.endswith('.md'):
            file_path = os.path.join(dirName, fname)
            with fileinput.FileInput(file_path, inplace=True, backup='.bak') as file:
                for line in file:
                    # Find img tag
                    img_tag = re.search(r'<img src={(.+?)}( style={{width: "(.+?)"}})? />', line)
                    if img_tag:
                        # Extract image source and width
                        img_src = img_tag.group(1)
                        img_width = img_tag.group(3) if img_tag.group(3) else "auto"
                        # Replace with LazyLoadImage component
                        print(line.replace(img_tag.group(), f'<LazyLoadImage src={img_src} width={img_width} />'), end='')
                    else:
                        print(line, end='')