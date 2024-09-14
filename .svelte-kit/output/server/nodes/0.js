

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.TPefyB_B.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.fwz0P8IJ.js"];
export const stylesheets = [];
export const fonts = [];
