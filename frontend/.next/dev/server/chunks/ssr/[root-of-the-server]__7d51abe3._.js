module.exports = [
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/task_manager_api/frontend/app/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "projects",
    ()=>projects,
    "tasks",
    ()=>tasks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
});
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
}),
"[project]/task_manager_api/frontend/app/projects/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/box/box.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/button/button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$list$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/list/list.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/stack/stack.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/input/input.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$toast$2f$use$2d$toast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/toast/use-toast.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/react/dist/esm/flex/flex.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/app/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Edit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/task_manager_api/frontend/node_modules/@chakra-ui/icons/dist/esm/Edit.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ProjectsPage() {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$toast$2f$use$2d$toast$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const load = async ()=>{
        try {
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].getAll();
            setItems(data);
        } catch (err) {
            toast({
                title: 'Error loading projects',
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, []);
    const validateInput = ()=>{
        if (!name.trim()) {
            toast({
                title: 'Validation Error',
                description: 'Project name is required',
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'bottom'
            });
            return false;
        }
        if (name.length > 100) {
            toast({
                title: 'Validation Error',
                description: 'Project name must be less than 100 characters',
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'bottom'
            });
            return false;
        }
        if (description.length > 500) {
            toast({
                title: 'Validation Error',
                description: 'Description must be less than 500 characters',
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: 'bottom'
            });
            return false;
        }
        return true;
    };
    const handleAdd = async ()=>{
        try {
            if (!validateInput()) return;
            await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].create(name, description);
            setName('');
            setDescription('');
            load();
            toast({
                title: 'Success',
                description: 'Project created successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'bottom'
            });
        } catch (err) {
            toast({
                title: 'Error creating project',
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
        }
    };
    const handleEdit = async (id)=>{
        try {
            if (editingId === id) {
                // Save changes
                if (!validateInput()) return;
                await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].update(id, name, description);
                setEditingId(null);
                setName('');
                setDescription('');
                load();
                toast({
                    title: 'Success',
                    description: 'Project updated successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'bottom'
                });
            } else {
                // Start editing
                const project = items.find((p)=>p.id === id);
                if (project) {
                    setEditingId(id);
                    setName(project.name);
                    setDescription(project.description || '');
                }
            }
        } catch (err) {
            toast({
                title: 'Error updating project',
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
        }
    };
    const handleEdit = async (id)=>{
        try {
            const project = items.find((p)=>p.id === id);
            if (!project) return;
            if (editingId === id) {
                // Save changes
                await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].update(id, name, description);
                setEditingId(null);
                setName('');
                setDescription('');
                load();
                toast({
                    title: 'Success',
                    description: 'Project updated successfully',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'bottom'
                });
            } else {
                // Start editing
                setEditingId(id);
                setName(project.name);
                setDescription(project.description);
            }
        } catch (err) {
            toast({
                title: 'Error updating project',
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
        }
    };
    const del = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].delete(id);
            load();
            toast({
                title: 'Success',
                description: 'Project deleted successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'bottom'
            });
        } catch (err) {
            toast({
                title: 'Error deleting project',
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
        maxW: "3xl",
        mx: "auto",
        mt: 8,
        px: 4,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$heading$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Heading"], {
                mb: 4,
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"], {
                direction: [
                    "column",
                    "row"
                ],
                spacing: 2,
                mb: 4,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "Name",
                        value: name,
                        onChange: (e)=>setName(e.target.value),
                        maxLength: 100,
                        isInvalid: name.length > 100
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$input$2f$input$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        placeholder: "Description",
                        value: description,
                        onChange: (e)=>setDescription(e.target.value),
                        maxLength: 500,
                        isInvalid: description.length > 500
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: editingId !== null ? ()=>handleEdit(editingId) : handleAdd,
                        colorScheme: editingId !== null ? "green" : "brand",
                        minW: "120px",
                        leftIcon: editingId !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Edit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditIcon"], {}, void 0, false, {
                            fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                            lineNumber: 231,
                            columnNumber: 42
                        }, void 0) : undefined,
                        children: editingId !== null ? 'Save Changes' : 'Add Project'
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    editingId !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>{
                            setEditingId(null);
                            setName('');
                            setDescription('');
                        },
                        variant: "ghost",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$list$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
                spacing: 3,
                children: items.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$list$2f$list$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListItem"], {
                        p: 4,
                        borderWidth: "1px",
                        borderRadius: "md",
                        _hover: {
                            bg: "gray.50"
                        },
                        bg: editingId === p.id ? "blue.50" : "white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$flex$2f$flex$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$box$2f$box$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box"], {
                                    flex: "1",
                                    mr: 4,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                            fontWeight: "bold",
                                            isTruncated: true,
                                            maxW: "100%",
                                            title: p.name,
                                            children: p.name
                                        }, void 0, false, {
                                            fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$typography$2f$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                            fontSize: "sm",
                                            color: "gray.600",
                                            noOfLines: 2,
                                            title: p.description,
                                            children: p.description
                                        }, void 0, false, {
                                            fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$stack$2f$stack$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stack"], {
                                    direction: "row",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            leftIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$icons$2f$dist$2f$esm$2f$Edit$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EditIcon"], {}, void 0, false, {
                                                fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 29
                                            }, void 0),
                                            size: "sm",
                                            colorScheme: editingId === p.id ? "green" : "blue",
                                            variant: editingId === p.id ? "solid" : "outline",
                                            onClick: ()=>handleEdit(p.id),
                                            children: editingId === p.id ? 'Editing...' : 'Edit'
                                        }, void 0, false, {
                                            fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$task_manager_api$2f$frontend$2f$node_modules$2f40$chakra$2d$ui$2f$react$2f$dist$2f$esm$2f$button$2f$button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            colorScheme: "red",
                                            variant: "outline",
                                            onClick: ()=>del(p.id),
                                            isDisabled: editingId === p.id,
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this)
                    }, p.id, false, {
                        fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/task_manager_api/frontend/app/projects/page.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7d51abe3._.js.map