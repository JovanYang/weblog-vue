import { ElMessage } from 'element-plus'
import nprogress from "nprogress"

// 显示页面加载 Loading
export function showPageLoading() {
    nprogress.start()
}

// 隐藏页面加载 Loading
export function hidePageLoading() {
    nprogress.done()
}


// 消息提示
export function showMessage(message = '', type = 'success', customClass = '') {
    return ElMessage({
        type,
        message,
        customClass,
        duration: 2000
    })
}

// 成功提示
export function showSuccess(message = '操作成功') {
    return showMessage(message, 'success')
}

// 错误提示
export function showError(message = '操作失败') {
    return showMessage(message, 'error')
}

// 警告提示
export function showWarning(message) {
    return showMessage(message, 'warning')
}
