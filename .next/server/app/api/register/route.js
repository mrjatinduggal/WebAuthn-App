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
exports.id = "app/api/register/route";
exports.ids = ["app/api/register/route"];
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

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_msi_Jatin_practice_webauthn_app_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/register/route.js */ \"(rsc)/./app/api/register/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/register/route\",\n        pathname: \"/api/register\",\n        filename: \"route\",\n        bundlePath: \"app/api/register/route\"\n    },\n    resolvedPagePath: \"/home/msi/Jatin/practice/webauthn-app/app/api/register/route.js\",\n    nextConfigOutput,\n    userland: _home_msi_Jatin_practice_webauthn_app_app_api_register_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/register/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVnaXN0ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZWdpc3RlciUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGbXNpJTJGSmF0aW4lMkZwcmFjdGljZSUyRndlYmF1dGhuLWFwcCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRm1zaSUyRkphdGluJTJGcHJhY3RpY2UlMkZ3ZWJhdXRobi1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhdXRobi1hcHAvPzIxNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvbXNpL0phdGluL3ByYWN0aWNlL3dlYmF1dGhuLWFwcC9hcHAvYXBpL3JlZ2lzdGVyL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yZWdpc3Rlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3JlZ2lzdGVyXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL21zaS9KYXRpbi9wcmFjdGljZS93ZWJhdXRobi1hcHAvYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcmVnaXN0ZXIvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/register/route.js":
/*!***********************************!*\
  !*** ./app/api/register/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _simplewebauthn_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simplewebauthn/server */ \"(rsc)/./node_modules/@simplewebauthn/server/esm/index.js\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _simplewebauthn_server_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @simplewebauthn/server/helpers */ \"(rsc)/./node_modules/@simplewebauthn/server/esm/helpers/index.js\");\n\n\n\nconst rpName = \"Testing Application\"; // Change this to your application name\nconst rpID = \"serveo.net\"; // Change this to your domain\nconst origin = \"https://b0b910086a8509e762305ab321117494.serveo.net\"; // Change this to your URL\nlet userDatabase = {}; // For now we can you static data registered, later a database can be used for this\nasync function POST(req) {\n    const incomingData = await req.json();\n    const username = incomingData.username;\n    if (!username) {\n        return Response.json({\n            error: \"Username is required\"\n        });\n    }\n    // Generate options for the user to start registration\n    const options = await (0,_simplewebauthn_server__WEBPACK_IMPORTED_MODULE_0__.generateRegistrationOptions)({\n        rpName,\n        rpID,\n        userID: _simplewebauthn_server_helpers__WEBPACK_IMPORTED_MODULE_2__.isoUint8Array.fromUTF8String(username),\n        userName: username,\n        attestationType: \"none\"\n    });\n    // Store the options in our 'database'\n    userDatabase[username] = {\n        ...userDatabase[username],\n        challenge: options.challenge\n    };\n    return Response.json({\n        message: \"Data received and decrypted\",\n        data: options\n    });\n}\nasync function PUT(req) {\n    const incomingData = await req.json();\n    const { username, attestationResponse } = incomingData;\n    const expectedChallenge = userDatabase[username]?.challenge;\n    if (!username || !attestationResponse || !expectedChallenge) {\n        return Response.json({\n            error: \"Invalid request\"\n        });\n    }\n    try {\n        const verification = await (0,_simplewebauthn_server__WEBPACK_IMPORTED_MODULE_0__.verifyRegistrationResponse)({\n            response: attestationResponse,\n            expectedChallenge,\n            expectedOrigin: origin,\n            expectedRPID: rpID\n        });\n        if (verification.verified) {\n            // Save the credential in our 'database'\n            userDatabase[username] = {\n                ...userDatabase[username],\n                credential: verification.registrationInfo\n            };\n            console.log(\"userDatabase =>\", userDatabase);\n            return Response.json({\n                success: true\n            });\n        }\n        return Response.json({\n            error: \"Verification failed\"\n        });\n    } catch (error) {\n        console.log(\"error => \", error);\n        return Response.json({\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlZ2lzdGVyL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdnQztBQUN1QjtBQUNRO0FBRS9ELE1BQU1LLFNBQVMsdUJBQXVCLHVDQUF1QztBQUM3RSxNQUFNQyxPQUFPLGNBQWMsNkJBQTZCO0FBQ3hELE1BQU1DLFNBQVMsdURBQXVELDBCQUEwQjtBQUVoRyxJQUFJQyxlQUFlLENBQUMsR0FBRyxtRkFBbUY7QUFFbkcsZUFBZUMsS0FBS0MsR0FBRztJQUM1QixNQUFNQyxlQUFlLE1BQU1ELElBQUlFLElBQUk7SUFDbkMsTUFBTUMsV0FBV0YsYUFBYUUsUUFBUTtJQUN0QyxJQUFJLENBQUNBLFVBQVU7UUFDYixPQUFPQyxTQUFTRixJQUFJLENBQUM7WUFBRUcsT0FBTztRQUF1QjtJQUN2RDtJQUVBLHNEQUFzRDtJQUN0RCxNQUFNQyxVQUFVLE1BQU1oQixtRkFBMkJBLENBQUM7UUFDaERLO1FBQ0FDO1FBQ0FXLFFBQVFiLHdGQUE0QixDQUFDUztRQUNyQ00sVUFBVU47UUFDVk8saUJBQWlCO0lBQ25CO0lBRUEsc0NBQXNDO0lBQ3RDWixZQUFZLENBQUNLLFNBQVMsR0FBRztRQUN2QixHQUFHTCxZQUFZLENBQUNLLFNBQVM7UUFDekJRLFdBQVdMLFFBQVFLLFNBQVM7SUFDOUI7SUFFQSxPQUFPUCxTQUFTRixJQUFJLENBQUM7UUFDbkJVLFNBQVM7UUFDVEMsTUFBTVA7SUFDUjtBQUNGO0FBRU8sZUFBZVEsSUFBSWQsR0FBRztJQUMzQixNQUFNQyxlQUFlLE1BQU1ELElBQUlFLElBQUk7SUFDbkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVZLG1CQUFtQixFQUFFLEdBQUdkO0lBQzFDLE1BQU1lLG9CQUFvQmxCLFlBQVksQ0FBQ0ssU0FBUyxFQUFFUTtJQUVsRCxJQUFJLENBQUNSLFlBQVksQ0FBQ1ksdUJBQXVCLENBQUNDLG1CQUFtQjtRQUMzRCxPQUFPWixTQUFTRixJQUFJLENBQUM7WUFBRUcsT0FBTztRQUFrQjtJQUNsRDtJQUVBLElBQUk7UUFDRixNQUFNWSxlQUFlLE1BQU0xQixrRkFBMEJBLENBQUM7WUFDcEQyQixVQUFVSDtZQUNWQztZQUNBRyxnQkFBZ0J0QjtZQUNoQnVCLGNBQWN4QjtRQUNoQjtRQUVBLElBQUlxQixhQUFhSSxRQUFRLEVBQUU7WUFDekIsd0NBQXdDO1lBQ3hDdkIsWUFBWSxDQUFDSyxTQUFTLEdBQUc7Z0JBQ3ZCLEdBQUdMLFlBQVksQ0FBQ0ssU0FBUztnQkFDekJtQixZQUFZTCxhQUFhTSxnQkFBZ0I7WUFDM0M7WUFDQUMsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQjNCO1lBQy9CLE9BQU9NLFNBQVNGLElBQUksQ0FBQztnQkFBRXdCLFNBQVM7WUFBSztRQUN2QztRQUVBLE9BQU90QixTQUFTRixJQUFJLENBQUM7WUFBRUcsT0FBTztRQUFzQjtJQUN0RCxFQUFFLE9BQU9BLE9BQU87UUFDZG1CLFFBQVFDLEdBQUcsQ0FBQyxhQUFhcEI7UUFDekIsT0FBT0QsU0FBU0YsSUFBSSxDQUFDO1lBQUVHLE9BQU9BLE1BQU1PLE9BQU87UUFBQztJQUM5QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYXV0aG4tYXBwLy4vYXBwL2FwaS9yZWdpc3Rlci9yb3V0ZS5qcz82NzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdlbmVyYXRlUmVnaXN0cmF0aW9uT3B0aW9ucyxcbiAgdmVyaWZ5UmVnaXN0cmF0aW9uUmVzcG9uc2UsXG59IGZyb20gXCJAc2ltcGxld2ViYXV0aG4vc2VydmVyXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGlzb1VpbnQ4QXJyYXkgfSBmcm9tIFwiQHNpbXBsZXdlYmF1dGhuL3NlcnZlci9oZWxwZXJzXCI7XG5cbmNvbnN0IHJwTmFtZSA9IFwiVGVzdGluZyBBcHBsaWNhdGlvblwiOyAvLyBDaGFuZ2UgdGhpcyB0byB5b3VyIGFwcGxpY2F0aW9uIG5hbWVcbmNvbnN0IHJwSUQgPSBcInNlcnZlby5uZXRcIjsgLy8gQ2hhbmdlIHRoaXMgdG8geW91ciBkb21haW5cbmNvbnN0IG9yaWdpbiA9IFwiaHR0cHM6Ly9iMGI5MTAwODZhODUwOWU3NjIzMDVhYjMyMTExNzQ5NC5zZXJ2ZW8ubmV0XCI7IC8vIENoYW5nZSB0aGlzIHRvIHlvdXIgVVJMXG5cbmxldCB1c2VyRGF0YWJhc2UgPSB7fTsgLy8gRm9yIG5vdyB3ZSBjYW4geW91IHN0YXRpYyBkYXRhIHJlZ2lzdGVyZWQsIGxhdGVyIGEgZGF0YWJhc2UgY2FuIGJlIHVzZWQgZm9yIHRoaXNcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XG4gIGNvbnN0IGluY29taW5nRGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGNvbnN0IHVzZXJuYW1lID0gaW5jb21pbmdEYXRhLnVzZXJuYW1lO1xuICBpZiAoIXVzZXJuYW1lKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVc2VybmFtZSBpcyByZXF1aXJlZFwiIH0pO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgb3B0aW9ucyBmb3IgdGhlIHVzZXIgdG8gc3RhcnQgcmVnaXN0cmF0aW9uXG4gIGNvbnN0IG9wdGlvbnMgPSBhd2FpdCBnZW5lcmF0ZVJlZ2lzdHJhdGlvbk9wdGlvbnMoe1xuICAgIHJwTmFtZSxcbiAgICBycElELFxuICAgIHVzZXJJRDogaXNvVWludDhBcnJheS5mcm9tVVRGOFN0cmluZyh1c2VybmFtZSksXG4gICAgdXNlck5hbWU6IHVzZXJuYW1lLFxuICAgIGF0dGVzdGF0aW9uVHlwZTogXCJub25lXCIsXG4gIH0pO1xuXG4gIC8vIFN0b3JlIHRoZSBvcHRpb25zIGluIG91ciAnZGF0YWJhc2UnXG4gIHVzZXJEYXRhYmFzZVt1c2VybmFtZV0gPSB7XG4gICAgLi4udXNlckRhdGFiYXNlW3VzZXJuYW1lXSxcbiAgICBjaGFsbGVuZ2U6IG9wdGlvbnMuY2hhbGxlbmdlLFxuICB9O1xuXG4gIHJldHVybiBSZXNwb25zZS5qc29uKHtcbiAgICBtZXNzYWdlOiBcIkRhdGEgcmVjZWl2ZWQgYW5kIGRlY3J5cHRlZFwiLFxuICAgIGRhdGE6IG9wdGlvbnMsXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcSkge1xuICBjb25zdCBpbmNvbWluZ0RhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuICBjb25zdCB7IHVzZXJuYW1lLCBhdHRlc3RhdGlvblJlc3BvbnNlIH0gPSBpbmNvbWluZ0RhdGE7XG4gIGNvbnN0IGV4cGVjdGVkQ2hhbGxlbmdlID0gdXNlckRhdGFiYXNlW3VzZXJuYW1lXT8uY2hhbGxlbmdlO1xuXG4gIGlmICghdXNlcm5hbWUgfHwgIWF0dGVzdGF0aW9uUmVzcG9uc2UgfHwgIWV4cGVjdGVkQ2hhbGxlbmdlKSB7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHJlcXVlc3RcIiB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdmVyaWZpY2F0aW9uID0gYXdhaXQgdmVyaWZ5UmVnaXN0cmF0aW9uUmVzcG9uc2Uoe1xuICAgICAgcmVzcG9uc2U6IGF0dGVzdGF0aW9uUmVzcG9uc2UsXG4gICAgICBleHBlY3RlZENoYWxsZW5nZSxcbiAgICAgIGV4cGVjdGVkT3JpZ2luOiBvcmlnaW4sXG4gICAgICBleHBlY3RlZFJQSUQ6IHJwSUQsXG4gICAgfSk7XG5cbiAgICBpZiAodmVyaWZpY2F0aW9uLnZlcmlmaWVkKSB7XG4gICAgICAvLyBTYXZlIHRoZSBjcmVkZW50aWFsIGluIG91ciAnZGF0YWJhc2UnXG4gICAgICB1c2VyRGF0YWJhc2VbdXNlcm5hbWVdID0ge1xuICAgICAgICAuLi51c2VyRGF0YWJhc2VbdXNlcm5hbWVdLFxuICAgICAgICBjcmVkZW50aWFsOiB2ZXJpZmljYXRpb24ucmVnaXN0cmF0aW9uSW5mbyxcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXJEYXRhYmFzZSA9PlwiLCB1c2VyRGF0YWJhc2UpO1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVmVyaWZpY2F0aW9uIGZhaWxlZFwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgPT4gXCIsIGVycm9yKTtcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVSZWdpc3RyYXRpb25PcHRpb25zIiwidmVyaWZ5UmVnaXN0cmF0aW9uUmVzcG9uc2UiLCJOZXh0QXBpUmVxdWVzdCIsIk5leHRBcGlSZXNwb25zZSIsImlzb1VpbnQ4QXJyYXkiLCJycE5hbWUiLCJycElEIiwib3JpZ2luIiwidXNlckRhdGFiYXNlIiwiUE9TVCIsInJlcSIsImluY29taW5nRGF0YSIsImpzb24iLCJ1c2VybmFtZSIsIlJlc3BvbnNlIiwiZXJyb3IiLCJvcHRpb25zIiwidXNlcklEIiwiZnJvbVVURjhTdHJpbmciLCJ1c2VyTmFtZSIsImF0dGVzdGF0aW9uVHlwZSIsImNoYWxsZW5nZSIsIm1lc3NhZ2UiLCJkYXRhIiwiUFVUIiwiYXR0ZXN0YXRpb25SZXNwb25zZSIsImV4cGVjdGVkQ2hhbGxlbmdlIiwidmVyaWZpY2F0aW9uIiwicmVzcG9uc2UiLCJleHBlY3RlZE9yaWdpbiIsImV4cGVjdGVkUlBJRCIsInZlcmlmaWVkIiwiY3JlZGVudGlhbCIsInJlZ2lzdHJhdGlvbkluZm8iLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/register/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@simplewebauthn","vendor-chunks/tr46","vendor-chunks/asn1js","vendor-chunks/@peculiar","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/ipaddr.js","vendor-chunks/@levischuck","vendor-chunks/tslib","vendor-chunks/pvtsutils","vendor-chunks/pvutils","vendor-chunks/@hexagon","vendor-chunks/webidl-conversions","vendor-chunks/cross-fetch"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fregister%2Froute&page=%2Fapi%2Fregister%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fregister%2Froute.js&appDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmsi%2FJatin%2Fpractice%2Fwebauthn-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();