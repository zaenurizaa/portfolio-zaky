import os
import sys
import subprocess

try:
    import fitz
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, '-m', 'pip', 'install', 'PyMuPDF', 'Pillow'])
    import fitz
    from PIL import Image

def convert_image(src, dst):
    try:
        img = Image.open(src)
        img.save(dst, 'webp', quality=80)
        print(f"Converted: {src} -> {dst}")
        return True
    except Exception as e:
        print(f"Failed to convert {src}: {e}")
        return False

def convert_pdf(src, dst):
    try:
        doc = fitz.open(src)
        page = doc.load_page(0)  # first page
        pix = page.get_pixmap(dpi=150)
        
        # Save as PNG first temporarily
        temp_png = dst + ".png"
        pix.save(temp_png)
        
        # Convert to WebP
        img = Image.open(temp_png)
        img.save(dst, 'webp', quality=80)
        img.close()
        
        os.remove(temp_png)
        print(f"Converted PDF: {src} -> {dst}")
        return True
    except Exception as e:
        print(f"Failed to convert PDF {src}: {e}")
        return False

base_dir = "d:/laragon/www/Porto-Zaky/Assets"
out_dir = "d:/laragon/www/Porto-Zaky/public/images"
os.makedirs(out_dir, exist_ok=True)

for root, dirs, files in os.walk(base_dir):
    for file in files:
        src = os.path.join(root, file)
        filename, ext = os.path.splitext(file)
        ext = ext.lower()
        
        safe_filename = filename.replace(" ", "_").replace("(", "").replace(")", "").replace("-", "_")
        dst = os.path.join(out_dir, f"{safe_filename}.webp")
        
        if ext in ['.png', '.jpg', '.jpeg']:
            convert_image(src, dst)
        elif ext == '.pdf':
            convert_pdf(src, dst)

print("All files processed.")
