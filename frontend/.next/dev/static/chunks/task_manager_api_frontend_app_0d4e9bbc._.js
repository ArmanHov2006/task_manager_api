(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/task_manager_api/frontend/app/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "projects",
    ()=>projects,
    "tasks",
    ()=>tasks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
});
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});
const auth = {
    login: async (credentials)=>{
        const formData = new FormData();
        formData.append('username', credentials.username);
        formData.append('password', credentials.password);
        const response = await api.post('/auth/token', formData);
        return response.data;
    },
    register: async (data)=>{
        try {
            console.log('Sending registration request:', {
                username: data.username,
                email: data.email,
                password: '***'
            });
            const response = await api.post('/auth/register', data);
            console.log('Registration successful:', response.data);
            return response.data;
        } catch (error) {
            console.error('Registration failed:', {
                status: error.response?.status,
                data: error.response?.data,
                message: error.message
            });
            throw error;
        }
    }
};
const tasks = {
    getAll: async ()=>{
        const response = await api.get('/tasks');
        return response.data;
    },
    create: async (title, description)=>{
        const response = await api.post('/tasks', {
            title,
            description
        });
        return response.data;
    },
    update: async (id, data)=>{
        const response = await api.put(`/tasks/${id}`, data);
        return response.data;
    },
    delete: async (id)=>{
        await api.delete(`/tasks/${id}`);
    }
};
const projects = {
    getAll: async ()=>{
        const response = await api.get('/projects');
        return response.data;
    },
    create: async (name, description)=>{
        const response = await api.post('/projects', {
            name,
            description
        });
        return response.data;
    },
    update: async (id, name, description)=>{
        const response = await api.put(`/projects/${id}`, {
            name,
            description
        });
        return response.data;
    },
    delete: async (id)=>{
        await api.delete(`/projects/${id}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/task_manager_api/frontend/app/register/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/button/button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/input/input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/stack/stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$form$2d$control$2f$form$2d$control$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/form-control/form-control.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/app/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function RegisterPage() {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(null);
        // Validation
        if (!username.trim()) {
            setError('Username is required');
            return;
        }
        if (!email.trim()) {
            setError('Email is required');
            return;
        }
        if (!password.trim()) {
            setError('Password is required');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].register({
                username,
                email,
                password
            });
            router.push('/login');
        } catch (err) {
            if (err.response?.data?.detail) {
                setError(err.response.data.detail);
            } else {
                setError('Registration failed. Please try again.');
            }
            console.error('Registration error:', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        maxW: "md",
        mx: "auto",
        mt: 12,
        p: 6,
        bg: "white",
        boxShadow: "sm",
        borderRadius: "md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                size: "md",
                mb: 4,
                children: "Register"
            }, void 0, false, {
                fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$form$2d$control$2f$form$2d$control$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Username",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$form$2d$control$2f$form$2d$control$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Email",
                                type: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$form$2d$control$2f$form$2d$control$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Password",
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            color: "red.500",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            colorScheme: "brand",
                            children: "Register"
                        }, void 0, false, {
                            fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/task_manager_api/frontend/app/register/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(RegisterPage, "u7scAcwfufycAlQdMdJfvo2+hQg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RegisterPage;
var _c;
__turbopack_context__.k.register(_c, "RegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=task_manager_api_frontend_app_0d4e9bbc._.js.map