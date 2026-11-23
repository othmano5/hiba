"""Create the university hand-in archive from verified source and previews."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from shutil import copyfile

root = Path(__file__).resolve().parents[1]
destination = root / 'Hiba-Khaled-Al-Zein-CV-Project.zip'
files = [root / name for name in ['index.html', 'styles.css', 'script.js', 'README.md', 'DESIGN.md', 'package.json', 'package-lock.json']]
files += list((root / 'assets').rglob('*'))
files += list((root / 'tools').glob('*'))
preview_names = ['preview-full.png', 'preview-desktop.png', 'preview-mobile.png', 'preview-mobile-top.png', 'preview-dark.png', 'preview-project.png', 'features-overview.png', 'Hiba-Khaled-Al-Zein-CV.pdf']
files += [root / 'artifacts' / name for name in preview_names]
missing = [str(file.relative_to(root)) for file in files if not file.exists()]
if missing:
    raise RuntimeError(f'Missing delivery files: {missing}')
with ZipFile(destination, 'w', ZIP_DEFLATED, compresslevel=7) as archive:
    for file in files:
        if file.is_file():
            archive.write(file, 'Hiba-Khaled-Al-Zein-CV/' + file.relative_to(root).as_posix())
with ZipFile(destination) as archive:
    assert archive.testzip() is None
    for required in ['Hiba-Khaled-Al-Zein-CV/index.html', 'Hiba-Khaled-Al-Zein-CV/assets/fonts/alexandria-arabic.woff2', 'Hiba-Khaled-Al-Zein-CV/assets/images/studyflow.webp', 'Hiba-Khaled-Al-Zein-CV/artifacts/features-overview.png']:
        assert required in archive.namelist(), required
    assert not any('/node_modules/' in name or '/.git/' in name for name in archive.namelist())
    print(f'Archive verified: {len(archive.namelist())} files, {destination.stat().st_size:,} bytes')
    print(destination)
copyfile(destination, root / 'Hiba-CV-University-Project.zip')
