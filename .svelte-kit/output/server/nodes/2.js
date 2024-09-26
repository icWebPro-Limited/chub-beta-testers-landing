

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0DKRINC7.js","_app/immutable/chunks/scheduler.JYXm5SQX.js","_app/immutable/chunks/index._cP05WfC.js","_app/immutable/chunks/sweetalert2.esm.all.HDkAWA8Y.js"];
export const stylesheets = [];
export const fonts = [];
