import os
import fileinput
import re

# Define the directory you want to start from
rootDir = '../docs'

for dirName, subdirList, fileList in os.walk(rootDir):
    for fname in fileList:
        if fname.endswith('.md'):
            file_path = os.path.join(dirName, fname)
            with fileinput.FileInput(file_path, inplace=True) as file:
                for line in file:
                    # Find img tag
                    img_tag = re.search(r'<img (.+?) />', line)
                    if img_tag:
                        # Extract attributes
                        attributes = img_tag.group(1)
                        # Replace with LazyLoadImage component
                        print(line.replace(img_tag.group(), f'<LazyLoadImage {attributes} />'), end='')
                    else:
                        print(line, end='')