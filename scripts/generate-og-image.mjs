import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generate() {
  const width = 1200;
  const height = 630;
  const portraitPath = path.join(__dirname, '..', 'public', 'icons', 'dhushyandh-photo-favicon.png');
  const portraitSize = 380;
  const portraitCircleMask = Buffer.from(`
    <svg width="${portraitSize}" height="${portraitSize}">
      <circle cx="${portraitSize / 2}" cy="${portraitSize / 2}" r="${portraitSize / 2}" fill="#000" />
    </svg>
  `);

  const resizedPortrait = await sharp(portraitPath)
    .resize(portraitSize, portraitSize, { fit: 'cover' })
    .composite([{ input: portraitCircleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0b0e" />
          <stop offset="50%" stop-color="#101318" />
          <stop offset="100%" stop-color="#08090b" />
        </linearGradient>

        <radialGradient id="greenGlow" cx="80%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#d4ff00" stop-opacity="0.14" />
          <stop offset="60%" stop-color="#d4ff00" stop-opacity="0.02" />
          <stop offset="100%" stop-color="#d4ff00" stop-opacity="0" />
        </radialGradient>

        <radialGradient id="cardGlow" cx="20%" cy="20%" r="60%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.04" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>

        <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a2e39" />
          <stop offset="50%" stop-color="#1a1c22" />
          <stop offset="100%" stop-color="#2a2e39" />
        </linearGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
      <rect width="${width}" height="${height}" fill="url(#greenGlow)" />
      <rect width="${width}" height="${height}" fill="url(#cardGlow)" />

      <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="url(#cardBorder)" stroke-width="1.5" />

      <g transform="translate(80, 85)">
        <rect width="280" height="34" rx="17" fill="#14171d" stroke="#262b36" stroke-width="1" />
        <circle cx="20" cy="17" r="5" fill="#d4ff00" />
        <circle cx="20" cy="17" r="9" fill="#d4ff00" fill-opacity="0.25" />
        <text x="35" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#d4ff00" letter-spacing="1.2">AVAILABLE FOR FREELANCE</text>
      </g>

      <text x="80" y="200" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Instrument Serif', Georgia, serif" font-size="68" font-weight="800" fill="#ffffff" letter-spacing="-1.5">Dhushyandh</text>

      <g transform="translate(80, 245)">
        <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="700" fill="#d4ff00" letter-spacing="-0.3">Full-Stack Web Developer &amp; Freelancer</text>
      </g>

      <g transform="translate(80, 285)">
        <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#9ca3af" letter-spacing="0">
          <tspan x="0" dy="0">Engineering high-performance web applications, mobile apps &amp; digital</tspan>
          <tspan x="0" dy="28">products with clean architecture, thoughtful design, and modern stacks.</tspan>
        </text>
      </g>

      <g transform="translate(80, 385)">
        <rect x="0" y="0" width="80" height="32" rx="8" fill="#151820" stroke="#252a35" stroke-width="1" />
        <text x="40" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#e4e4e7" text-anchor="middle">React</text>

        <rect x="90" y="0" width="90" height="32" rx="8" fill="#151820" stroke="#252a35" stroke-width="1" />
        <text x="135" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#e4e4e7" text-anchor="middle">Next.js</text>

        <rect x="190" y="0" width="110" height="32" rx="8" fill="#151820" stroke="#252a35" stroke-width="1" />
        <text x="245" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#e4e4e7" text-anchor="middle">TypeScript</text>

        <rect x="310" y="0" width="125" height="32" rx="8" fill="#151820" stroke="#252a35" stroke-width="1" />
        <text x="372" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#e4e4e7" text-anchor="middle">React Native</text>

        <rect x="445" y="0" width="90" height="32" rx="8" fill="#151820" stroke="#252a35" stroke-width="1" />
        <text x="490" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#e4e4e7" text-anchor="middle">Node.js</text>

        <rect x="545" y="0" width="105" height="32" rx="8" fill="#151820" stroke="#252a35" stroke-width="1" />
        <text x="597" y="21" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#e4e4e7" text-anchor="middle">Tailwind CSS</text>
      </g>

      <g transform="translate(80, 520)">
        <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#ffffff" letter-spacing="0.5">dhushyandh.in</text>
        <circle cx="125" cy="-5" r="3" fill="#4b5563" />
        <text x="140" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#9ca3af">Vellore, Tamil Nadu, India</text>
      </g>

      <g transform="translate(730, 125)">
        <circle cx="${portraitSize / 2}" cy="${portraitSize / 2}" r="${portraitSize / 2 + 14}" fill="none" stroke="#d4ff00" stroke-opacity="0.35" stroke-width="2" />
        <circle cx="${portraitSize / 2}" cy="${portraitSize / 2}" r="${portraitSize / 2 + 4}" fill="none" stroke="#262b36" stroke-width="3" />
      </g>
    </svg>
  `);

  const ogBuffer = await sharp(svgOverlay)
    .composite([
      {
        input: resizedPortrait,
        top: 125,
        left: 730,
      },
    ])
    .png({ quality: 92, compressionLevel: 8 })
    .toBuffer();

  const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
  fs.writeFileSync(outputPath, ogBuffer);
  const meta = await sharp(outputPath).metadata();
  console.log('Confirmed og-image dimensions:', meta.width, 'x', meta.height, 'size:', ogBuffer.length);
}

generate().catch(console.error);
