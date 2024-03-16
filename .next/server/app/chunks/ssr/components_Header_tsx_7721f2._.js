(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_Header_tsx_7721f2._.js", {

"[project]/components/Header.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["forwardRef"](({ menuOpen, changeMode }, ref)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("header", {
        ref: ref,
        className: `fixed top-0 left-0 z-10 ${menuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("nav", {
            className: "flex flex-col items-start pl-5 py-4",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: ()=>changeMode('home'),
                    className: "mb-4 hover:text-gray-300 transition-colors duration-300",
                    children: "HOME"
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: ()=>changeMode('about'),
                    className: "mb-4 hover:text-gray-300 transition-colors duration-300",
                    children: "ABOUT"
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: ()=>changeMode('works'),
                    className: "mb-4 hover:text-gray-300 transition-colors duration-300",
                    children: "WORKS"
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: ()=>changeMode('services'),
                    className: "mb-4 hover:text-gray-300 transition-colors duration-300",
                    children: "SERVICES"
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: ()=>changeMode('clients'),
                    className: "mb-4 hover:text-gray-300 transition-colors duration-300",
                    children: "CLIENTS"
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: ()=>changeMode('stockist'),
                    className: "mb-4 hover:text-gray-300 transition-colors duration-300",
                    children: "STOCKIST"
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: ()=>changeMode('press'),
                    className: "mb-4 hover:text-gray-300 transition-colors duration-300",
                    children: "PRESS"
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Header.tsx>",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Header.tsx>",
        lineNumber: 10,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = Header;

})()),
}]);

//# sourceMappingURL=components_Header_tsx_7721f2._.js.map