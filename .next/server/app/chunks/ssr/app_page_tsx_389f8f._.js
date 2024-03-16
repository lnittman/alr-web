(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_page_tsx_389f8f._.js", {

"[project]/app/page.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/lucide-react.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Controls.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Header.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuToggle$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/MenuToggle.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScanCarousel$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/ScanCarousel.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
function Home() {
    const [menuOpen, setMenuOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [mode, setMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]('home');
    const headerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](null);
    const changeMode = (newMode)=>{
        console.log(newMode);
        setMode(newMode);
        setMenuOpen(false);
    };
    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen);
    };
    const handleClickOutside = (event)=>{
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        menuOpen
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: `flex items-center justify-center w-screen h-screen`,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$28$ecmascript$29$__["default"], {
                changeMode: changeMode,
                menuOpen: menuOpen,
                ref: headerRef
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$tsx__$28$ecmascript$29$__["default"], {
                menuOpen: menuOpen
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: `absolute top-2 rounded-image`,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                    className: `blur-effect ${menuOpen ? 'blur-sm' : ''}`,
                    src: "/stamplogo.png",
                    alt: "stamp logo",
                    width: 500,
                    height: 300
                }, void 0, false, {
                    fileName: "<[project]/app/page.tsx>",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuToggle$2e$tsx__$28$ecmascript$29$__["default"], {
                menuOpen: menuOpen,
                toggleMenu: toggleMenu
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            mode === 'home' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ScanCarousel$2e$tsx__$28$ecmascript$29$__["default"], {
                menuOpen: menuOpen
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            mode === 'about' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            mode === 'works' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            mode === 'services' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            mode === 'clients' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            mode === 'stockist' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            mode === 'press' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {}, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                href: "https://www.instagram.com/audreylouisereynolds/?hl=en",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "absolute bottom-12 right-4 z-20",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$lucide$2d$react$2e$js__$28$ecmascript$29$__["Instagram"], {
                    size: 32,
                    className: "icon active"
                }, void 0, false, {
                    fileName: "<[project]/app/page.tsx>",
                    lineNumber: 104,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/page.tsx>",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_page_tsx_389f8f._.js.map