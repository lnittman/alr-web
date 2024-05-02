(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_page_tsx_389f8f._.js", {

"[project]/app/page.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CenterContent$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/CenterContent.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Controls.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Header.tsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuToggle$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/MenuToggle.tsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
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
    const handleClickOutside = (event)=>{
        if (event.target instanceof Element && headerRef.current && !headerRef.current.contains(event.target) && !event.target.closest("#menu-toggle")) {
            setMenuOpen(false);
        }
    };
    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen);
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MenuToggle$2e$tsx__$28$ecmascript$29$__["default"], {
                menuOpen: menuOpen,
                toggleMenu: toggleMenu
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: `absolute top-2 rounded-image`,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                    className: `select-none blur-effect ${menuOpen ? 'blur-sm' : ''}`,
                    src: "/stamplogo.png",
                    alt: "stamp logo",
                    width: 500,
                    height: 300
                }, void 0, false, {
                    fileName: "<[project]/app/page.tsx>",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$tsx__$28$ecmascript$29$__["default"], {
                    menuOpen: menuOpen
                }, void 0, false, {
                    fileName: "<[project]/app/page.tsx>",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2e$tsx__$28$ecmascript$29$__["default"], {
                changeMode: changeMode,
                menuOpen: menuOpen,
                ref: headerRef
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CenterContent$2e$tsx__$28$ecmascript$29$__["default"], {
                mode: mode,
                menuOpen: menuOpen
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                href: "https://www.instagram.com/audreylouisereynolds/?hl=en",
                target: "_blank",
                rel: "noopener noreferrer",
                className: `icon active bottom-0 right-4 z-20 ${menuOpen ? 'blur-sm' : ''}`,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    style: {
                        width: `100px`,
                        height: `100px`,
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        transform: `scale(0.4)`
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
                        src: "/icons/IG.svg",
                        alt: "instagram",
                        layout: "fill",
                        objectFit: "none"
                    }, void 0, false, {
                        fileName: "<[project]/app/page.tsx>",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/app/page.tsx>",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/app/page.tsx>",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/app/page.tsx>",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=app_page_tsx_389f8f._.js.map