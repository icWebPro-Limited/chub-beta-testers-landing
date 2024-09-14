export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "chub-beta-testers-landing/_app",
	assets: new Set([".DS_Store","blog-images/P3.jpg","blog-images/P4.jpg","blog-images/P5.jpg","blog-images/P6.jpg","favicon.png","favicon0.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.XqLNFgFM.js","app":"_app/immutable/entry/app.UpD2vH34.js","imports":["_app/immutable/entry/start.XqLNFgFM.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/singletons.CBj4squ2.js","_app/immutable/entry/app.UpD2vH34.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.fwz0P8IJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
