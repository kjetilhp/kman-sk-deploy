import * as server from '../entries/pages/sverdle/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.19c2dc8b.js","_app/immutable/chunks/scheduler.6f4350a0.js","_app/immutable/chunks/index.7b4a91c1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.541d11cc.js","_app/immutable/chunks/index.6cc25391.js"];
export const stylesheets = ["_app/immutable/assets/4.53295563.css"];
export const fonts = [];
