import os
import fileinput
import re

# Define the directory you want to start from
rootDir = '../'

for dirName, subdirList, fileList in os.walk(rootDir):
    if "node_modules" not in dirName:
        for fname in fileList:
            if fname.endswith('.md') or fname.endswith(".js"):
                file_path = os.path.join(dirName, fname)
                with fileinput.FileInput(file_path, inplace=True) as file:
                    for line in file:
                        # Find all img tags
                        img_tags = re.findall(r'<img (.+?)/>', line)
                        for img_tag in img_tags:
                            # Extract attributes
                            attributes = img_tag
                            # Replace with LazyLoadImage component
                            line = line.replace(f'<img {attributes}/>', f'<LazyLoadImage {attributes}/>')
                        print(line, end='')