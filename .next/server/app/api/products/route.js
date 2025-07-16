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
exports.id = "app/api/products/route";
exports.ids = ["app/api/products/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2FUsers%2Fadmin%2FDocuments%2Fapp-be%2Fbe-app-tuan-duong%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2Fapp-be%2Fbe-app-tuan-duong&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2FUsers%2Fadmin%2FDocuments%2Fapp-be%2Fbe-app-tuan-duong%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2Fapp-be%2Fbe-app-tuan-duong&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_admin_Documents_app_be_be_app_tuan_duong_src_app_api_products_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/products/route.js */ \"(rsc)/./src/app/api/products/route.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_admin_Documents_app_be_be_app_tuan_duong_src_app_api_products_route_js__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_admin_Documents_app_be_be_app_tuan_duong_src_app_api_products_route_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/route\",\n        pathname: \"/api/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/route\"\n    },\n    resolvedPagePath: \"/Users/admin/Documents/app-be/be-app-tuan-duong/src/app/api/products/route.js\",\n    nextConfigOutput,\n    userland: _Users_admin_Documents_app_be_be_app_tuan_duong_src_app_api_products_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmFkbWluJTJGRG9jdW1lbnRzJTJGYXBwLWJlJTJGYmUtYXBwLXR1YW4tZHVvbmclMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGYWRtaW4lMkZEb2N1bWVudHMlMkZhcHAtYmUlMkZiZS1hcHAtdHVhbi1kdW9uZyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDNkI7QUFDMUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGLHFDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvYXBwLWJlL2JlLWFwcC10dWFuLWR1b25nL3NyYy9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9kdWN0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Byb2R1Y3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9kdWN0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvYXBwLWJlL2JlLWFwcC10dWFuLWR1b25nL3NyYy9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2FUsers%2Fadmin%2FDocuments%2Fapp-be%2Fbe-app-tuan-duong%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2Fapp-be%2Fbe-app-tuan-duong&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/products/route.js":
/*!***************************************!*\
  !*** ./src/app/api/products/route.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_db__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_db__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const subId = searchParams.get('subcategoryId');\n    try {\n        const result = subId ? await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query('SELECT * FROM products WHERE subcategory_id = $1 ORDER BY id DESC', [\n            subId\n        ]) : await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query('SELECT * FROM products ORDER BY id DESC');\n        return Response.json(result.rows);\n    } catch (err) {\n        return new Response('Error loading products', {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const { subcategory_id, name, price, description, images } = await req.json();\n        if (!subcategory_id || !name || !images || images.length === 0) return new Response('Missing fields', {\n            status: 400\n        });\n        const result = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(`INSERT INTO products (subcategory_id, name, price, description, images, created_at)\n       VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`, [\n            subcategory_id,\n            name,\n            price || 0,\n            description || '',\n            images\n        ]);\n        return Response.json(result.rows[0]);\n    } catch (err) {\n        return new Response('Error creating product', {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9kdWN0cy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFFckIsZUFBZUMsSUFBSUMsR0FBRztJQUMzQixNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLElBQUlHLEdBQUc7SUFDeEMsTUFBTUMsUUFBUUgsYUFBYUksR0FBRyxDQUFDO0lBRS9CLElBQUk7UUFDRixNQUFNQyxTQUFTRixRQUNYLE1BQU1OLCtDQUFJQSxDQUFDUyxLQUFLLENBQUMscUVBQXFFO1lBQUNIO1NBQU0sSUFDN0YsTUFBTU4sK0NBQUlBLENBQUNTLEtBQUssQ0FBQztRQUVyQixPQUFPQyxTQUFTQyxJQUFJLENBQUNILE9BQU9JLElBQUk7SUFDbEMsRUFBRSxPQUFPQyxLQUFLO1FBQ1osT0FBTyxJQUFJSCxTQUFTLDBCQUEwQjtZQUFFSSxRQUFRO1FBQUk7SUFDOUQ7QUFDRjtBQUVPLGVBQWVDLEtBQUtiLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU0sRUFBRWMsY0FBYyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNbEIsSUFBSVMsSUFBSTtRQUMzRSxJQUFJLENBQUNLLGtCQUFrQixDQUFDQyxRQUFRLENBQUNHLFVBQVVBLE9BQU9DLE1BQU0sS0FBSyxHQUMzRCxPQUFPLElBQUlYLFNBQVMsa0JBQWtCO1lBQUVJLFFBQVE7UUFBSTtRQUV0RCxNQUFNTixTQUFTLE1BQU1SLCtDQUFJQSxDQUFDUyxLQUFLLENBQzdCLENBQUM7cURBQzhDLENBQUMsRUFDaEQ7WUFBQ087WUFBZ0JDO1lBQU1DLFNBQVM7WUFBR0MsZUFBZTtZQUFJQztTQUFPO1FBRy9ELE9BQU9WLFNBQVNDLElBQUksQ0FBQ0gsT0FBT0ksSUFBSSxDQUFDLEVBQUU7SUFDckMsRUFBRSxPQUFPQyxLQUFLO1FBQ1osT0FBTyxJQUFJSCxTQUFTLDBCQUEwQjtZQUFFSSxRQUFRO1FBQUk7SUFDOUQ7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9hcHAtYmUvYmUtYXBwLXR1YW4tZHVvbmcvc3JjL2FwcC9hcGkvcHJvZHVjdHMvcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBvb2wgZnJvbSAnQC9saWIvZGInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKTtcbiAgY29uc3Qgc3ViSWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdzdWJjYXRlZ29yeUlkJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBzdWJJZFxuICAgICAgPyBhd2FpdCBwb29sLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHByb2R1Y3RzIFdIRVJFIHN1YmNhdGVnb3J5X2lkID0gJDEgT1JERVIgQlkgaWQgREVTQycsIFtzdWJJZF0pXG4gICAgICA6IGF3YWl0IHBvb2wucXVlcnkoJ1NFTEVDVCAqIEZST00gcHJvZHVjdHMgT1JERVIgQlkgaWQgREVTQycpO1xuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24ocmVzdWx0LnJvd3MpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdFcnJvciBsb2FkaW5nIHByb2R1Y3RzJywgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHN1YmNhdGVnb3J5X2lkLCBuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGltYWdlcyB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBpZiAoIXN1YmNhdGVnb3J5X2lkIHx8ICFuYW1lIHx8ICFpbWFnZXMgfHwgaW1hZ2VzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoJ01pc3NpbmcgZmllbGRzJywgeyBzdGF0dXM6IDQwMCB9KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvb2wucXVlcnkoXG4gICAgICBgSU5TRVJUIElOVE8gcHJvZHVjdHMgKHN1YmNhdGVnb3J5X2lkLCBuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGltYWdlcywgY3JlYXRlZF9hdClcbiAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgTk9XKCkpIFJFVFVSTklORyAqYCxcbiAgICAgIFtzdWJjYXRlZ29yeV9pZCwgbmFtZSwgcHJpY2UgfHwgMCwgZGVzY3JpcHRpb24gfHwgJycsIGltYWdlc11cbiAgICApO1xuXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24ocmVzdWx0LnJvd3NbMF0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdFcnJvciBjcmVhdGluZyBwcm9kdWN0JywgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJwb29sIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwic3ViSWQiLCJnZXQiLCJyZXN1bHQiLCJxdWVyeSIsIlJlc3BvbnNlIiwianNvbiIsInJvd3MiLCJlcnIiLCJzdGF0dXMiLCJQT1NUIiwic3ViY2F0ZWdvcnlfaWQiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsImxlbmd0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/products/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.js":
/*!***********************!*\
  !*** ./src/lib/db.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([pg__WEBPACK_IMPORTED_MODULE_0__]);\npg__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// lib/db.js\n\nconst pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n    connectionString: process.env.DATABASE_URL,\n    ssl: {\n        rejectUnauthorized: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsWUFBWTtBQUNjO0FBRTFCLE1BQU1DLE9BQU8sSUFBSUQsb0NBQUlBLENBQUM7SUFDcEJFLGtCQUFrQkMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0lBQzFDQyxLQUFLO1FBQ0hDLG9CQUFvQjtJQUN0QjtBQUNGO0FBRUEsaUVBQWVOLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvYXBwLWJlL2JlLWFwcC10dWFuLWR1b25nL3NyYy9saWIvZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2RiLmpzXG5pbXBvcnQgeyBQb29sIH0gZnJvbSAncGcnO1xuXG5jb25zdCBwb29sID0gbmV3IFBvb2woe1xuICBjb25uZWN0aW9uU3RyaW5nOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwsXG4gIHNzbDoge1xuICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcG9vbDtcbiJdLCJuYW1lcyI6WyJQb29sIiwicG9vbCIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = import("pg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2FUsers%2Fadmin%2FDocuments%2Fapp-be%2Fbe-app-tuan-duong%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fadmin%2FDocuments%2Fapp-be%2Fbe-app-tuan-duong&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();