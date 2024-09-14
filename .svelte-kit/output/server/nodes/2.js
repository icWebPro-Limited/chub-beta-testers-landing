

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.TAxVsq0v.js","_app/immutable/chunks/scheduler.mvuM14Vw.js","_app/immutable/chunks/index.coeg7t6C.js"];
export const stylesheets = [];
export const fonts = [];
