import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGES_DIR = "public/images";
const TARGET_EXTENSIONS = [".png", ".jpg", ".jpeg"];

// Quality and resize settings per image
const configs = {
  "hero.png":  { quality: 82, maxWidth: 1920 },
  "shop.png":  { quality: 78, maxWidth: 1200 },
  "fade1.png": { quality: 75, maxWidth: 1080 },
  "fade2.png": { quality: 75, maxWidth: 1080 },
  "fade3.jpg": { quality: 75, maxWidth: 1080 },
  "fade4.jpg": { quality: 75, maxWidth: 1080 },
  "fade5.jpg": { quality: 75, maxWidth: 1080 },
  "logo.jpg":  { quality: 85, maxWidth: 400  },
};

const files = await readdir(IMAGES_DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!TARGET_EXTENSIONS.includes(ext)) continue;

  const config = configs[file] || { quality: 78, maxWidth: 1200 };
  const inputPath = join(IMAGES_DIR, file);
  const outputName = basename(file, ext) + ".webp";
  const outputPath = join(IMAGES_DIR, outputName);

  const before = (await stat(inputPath)).size;

  await sharp(inputPath)
    .resize({ width: config.maxWidth, withoutEnlargement: true })
    .webp({ quality: config.quality, effort: 6 })
    .toFile(outputPath);

  const after = (await stat(outputPath)).size;
  console.log(
    `${file} → ${outputName}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  (-${(((before - after) / before) * 100).toFixed(0)}%)`
  );
}
