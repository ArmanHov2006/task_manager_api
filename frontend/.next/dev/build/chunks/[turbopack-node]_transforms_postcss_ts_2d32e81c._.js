module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/task_manager_api/frontend/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/ef328_d3e19424._.js",
  "chunks/[root-of-the-server]__bda8e46b._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/task_manager_api/frontend/postcss.config.js_.loader.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];