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
		client: {"start":"_app/immutable/entry/start.riaUG9Rs.js","app":"_app/immutable/entry/app.UTTfh5B3.js","imports":["_app/immutable/entry/start.riaUG9Rs.js","_app/immutable/chunks/scheduler.mvuM14Vw.js","_app/immutable/chunks/singletons.ir2ebkTa.js","_app/immutable/entry/app.UTTfh5B3.js","_app/immutable/chunks/scheduler.mvuM14Vw.js","_app/immutable/chunks/index.coeg7t6C.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
