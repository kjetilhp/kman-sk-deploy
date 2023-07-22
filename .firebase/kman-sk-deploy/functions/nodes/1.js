

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fda9f6e0.js","_app/immutable/chunks/scheduler.6f4350a0.js","_app/immutable/chunks/index.7b4a91c1.js","_app/immutable/chunks/stores.eceecfd6.js","_app/immutable/chunks/singletons.541d11cc.js","_app/immutable/chunks/index.6cc25391.js"];
export const stylesheets = [];
export const fonts = [];
