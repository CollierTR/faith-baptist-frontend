// src/pages/api/download.ts
export async function GET({ url }) {
  const src = url.searchParams.get("src");
  if (!src) {
    return new Response("Missing src", { status: 400 });
  }

  const upstream = await fetch(src);

  if (!upstream.ok) {
    return new Response("Failed to fetch media", { status: 502 });
  }

  const buffer = await upstream.arrayBuffer();

  return new Response(buffer, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "audio/mpeg",
      "Content-Disposition": `attachment; filename="sermon.mp3"`,
      "Content-Length": buffer.byteLength.toString(),
    },
  });
}

