import { UPDATES } from "@/lib/data/updates";
import { SITE } from "@/lib/data/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = UPDATES.map((entry) => {
    const link = entry.url ?? SITE.url;
    return `
    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="false">${escapeXml(entry.slug)}</guid>
      <category>${escapeXml(entry.project)}</category>
      <description>${escapeXml(`${entry.version} — ${entry.summary}`)}</description>
    </item>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} — Build Log</title>
    <link>${escapeXml(SITE.url)}</link>
    <atom:link href="${escapeXml(SITE.url)}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(`Release notes from the SAYANJALI NEXUS / SYJ product ecosystem, built by ${SITE.name}.`)}</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
