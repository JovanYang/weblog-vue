<template>
    <div class="grid grid-cols-5 h-screen">
        <!-- 左侧区域 - 使用更柔和的渐变背景 -->
        <div class="col-span-5 order-2 md:col-span-3 md:order-1 bg-gradient-to-br from-blue-500/90 to-indigo-600/90 animate__animated animate__bounceInLeft animate__fast
">
            <div class="flex justify-center items-center h-full flex-col p-12">
                <h2 class="font-bold text-4xl mb-8 text-white/90 tracking-wide">Weblog 博客系统</h2>
                <p class="text-white/70 text-center text-lg leading-relaxed max-w-xl mb-16">
                    一款由 Spring Boot + Mybaits Plus + Vue 3.2 + Vite 4 开发的前后端分离博客系统
                </p>
                <img 
                    src="@/assets/developer.png" 
                    class="w-3/5 md:w-3/5 max-w-lg drop-shadow-2xl animate-float"
                >
            </div>
        </div>

        <!-- 右侧登录区域 -->
        <div class="col-span-5 order-1 md:col-span-2 md:order-2 bg-gray-50/80 animate__animated animate__bounceInRight animate__fast">
            <div class="flex justify-center items-center h-full flex-col p-8">
                <div class="w-full max-w-md">
                    <!-- 标题区域 -->
                    <h1 class="font-bold text-3xl mb-4 text-gray-700 text-center">欢迎回来</h1>
                    <p class="text-gray-400 text-center mb-10">请使用您的账号密码登录系统</p>
                    
                    <!-- 登录表单 -->
                    <el-form class="space-y-6">
                        <el-form-item>
                            <el-input 
                                v-model="loginForm.username"
                                size="large" 
                                placeholder="请输入用户名" 
                                :prefix-icon="User"
                                class="h-12"
                                clearable
                            />
                        </el-form-item>
                        
                        <el-form-item>
                            <el-input 
                                v-model="loginForm.password"
                                size="large" 
                                type="password" 
                                placeholder="请输入密码" 
                                :prefix-icon="Lock"
                                class="h-12"
                                clearable
                                show-password
                            />
                        </el-form-item>
                        
                        <!-- 记住我选 -->
                        <div class="flex items-center justify-between mb-6">
                            <el-checkbox v-model="loginForm.remember" class="text-gray-500">记住我</el-checkbox>
                            <a href="#" class="text-blue-500 hover:text-blue-600 text-sm">忘记密码？</a>
                        </div>
                        
                        <el-form-item>
                            <el-button 
                                type="primary" 
                                class="w-full h-12 text-lg font-medium login-btn"
                                :loading="loading"
                                @click="handleLogin"
                            >
                                登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '@/api/admin/user'

// 登录表单数据
const loginForm = reactive({
    username: '',
    password: '',
    remember: false
})

// 加载状态
const loading = ref(false)

// 登录处理
const handleLogin = async () => {
    try {
        // login 函数接收用户名和密码，发送请求到后端
        const res = await login(loginForm.username, loginForm.password)
        if (res.data.code === 200) {
            // 登录成功处理
            console.log('登录成功')
        }
    } catch (error) {
        // 登录失败处理
        console.error('登录失败')
    }
}
</script>

<style scoped>
/* 悬浮动画 */
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

/* 自定义输入框样式 */
:deep(.el-input__wrapper) {
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
    background-color: rgba(255, 255, 255, 0.8);
}

:deep(.el-input__wrapper:hover) {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

:deep(.el-button) {
    border-radius: 10px;
    background: linear-gradient(to right, #4f46e5, #3b82f6);
    border: none;
    transition: all 0.3s ease;
}

:deep(.el-button:hover) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

:deep(.el-checkbox__label) {
    color: #6b7280;
}
</style>
