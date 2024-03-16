(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/components_ScanCarousel_tsx_1745dc._.js", {

"[project]/components/ScanCarousel.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$notbaldrick$2f$react$2d$crossfade$2d$carousel$2f$dist$2f$index$2e$modern$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@notbaldrick/react-crossfade-carousel/dist/index.modern.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const ScanCarousel = ({ menuOpen })=>{
    const scans = [
        '/scans/SCAN290.jpg',
        '/scans/SCAN291.jpg',
        '/scans/SCAN293.jpg',
        '/scans/SCAN294.jpg',
        '/scans/SCAN296.jpg',
        '/scans/SCAN298.jpg',
        '/scans/SCAN299.jpg',
        '/scans/SCAN301.jpg',
        '/scans/SCAN302.jpg',
        '/scans/SCAN303.jpg',
        '/scans/SCAN304.jpg',
        '/scans/SCAN305.jpg',
        '/scans/SCAN306.jpg'
    ];
    const [currentIndex, setCurrentIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](Math.floor(Math.random() * scans.length));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            console.log('changing scan');
            console.log(currentIndex, scans.length);
            setCurrentIndex((currentIndex)=>(currentIndex + 1) % scans.length);
        }, 3000);
        return ()=>clearInterval(interval);
    }, [
        currentIndex
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$notbaldrick$2f$react$2d$crossfade$2d$carousel$2f$dist$2f$index$2e$modern$2e$js__$28$ecmascript$29$__["default"], {
        className: `flex items-center justify-center ${menuOpen ? 'blur-sm' : ''}`,
        interval: 2000,
        transition: 1000,
        images: scans,
        imageStyles: {
            width: '70vh',
            height: '70vh',
            objectFit: 'contain',
            objectPosition: 'center'
        }
    }, void 0, false, {
        fileName: "<[project]/components/ScanCarousel.tsx>",
        lineNumber: 40,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ScanCarousel;

})()),
}]);

//# sourceMappingURL=components_ScanCarousel_tsx_1745dc._.js.map