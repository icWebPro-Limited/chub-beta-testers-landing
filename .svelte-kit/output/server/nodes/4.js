

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.uuDv2Cgh.js","_app/immutable/chunks/scheduler.JYXm5SQX.js","_app/immutable/chunks/index._cP05WfC.js"];
export const stylesheets = [];
export const fonts = [];
