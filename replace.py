import os
import re

target_dir = r"c:\Users\bhanu\Downloads\google anti gravity\kc-alphamedia\src\components"

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements
    new_content = re.sub(r'text-gray-\d+', 'text-text-secondary', content)
    new_content = re.sub(r'bg-black/50', 'bg-surface border-border', new_content)
    new_content = re.sub(r'bg-white/5', 'bg-surface hover:bg-surface-hover border-border', new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts') or file.endswith('.jsx'):
            process_file(os.path.join(root, file))

print("Done replacing colors.")
