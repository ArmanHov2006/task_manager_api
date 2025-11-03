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
"[project]/task_manager_api/frontend/app/tasks/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TasksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/button/button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$list$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/list/list.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$checkbox$2f$checkbox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/stack/stack.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/input/input.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$toast$2f$use$2d$toast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/toast/use-toast.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/app/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TasksPage() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$toast$2f$use$2d$toast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const load = async ()=>{
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasks"].getAll();
            setItems(data);
        } catch (err) {
            toast({
                title: 'Error loading tasks',
                description: 'Unable to load your tasks. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
            console.error(err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TasksPage.useEffect": ()=>{
            load();
        }
    }["TasksPage.useEffect"], []);
    const handleAdd = async ()=>{
        if (!title.trim()) {
            toast({
                title: 'Title is required',
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'bottom'
            });
            return;
        }
        setIsLoading(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasks"].create(title, description);
            setTitle('');
            setDescription('');
            load();
            toast({
                title: 'Task created',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'bottom'
            });
        } catch (err) {
            toast({
                title: 'Error creating task',
                description: 'Unable to create task. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
        } finally{
            setIsLoading(false);
        }
    };
    const toggle = async (task)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasks"].update(task.id, {
                completed: !task.completed
            });
            load();
            toast({
                title: task.completed ? 'Task marked as incomplete' : 'Task completed',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'bottom'
            });
        } catch (err) {
            toast({
                title: 'Error updating task',
                description: 'Unable to update task status. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
        }
    };
    const del = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tasks"].delete(id);
            load();
            toast({
                title: 'Task deleted',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'bottom'
            });
        } catch (err) {
            toast({
                title: 'Error deleting task',
                description: 'Unable to delete task. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        maxW: "3xl",
        mx: "auto",
        mt: 8,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                mb: 4,
                children: "Tasks"
            }, void 0, false, {
                fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                direction: [
                    "column",
                    "row"
                ],
                spacing: 2,
                mb: 4,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "Title",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        isDisabled: isLoading
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "Description",
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        isDisabled: isLoading
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleAdd,
                        colorScheme: "brand",
                        isLoading: isLoading,
                        loadingText: "Adding...",
                        children: "Add Task"
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$list$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                spacing: 3,
                children: items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$list$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItem"], {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
                                direction: "row",
                                align: "center",
                                spacing: 3,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$checkbox$2f$checkbox$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        isChecked: t.completed,
                                        onChange: ()=>toggle(t),
                                        size: "lg",
                                        colorScheme: "green"
                                    }, void 0, false, {
                                        fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                fontWeight: "bold",
                                                textDecoration: t.completed ? 'line-through' : 'none',
                                                color: t.completed ? 'gray.500' : 'inherit',
                                                children: t.title
                                            }, void 0, false, {
                                                fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            t.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                fontSize: "sm",
                                                color: t.completed ? 'gray.500' : 'gray.600',
                                                textDecoration: t.completed ? 'line-through' : 'none',
                                                children: t.description
                                            }, void 0, false, {
                                                fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                colorScheme: "red",
                                onClick: ()=>del(t.id),
                                ml: 2,
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/task_manager_api/frontend/app/tasks/page.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(TasksPage, "GtjC4r71GYwfMENmfrfxk/iRO6U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$toast$2f$use$2d$toast$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = TasksPage;
var _c;
__turbopack_context__.k.register(_c, "TasksPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=task_manager_api_frontend_app_786895de._.js.map