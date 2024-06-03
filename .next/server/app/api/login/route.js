"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_msi_Jatin_practice_webauthn_app_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/login/route.js */ \"(rsc)/./app/api/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"/home/msi/Jatin/practice/webauthn-app/app/api/login/route.js\",\n    nextConfigOutput,\n    userland: _home_msi_Jatin_practice_webauthn_app_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGbXNpJTJGSmF0aW4lMkZwcmFjdGljZSUyRndlYmF1dGhuLWFwcCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRm1zaSUyRkphdGluJTJGcHJhY3RpY2UlMkZ3ZWJhdXRobi1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ1k7QUFDekY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhdXRobi1hcHAvPzc1MTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvbXNpL0phdGluL3ByYWN0aWNlL3dlYmF1dGhuLWFwcC9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL21zaS9KYXRpbi9wcmFjdGljZS93ZWJhdXRobi1hcHAvYXBwL2FwaS9sb2dpbi9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbG9naW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/login/route.js":
/*!********************************!*\
  !*** ./app/api/login/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _simplewebauthn_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simplewebauthn/server */ \"(rsc)/./node_modules/@simplewebauthn/server/esm/index.js\");\n\nconst rpID = \"serveo.net\"; // Change this to your domain\nconst origin = \"https://b0b910086a8509e762305ab321117494.serveo.net\"; // Change this to your URL\nlet userDatabase = {\n    Ok: {\n        challenge: \"sPaJ5qDN8V1fBqyYXXzvAtPggoAtsHWXW5hHmUlgHbw\",\n        credential: {\n            fmt: \"none\",\n            counter: 0,\n            aaguid: \"ea9b8d66-4d01-1d21-3ce4-b6b48cb575d4\",\n            credentialID: \"FaLLaCYmIlnD6A4EIwRb7Q\",\n            credentialPublicKey: [\n                Uint8Array\n            ],\n            credentialType: \"public-key\",\n            attestationObject: [\n                Uint8Array\n            ],\n            userVerified: true,\n            credentialDeviceType: \"multiDevice\",\n            credentialBackedUp: true,\n            origin: \"https://b0b910086a8509e762305ab321117494.serveo.net\",\n            rpID: \"serveo.net\",\n            authenticatorExtensionResults: undefined\n        }\n    }\n}; // For now we can you static data registered, later a database can be used for this\nasync function POST(req) {\n    const incomingData = await req.json();\n    const username = incomingData.username;\n    const user = userDatabase[username];\n    if (!user || !user.credential) {\n        return Response.json({\n            error: \"User not found\"\n        });\n    }\n    const options = await (0,_simplewebauthn_server__WEBPACK_IMPORTED_MODULE_0__.generateAuthenticationOptions)({\n        rpID,\n        allowCredentials: [\n            {\n                id: user.credential.credentialID,\n                type: \"public-key\",\n                transports: [\n                    \"usb\",\n                    \"ble\",\n                    \"nfc\",\n                    \"internal\"\n                ]\n            }\n        ]\n    });\n    // Store the challenge in our 'database'\n    userDatabase[username] = {\n        ...userDatabase[username],\n        challenge: options.challenge\n    };\n    return Response.json(options);\n}\nasync function PUT(req) {\n    const incomingData = await req.json();\n    const { username, assertionResponse } = incomingData;\n    const user = userDatabase[username];\n    const expectedChallenge = user?.challenge;\n    if (!username || !assertionResponse || !expectedChallenge) {\n        return Response.json({\n            error: \"Invalid request\"\n        });\n    }\n    try {\n        const verification = await (0,_simplewebauthn_server__WEBPACK_IMPORTED_MODULE_0__.verifyAuthenticationResponse)({\n            response: assertionResponse,\n            expectedChallenge,\n            expectedOrigin: origin,\n            expectedRPID: rpID,\n            authenticator: user.credential\n        });\n        if (verification.verified) {\n            return Response.json({\n                success: true\n            });\n        }\n        return Response.json({\n            error: \"Verification failed\"\n        });\n    } catch (error) {\n        console.log(\"error =>\", error);\n        return Response.json({\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUdnQztBQUVoQyxNQUFNRSxPQUFPLGNBQWMsNkJBQTZCO0FBQ3hELE1BQU1DLFNBQVMsdURBQXVELDBCQUEwQjtBQUVoRyxJQUFJQyxlQUFlO0lBQ2pCQyxJQUFJO1FBQ0ZDLFdBQVc7UUFDWEMsWUFBWTtZQUNWQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsUUFBUTtZQUNSQyxjQUFjO1lBQ2RDLHFCQUFxQjtnQkFBQ0M7YUFBVztZQUNqQ0MsZ0JBQWdCO1lBQ2hCQyxtQkFBbUI7Z0JBQUNGO2FBQVc7WUFDL0JHLGNBQWM7WUFDZEMsc0JBQXNCO1lBQ3RCQyxvQkFBb0I7WUFDcEJmLFFBQVE7WUFDUkQsTUFBTTtZQUNOaUIsK0JBQStCQztRQUNqQztJQUNGO0FBQ0YsR0FBRyxtRkFBbUY7QUFFL0UsZUFBZUMsS0FBS0MsR0FBRztJQUM1QixNQUFNQyxlQUFlLE1BQU1ELElBQUlFLElBQUk7SUFDbkMsTUFBTUMsV0FBV0YsYUFBYUUsUUFBUTtJQUN0QyxNQUFNQyxPQUFPdEIsWUFBWSxDQUFDcUIsU0FBUztJQUNuQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0EsS0FBS25CLFVBQVUsRUFBRTtRQUM3QixPQUFPb0IsU0FBU0gsSUFBSSxDQUFDO1lBQUVJLE9BQU87UUFBaUI7SUFDakQ7SUFFQSxNQUFNQyxVQUFVLE1BQU03QixxRkFBNkJBLENBQUM7UUFDbERFO1FBQ0E0QixrQkFBa0I7WUFDaEI7Z0JBQ0VDLElBQUlMLEtBQUtuQixVQUFVLENBQUNJLFlBQVk7Z0JBQ2hDcUIsTUFBTTtnQkFDTkMsWUFBWTtvQkFBQztvQkFBTztvQkFBTztvQkFBTztpQkFBVztZQUMvQztTQUNEO0lBQ0g7SUFFQSx3Q0FBd0M7SUFDeEM3QixZQUFZLENBQUNxQixTQUFTLEdBQUc7UUFDdkIsR0FBR3JCLFlBQVksQ0FBQ3FCLFNBQVM7UUFDekJuQixXQUFXdUIsUUFBUXZCLFNBQVM7SUFDOUI7SUFFQSxPQUFPcUIsU0FBU0gsSUFBSSxDQUFDSztBQUN2QjtBQUVPLGVBQWVLLElBQUlaLEdBQUc7SUFDM0IsTUFBTUMsZUFBZSxNQUFNRCxJQUFJRSxJQUFJO0lBQ25DLE1BQU0sRUFBRUMsUUFBUSxFQUFFVSxpQkFBaUIsRUFBRSxHQUFHWjtJQUN4QyxNQUFNRyxPQUFPdEIsWUFBWSxDQUFDcUIsU0FBUztJQUNuQyxNQUFNVyxvQkFBb0JWLE1BQU1wQjtJQUVoQyxJQUFJLENBQUNtQixZQUFZLENBQUNVLHFCQUFxQixDQUFDQyxtQkFBbUI7UUFDekQsT0FBT1QsU0FBU0gsSUFBSSxDQUFDO1lBQUVJLE9BQU87UUFBa0I7SUFDbEQ7SUFFQSxJQUFJO1FBQ0YsTUFBTVMsZUFBZSxNQUFNcEMsb0ZBQTRCQSxDQUFDO1lBQ3REcUMsVUFBVUg7WUFDVkM7WUFDQUcsZ0JBQWdCcEM7WUFDaEJxQyxjQUFjdEM7WUFDZHVDLGVBQWVmLEtBQUtuQixVQUFVO1FBQ2hDO1FBRUEsSUFBSThCLGFBQWFLLFFBQVEsRUFBRTtZQUN6QixPQUFPZixTQUFTSCxJQUFJLENBQUM7Z0JBQUVtQixTQUFTO1lBQUs7UUFDdkM7UUFDQSxPQUFPaEIsU0FBU0gsSUFBSSxDQUFDO1lBQUVJLE9BQU87UUFBc0I7SUFDdEQsRUFBRSxPQUFPQSxPQUFPO1FBQ2RnQixRQUFRQyxHQUFHLENBQUMsWUFBWWpCO1FBQ3hCLE9BQU9ELFNBQVNILElBQUksQ0FBQztZQUFFSSxPQUFPQSxNQUFNa0IsT0FBTztRQUFDO0lBQzlDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhdXRobi1hcHAvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzPzdhOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2VuZXJhdGVBdXRoZW50aWNhdGlvbk9wdGlvbnMsXG4gIHZlcmlmeUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UsXG59IGZyb20gXCJAc2ltcGxld2ViYXV0aG4vc2VydmVyXCI7XG5cbmNvbnN0IHJwSUQgPSBcInNlcnZlby5uZXRcIjsgLy8gQ2hhbmdlIHRoaXMgdG8geW91ciBkb21haW5cbmNvbnN0IG9yaWdpbiA9IFwiaHR0cHM6Ly9iMGI5MTAwODZhODUwOWU3NjIzMDVhYjMyMTExNzQ5NC5zZXJ2ZW8ubmV0XCI7IC8vIENoYW5nZSB0aGlzIHRvIHlvdXIgVVJMXG5cbmxldCB1c2VyRGF0YWJhc2UgPSB7XG4gIE9rOiB7XG4gICAgY2hhbGxlbmdlOiBcInNQYUo1cUROOFYxZkJxeVlYWHp2QXRQZ2dvQXRzSFdYVzVoSG1VbGdIYndcIixcbiAgICBjcmVkZW50aWFsOiB7XG4gICAgICBmbXQ6IFwibm9uZVwiLFxuICAgICAgY291bnRlcjogMCxcbiAgICAgIGFhZ3VpZDogXCJlYTliOGQ2Ni00ZDAxLTFkMjEtM2NlNC1iNmI0OGNiNTc1ZDRcIixcbiAgICAgIGNyZWRlbnRpYWxJRDogXCJGYUxMYUNZbUlsbkQ2QTRFSXdSYjdRXCIsXG4gICAgICBjcmVkZW50aWFsUHVibGljS2V5OiBbVWludDhBcnJheV0sXG4gICAgICBjcmVkZW50aWFsVHlwZTogXCJwdWJsaWMta2V5XCIsXG4gICAgICBhdHRlc3RhdGlvbk9iamVjdDogW1VpbnQ4QXJyYXldLFxuICAgICAgdXNlclZlcmlmaWVkOiB0cnVlLFxuICAgICAgY3JlZGVudGlhbERldmljZVR5cGU6IFwibXVsdGlEZXZpY2VcIixcbiAgICAgIGNyZWRlbnRpYWxCYWNrZWRVcDogdHJ1ZSxcbiAgICAgIG9yaWdpbjogXCJodHRwczovL2IwYjkxMDA4NmE4NTA5ZTc2MjMwNWFiMzIxMTE3NDk0LnNlcnZlby5uZXRcIixcbiAgICAgIHJwSUQ6IFwic2VydmVvLm5ldFwiLFxuICAgICAgYXV0aGVudGljYXRvckV4dGVuc2lvblJlc3VsdHM6IHVuZGVmaW5lZCxcbiAgICB9LFxuICB9LFxufTsgLy8gRm9yIG5vdyB3ZSBjYW4geW91IHN0YXRpYyBkYXRhIHJlZ2lzdGVyZWQsIGxhdGVyIGEgZGF0YWJhc2UgY2FuIGJlIHVzZWQgZm9yIHRoaXNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIGNvbnN0IGluY29taW5nRGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGNvbnN0IHVzZXJuYW1lID0gaW5jb21pbmdEYXRhLnVzZXJuYW1lO1xuICBjb25zdCB1c2VyID0gdXNlckRhdGFiYXNlW3VzZXJuYW1lXTtcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmNyZWRlbnRpYWwpIHtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVzZXIgbm90IGZvdW5kXCIgfSk7XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0gYXdhaXQgZ2VuZXJhdGVBdXRoZW50aWNhdGlvbk9wdGlvbnMoe1xuICAgIHJwSUQsXG4gICAgYWxsb3dDcmVkZW50aWFsczogW1xuICAgICAge1xuICAgICAgICBpZDogdXNlci5jcmVkZW50aWFsLmNyZWRlbnRpYWxJRCxcbiAgICAgICAgdHlwZTogXCJwdWJsaWMta2V5XCIsXG4gICAgICAgIHRyYW5zcG9ydHM6IFtcInVzYlwiLCBcImJsZVwiLCBcIm5mY1wiLCBcImludGVybmFsXCJdLFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcblxuICAvLyBTdG9yZSB0aGUgY2hhbGxlbmdlIGluIG91ciAnZGF0YWJhc2UnXG4gIHVzZXJEYXRhYmFzZVt1c2VybmFtZV0gPSB7XG4gICAgLi4udXNlckRhdGFiYXNlW3VzZXJuYW1lXSxcbiAgICBjaGFsbGVuZ2U6IG9wdGlvbnMuY2hhbGxlbmdlLFxuICB9O1xuXG4gIHJldHVybiBSZXNwb25zZS5qc29uKG9wdGlvbnMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcSkge1xuICBjb25zdCBpbmNvbWluZ0RhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuICBjb25zdCB7IHVzZXJuYW1lLCBhc3NlcnRpb25SZXNwb25zZSB9ID0gaW5jb21pbmdEYXRhO1xuICBjb25zdCB1c2VyID0gdXNlckRhdGFiYXNlW3VzZXJuYW1lXTtcbiAgY29uc3QgZXhwZWN0ZWRDaGFsbGVuZ2UgPSB1c2VyPy5jaGFsbGVuZ2U7XG5cbiAgaWYgKCF1c2VybmFtZSB8fCAhYXNzZXJ0aW9uUmVzcG9uc2UgfHwgIWV4cGVjdGVkQ2hhbGxlbmdlKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHJlcXVlc3RcIiB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgdmVyaWZ5QXV0aGVudGljYXRpb25SZXNwb25zZSh7XG4gICAgICByZXNwb25zZTogYXNzZXJ0aW9uUmVzcG9uc2UsXG4gICAgICBleHBlY3RlZENoYWxsZW5nZSxcbiAgICAgIGV4cGVjdGVkT3JpZ2luOiBvcmlnaW4sXG4gICAgICBleHBlY3RlZFJQSUQ6IHJwSUQsXG4gICAgICBhdXRoZW50aWNhdG9yOiB1c2VyLmNyZWRlbnRpYWwsXG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpY2F0aW9uLnZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XG4gICAgfVxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVmVyaWZpY2F0aW9uIGZhaWxlZFwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgPT5cIiwgZXJyb3IpO1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZUF1dGhlbnRpY2F0aW9uT3B0aW9ucyIsInZlcmlmeUF1dGhlbnRpY2F0aW9uUmVzcG9uc2UiLCJycElEIiwib3JpZ2luIiwidXNlckRhdGFiYXNlIiwiT2siLCJjaGFsbGVuZ2UiLCJjcmVkZW50aWFsIiwiZm10IiwiY291bnRlciIsImFhZ3VpZCIsImNyZWRlbnRpYWxJRCIsImNyZWRlbnRpYWxQdWJsaWNLZXkiLCJVaW50OEFycmF5IiwiY3JlZGVudGlhbFR5cGUiLCJhdHRlc3RhdGlvbk9iamVjdCIsInVzZXJWZXJpZmllZCIsImNyZWRlbnRpYWxEZXZpY2VUeXBlIiwiY3JlZGVudGlhbEJhY2tlZFVwIiwiYXV0aGVudGljYXRvckV4dGVuc2lvblJlc3VsdHMiLCJ1bmRlZmluZWQiLCJQT1NUIiwicmVxIiwiaW5jb21pbmdEYXRhIiwianNvbiIsInVzZXJuYW1lIiwidXNlciIsIlJlc3BvbnNlIiwiZXJyb3IiLCJvcHRpb25zIiwiYWxsb3dDcmVkZW50aWFscyIsImlkIiwidHlwZSIsInRyYW5zcG9ydHMiLCJQVVQiLCJhc3NlcnRpb25SZXNwb25zZSIsImV4cGVjdGVkQ2hhbGxlbmdlIiwidmVyaWZpY2F0aW9uIiwicmVzcG9uc2UiLCJleHBlY3RlZE9yaWdpbiIsImV4cGVjdGVkUlBJRCIsImF1dGhlbnRpY2F0b3IiLCJ2ZXJpZmllZCIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/login/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@simplewebauthn","vendor-chunks/tr46","vendor-chunks/asn1js","vendor-chunks/@peculiar","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/ipaddr.js","vendor-chunks/@levischuck","vendor-chunks/tslib","vendor-chunks/pvtsutils","vendor-chunks/pvutils","vendor-chunks/@hexagon","vendor-chunks/webidl-conversions","vendor-chunks/cross-fetch"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();