import os
from pathlib import Path
from PIL import Image
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
import sys
sys.path.append("..")

# Supported image file types
image_types = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff']

def convert_to_webp(source):
    """Convert image to WebP.

    Args:
        source (pathlib.Path): Path to source image

    Returns:
        pathlib.Path: path to new image
    """
    destination = source.with_suffix(".webp")

    try:
        image = Image.open(source)  # Open image

        image.save(destination, format="webp")  # Convert image to webp
        os.remove(source)  # Delete the original image

        return destination
    except ValueError as e:
        print(f'Could not convert file {source} due to error: {e}')

def update_paths(file_path):
    try:
        with open(file_path, 'r') as file:
            data = file.read()

        new_data = data
        for image_type in image_types:
            new_data = new_data.replace(image_type, '.webp')

        if new_data != data:
            with open(file_path, 'w') as file:
                file.write(new_data)
    except UnicodeDecodeError:
        print(f'Could not read file {file_path} due to UnicodeDecodeError.')

def main():
    current_path = Path('../')
    for file_path in current_path.rglob('*'):
        if 'node_modules' in file_path.parts or '.docusaurus' in file_path.parts:
            continue  # Skip files in 'node_modules' or '.docusaurus' directories
        if file_path.is_file():  # Check if the path is a file
            if file_path.suffix in image_types:
                convert_to_webp(file_path)
            elif file_path.suffix in ['.js', '.md']:
                update_paths(file_path)

if __name__ == "__main__":
    main()