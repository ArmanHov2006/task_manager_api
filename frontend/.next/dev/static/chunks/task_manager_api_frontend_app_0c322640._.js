(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/task_manager_api/frontend/app/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "theme",
    ()=>theme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$extend$2d$theme$2f$extend$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/extend-theme/extend-theme.mjs [app-client] (ecmascript)");
;
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
};
const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$extend$2d$theme$2f$extend$2d$theme$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendTheme"])({
    config,
    colors: {
        brand: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e'
        }
    },
    styles: {
        global: {
            body: {
                bg: 'gray.50'
            }
        }
    },
    components: {
        Button: {
            defaultProps: {
                colorScheme: 'brand'
            }
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/task_manager_api/frontend/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$chakra$2d$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/chakra-provider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/app/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ClientOnly({ children }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientOnly.useEffect": ()=>{
            setMounted(true);
        }
    }["ClientOnly.useEffect"], []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ClientOnly, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ClientOnly;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientOnly, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$chakra$2d$provider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChakraProvider"], {
            theme: __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"],
            children: children
        }, void 0, false, {
            fileName: "[project]/task_manager_api/frontend/app/providers.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/task_manager_api/frontend/app/providers.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c1 = Providers;
var _c, _c1;
__turbopack_context__.k.register(_c, "ClientOnly");
__turbopack_context__.k.register(_c1, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/task_manager_api/frontend/app/store/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
;
const getInitialState = ()=>({
        token: null,
        isAuthenticated: false
    });
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set)=>({
        ...getInitialState(),
        login: (token)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('token', token);
                set({
                    token,
                    isAuthenticated: true
                });
            }
        },
        logout: ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem('token');
                set({
                    token: null,
                    isAuthenticated: false
                });
            }
        }
    }));
// Initialize the store on the client side
if ("TURBOPACK compile-time truthy", 1) {
    const token = localStorage.getItem('token');
    if (token) {
        useAuthStore.getState().login(token);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/task_manager_api/frontend/app/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/app/store/auth.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useAuth() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useAuth.useAuthStore[isAuthenticated]": (s)=>s.isAuthenticated
    }["useAuth.useAuthStore[isAuthenticated]"]);
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useAuth.useAuthStore[token]": (s)=>s.token
    }["useAuth.useAuthStore[token]"]);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useAuth.useAuthStore[login]": (s)=>s.login
    }["useAuth.useAuthStore[login]"]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useAuth.useAuthStore[logout]": (s)=>s.logout
    }["useAuth.useAuthStore[logout]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            setMounted(true);
        }
    }["useAuth.useEffect"], []);
    return {
        isAuthenticated: mounted ? isAuthenticated : false,
        token: mounted ? token : null,
        login,
        logout,
        isLoading: !mounted
    };
}
_s(useAuth, "DXhzxIsPJsFb0icaaRqih9mVjr8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$store$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/task_manager_api/frontend/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/flex/flex.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/button/button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$h$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/stack/h-stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$skeleton$2f$skeleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/skeleton/skeleton.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/app/hooks/useAuth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Navbar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isAuthenticated, logout, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const handleLogout = ()=>{
        logout();
        router.push('/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        as: "header",
        bg: "white",
        boxShadow: "sm",
        px: 4,
        py: 3,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            align: "center",
            justify: "space-between",
            maxW: "6xl",
            mx: "auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        fontWeight: "bold",
                        children: "Task Manager"
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$h$2d$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HStack"], {
                    spacing: 3,
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$skeleton$2f$skeleton$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        height: "40px",
                        width: "200px"
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this) : isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                as: __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/tasks",
                                variant: "ghost",
                                children: "Tasks"
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                as: __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/projects",
                                variant: "ghost",
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                colorScheme: "red",
                                onClick: ()=>{
                                    logout();
                                    router.push('/login');
                                },
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                as: __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/login",
                                variant: "ghost",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                as: __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                                href: "/register",
                                variant: "ghost",
                                children: "Register"
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/task_manager_api/frontend/app/components/Navbar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Navbar, "3GNozYF75FgTmVnMyknI4k+dZIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=task_manager_api_frontend_app_0c322640._.js.map