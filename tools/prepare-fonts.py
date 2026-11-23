"""Download the two OFL fonts for offline delivery. Not needed to run the site."""
from pathlib import Path
import re
import urllib.request

ROOT = Path(__file__).resolve().parents[1] / 'assets' / 'fonts'
ROOT.mkdir(parents=True, exist_ok=True)
url = 'https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Manrope:wght@200..800&display=swap'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'}
with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=40) as response:
    css = response.read().decode()
for script, body in re.findall(r'/\*\s*([^*]+?)\s*\*/\s*(@font-face\s*\{[^}]+\})', css):
    if script not in ['arabic', 'latin']:
        continue
    family = re.search(r"font-family:\s*'([^']+)'", body).group(1).lower()
    if family == 'manrope' and script != 'latin':
        continue
    source = re.search(r'url\((https://[^)]+)\)', body).group(1)
    target = ROOT / f'{family}-{script}.woff2'
    urllib.request.urlretrieve(source, target)
    print(target.name, target.stat().st_size)
for filename in ['alexandria-arabic.woff2', 'alexandria-latin.woff2', 'manrope-latin.woff2']:
    if not (ROOT / filename).is_file():
        raise RuntimeError(f'Missing required font: {filename}')
for family in ['alexandria', 'manrope']:
    license_url = f'https://raw.githubusercontent.com/google/fonts/main/ofl/{family}/OFL.txt'
    urllib.request.urlretrieve(license_url, ROOT / f'{family}-OFL.txt')
