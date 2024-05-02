(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_Header_tsx_7721f2._.js", {

"[project]/components/HeaderTab.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const HeaderTab = ({ src, width, height, zoom })=>{
    const scaleFactor = zoom ? zoom / 100 : 1;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        style: {
            width: `${width}px`,
            height: `${height}px`,
            position: 'relative',
            transform: `scale(${scaleFactor})`,
            userSelect: 'none'
        },
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
            src: src,
            alt: src,
            layout: "fill",
            objectFit: "none"
        }, void 0, false, {
            fileName: "<[project]/components/HeaderTab.tsx>",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/HeaderTab.tsx>",
        lineNumber: 15,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = HeaderTab;

})()),
"[project]/components/Header.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderTab$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/HeaderTab.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["forwardRef"](({ menuOpen, changeMode }, ref)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("header", {
        ref: ref,
        className: `fixed top-0 left-0 z-10 h-full ${menuOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("nav", {
            className: "flex flex-col items-start justify-center pl-5 py-4 h-full",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    className: "mb-6",
                    onClick: ()=>changeMode('home'),
                    disabled: !menuOpen,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderTab$2e$tsx__$28$ecmascript$29$__["default"], {
                        src: "/icons/Home.svg",
                        width: 200,
                        height: 60,
                        zoom: 70
                    }, void 0, false, {
                        fileName: "<[project]/components/Header.tsx>",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    className: "mb-6",
                    onClick: ()=>changeMode('about'),
                    disabled: !menuOpen,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderTab$2e$tsx__$28$ecmascript$29$__["default"], {
                        src: "/icons/About.svg",
                        width: 200,
                        height: 80,
                        zoom: 70
                    }, void 0, false, {
                        fileName: "<[project]/components/Header.tsx>",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    className: "mb-6",
                    onClick: ()=>changeMode('services'),
                    disabled: !menuOpen,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderTab$2e$tsx__$28$ecmascript$29$__["default"], {
                        src: "/icons/Services.svg",
                        width: 200,
                        height: 80,
                        zoom: 70
                    }, void 0, false, {
                        fileName: "<[project]/components/Header.tsx>",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    className: "mb-6",
                    onClick: ()=>changeMode('clients'),
                    disabled: !menuOpen,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderTab$2e$tsx__$28$ecmascript$29$__["default"], {
                        src: "/icons/Clients.svg",
                        width: 200,
                        height: 80,
                        zoom: 70
                    }, void 0, false, {
                        fileName: "<[project]/components/Header.tsx>",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    className: "mb-6",
                    onClick: ()=>changeMode('stockist'),
                    disabled: !menuOpen,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderTab$2e$tsx__$28$ecmascript$29$__["default"], {
                        src: "/icons/Stockist.svg",
                        width: 200,
                        height: 80,
                        zoom: 70
                    }, void 0, false, {
                        fileName: "<[project]/components/Header.tsx>",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                    onClick: ()=>changeMode('press'),
                    disabled: !menuOpen,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeaderTab$2e$tsx__$28$ecmascript$29$__["default"], {
                        src: "/icons/Press.svg",
                        width: 200,
                        height: 80,
                        zoom: 70
                    }, void 0, false, {
                        fileName: "<[project]/components/Header.tsx>",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/components/Header.tsx>",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/components/Header.tsx>",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/components/Header.tsx>",
        lineNumber: 12,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = Header;

})()),
}]);

//# sourceMappingURL=components_Header_tsx_7721f2._.js.map