"""Package only the static website for a single browser upload to GitHub."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import re

root = Path(__file__).resolve().parents[1]
destination = root / 'Hiba-GitHub-Upload-Only.zip'
files = [root / name for name in ['index.html', 'styles.css', 'script.js']]
files += sorted(path for path in (root / 'assets').rglob('*') if path.is_file())

guide = """هبة خالد الزين — حزمة الموقع للرفع على GitHub

هذه الحزمة تحتوي على ملفات الموقع وصوره وخطوطه فقط.

1. فك ضغط هذه الحزمة باستخدام Extract All.
2. افتح المجلد المستخرج الذي يحتوي على index.html.
3. افتح مستودعك على GitHub واختر Add file ثم Upload files.
4. حدّد كل محتويات المجلد المستخرج، بما فيها assets، واسحبها إلى مساحة الرفع في المتصفح.
5. تأكّد من ظهور مسارات مثل assets/images/hero.webp.
6. احفظ الملفات باستخدام Commit changes على الفرع main.
7. من Settings ثم Pages، اختر Deploy from a branch والفرع main والمجلد /(root)، ثم Save.

يجب أن يكون index.html مباشرة في جذر المستودع وبجانبه styles.css وscript.js ومجلد assets.
يمكن استبدال الملفات المتطابقة الموجودة في المستودع بهذه النسخة.
"""

with ZipFile(destination, 'w', ZIP_DEFLATED, compresslevel=7) as archive:
    for file in files:
        archive.write(file, file.relative_to(root).as_posix())
    archive.writestr('README-Upload.txt', guide)
    archive.writestr('.nojekyll', '')

with ZipFile(destination) as archive:
    assert archive.testzip() is None
    names = set(archive.namelist())
    assert len(names) <= 100
    assert all(file.file_size <= 25 * 1024 * 1024 for file in archive.infolist())
    for file in files:
        assert archive.read(file.relative_to(root).as_posix()) == file.read_bytes()
    html = archive.read('index.html').decode('utf-8')
    css = archive.read('styles.css').decode('utf-8')
    script = archive.read('script.js').decode('utf-8')
    for reference in re.findall(r'(?:src|href)="(assets/[^"?#]+)', html):
        assert reference in names, reference
    for reference in re.findall(r'url\([\'"]?(assets/[^\'"\)]+)', css):
        assert reference in names, reference
    for image in re.findall(r"image:\s*'([^']+)'", script):
        assert f'assets/images/{image}.webp' in names, image
    assert not any(name.startswith(('node_modules/', '.git/', '.openai/', 'artifacts/', 'outputs/')) for name in names)
    print(f'PASS: {len(names)} files total, including every nested file; {sum(name.startswith("assets/") for name in names)} asset files.')
    print(f'ZIP integrity, source equality and all image/font references verified. Size: {destination.stat().st_size:,} bytes.')
    print(destination)
