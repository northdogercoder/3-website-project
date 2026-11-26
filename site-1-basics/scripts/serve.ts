import { resolve, sep } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);

const server = Bun.serve({
  port: Number(process.env.PORT ?? 8000),
  async fetch(request) {
    const { pathname } = new URL(request.url);
    const requested = resolve(root, "." + decodeURIComponent(pathname));
    if (requested !== root && !requested.startsWith(root + sep)) {
      return new Response("Not found", { status: 404 });
    }
    const file = Bun.file(pathname.endsWith("/") ? `${requested}/index.html` : requested);
    if (!(await file.exists())) return new Response("Not found", { status: 404 });
    return new Response(file, { headers: { "cache-control": "no-store" } });
  },
});

console.log(`Serving ${root} at http://localhost:${server.port}/`);
