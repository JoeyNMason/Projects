from rembg import remove
from PIL import Image
input_path = r'C:\Users\josep\Documents\bg-img-removal\original\glowstick-boy.jpg'
output_path = r'C:\Users\josep\Documents\bg-img-removal\new\glowstick-boy.png'
inp = Image.open(input_path)
output = remove(inp)
output.save(output_path)