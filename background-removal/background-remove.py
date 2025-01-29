from rembg import remove
import requests
from PIL import Image
from io import BytesIO
import os
import pandas as pd

os.makedirs('original', exist_ok=True)
os.makedirs('masked', exist_ok=True)

df = pd.read_csv('images.csv')

for link in df['link'].head(20):
    try:
        # get image, image name
        img_url = link.strip()
        print(f"Processing link: {link}")
        img_name = img_url.split('/')[-1]

        # download image
        response = requests.get(img_url, timeout=2)
        response.raise_for_status() # raise an error for bad HTTP request status
        img = Image.open(BytesIO(response.content))
        img.save('original/'+img_name, format='jpeg')

        # remove background algorithm
        output_path = 'masked/'+img_name

        with open(output_path, 'wb') as file:
            input = open('original/'+img_name, 'rb').read()
            subject = remove(input)
            file.write(subject)
        
        print(f"Successfully processed image: {img_name}")

    except Exception as e:
        print(f"Error processing {link}: {e}")