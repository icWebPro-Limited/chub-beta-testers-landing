

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.PVmfNMIj.js","_app/immutable/chunks/scheduler.JYXm5SQX.js","_app/immutable/chunks/index._cP05WfC.js","_app/immutable/chunks/paths.fXrBgRE_.js"];
export const stylesheets = ["_app/immutable/assets/0.NmxPjHsV.css"];
export const fonts = ["_app/immutable/assets/Glancyr-Regular.CRzI-QcJ.otf","_app/immutable/assets/Glancyr-ThinItalic.PMNCY-ws.otf","_app/immutable/assets/Glancyr-Bold.wgybKp5I.otf"];
