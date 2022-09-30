import { AxiosResponse } from "axios";
import { 線上返回中文格式 } from "格式";

export function 線上數據傳輸對象<T = any, D = any>(原對象: AxiosResponse<T, D>): 線上返回中文格式<T, D> {
    const 返回對象: 線上返回中文格式 = {
        數據: 原對象.data,
        狀態: 原對象.status,
        狀態文本: 原對象.statusText,
        標題: 原對象.headers,
        配置: 原對象.config
    }
    return 返回對象
}