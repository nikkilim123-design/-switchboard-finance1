// scripts/generate-rss.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getPosts() {
  const dir = path.join(process.cwd(), 'content', 'posts');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  return files.map(f => {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const { data, content } = matter(raw);
    return { slug: f.replace(/\.md$/, ''), ...data, content };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, c => ({ '<':'&lt;','>':'&gt;','&':'&amp;', "'":'&apos;','"':'&quot;' }[c]));
}

const SITE = process.env.SITE_URL || 'https://example.com';

const items = getPosts().map(p => `
  <item>
    <title>${escapeXml(p.title || p.slug)}</title>
    <link>${SITE}/blog/${p.slug}</link>
    <guid>${SITE}/blog/${p.slug}</guid>
    <pubDate>${new Date(p.date || Date.now()).toUTCString()}</pubDate>
    <description>${escapeXml(p.excerpt || '')}</description>
  </item>
`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Switchboard Finance — Blog</title>
    <link>${SITE}</link>
    <description>Finance guides and lender policy explainers.</description>
    ${items}
  </channel>
</rss>`;

const out = path.join(process.cwd(), 'public', 'rss.xml');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, xml);
console.log('RSS generated at /public/rss.xml');
