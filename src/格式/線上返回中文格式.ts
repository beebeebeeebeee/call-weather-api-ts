import { AxiosRequestConfig, AxiosResponseHeaders } from "axios";

export interface 線上返回中文格式<T = any, D = any> {
    數據: T;
    狀態: number;
    狀態文本: string;
    標題: AxiosResponseHeaders;
    配置: AxiosRequestConfig<D>;
    請求?: any;
}
