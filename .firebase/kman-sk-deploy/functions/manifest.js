export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.149d2dd6.js","app":"_app/immutable/entry/app.7f123768.js","imports":["_app/immutable/entry/start.149d2dd6.js","_app/immutable/chunks/scheduler.6f4350a0.js","_app/immutable/chunks/singletons.541d11cc.js","_app/immutable/chunks/index.6cc25391.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.7f123768.js","_app/immutable/chunks/scheduler.6f4350a0.js","_app/immutable/chunks/index.7b4a91c1.js","_app/immutable/chunks/environment.c65a56ab.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
