

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.x2HrAQ7W.js","_app/immutable/chunks/scheduler.JYXm5SQX.js","_app/immutable/chunks/index._cP05WfC.js"];
export const stylesheets = [];
export const fonts = [];
