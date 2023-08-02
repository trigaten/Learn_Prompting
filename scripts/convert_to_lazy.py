import os
import re

# Define the directory you want to start from
rootDir = '../'

for dirName, subdirList, fileList in os.walk(rootDir):
    if "node_modules" not in dirName:
        for fname in fileList:
            if fname.endswith('.md') or fname.endswith(".js"):
                file_path = os.path.join(dirName, fname)
                with open(file_path, 'r') as file:
                    content = file.read()
                # Find all img tags
                img_tags = re.findall(r'<img\s+(.*?)/>', content, re.DOTALL | re.MULTILINE)
                for img_tag in img_tags:
                    # Extract attributes
                    attributes = ' '.join(img_tag.split())
                    # Replace with LazyLoadImage component
                    content = re.sub(f'<img\s+{img_tag}/>', f'<LazyLoadImage {attributes}/>', content)
                with open(file_path, 'w') as file:
                    file.write(content)