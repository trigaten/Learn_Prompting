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
                # Find all LazyLoadImage components
                lazyload_tags = re.findall(r'<LazyLoadImage\s+(.*?)/>', content, re.DOTALL | re.MULTILINE)
                if lazyload_tags:
                    # Extract attributes of the first LazyLoadImage component
                    attributes = ' '.join(lazyload_tags[0].split())
                    # Replace the first LazyLoadImage component with a regular img tag
                    content = re.sub(f'<LazyLoadImage\s+{lazyload_tags[0]}/>', f'<img {attributes}/>', content, count=1)
                with open(file_path, 'w') as file:
                    file.write(content)