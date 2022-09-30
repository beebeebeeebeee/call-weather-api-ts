import _axios, { AxiosInstance } from 'axios'
import { 線上數據傳輸對象, 政府天氣應用程式介面返回格式數據傳輸對象 } from './數據傳輸對象'
import { 政府天氣應用程式介面返回英文格式 } from './格式'

declare global {
    interface Array<T> {
        尋找: Array<T>['find']
    }
}

Array.prototype.尋找 = Array.prototype.find

const 線上: AxiosInstance & Partial<{
    獲取: AxiosInstance['get']
}> = _axios.create()
線上.獲取 = 線上.get
const 紀錄 = console.log;

declare global {
    interface Array<T> {
        尋找: Array<T>['find']
    }
}

const 政府天氣應用程式介面 = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en'
const 目標區域 = "Hong Kong and Kowloon"
const 目標地區 = "Wan Chai"

async function 主要() {
    const 原資料 = 線上數據傳輸對象((await 線上.獲取<政府天氣應用程式介面返回英文格式>(政府天氣應用程式介面))).數據
    const 資料 = 政府天氣應用程式介面返回格式數據傳輸對象(原資料)

    const 目標區域是否閃電 = 資料.閃電.數據.尋找(每個對象 => 每個對象.地區 === 目標區域).發生 === 'true'
    const 目標地區下雨量 = 資料.下雨.數據.尋找(每個對象 => 每個對象.地區 === 目標地區)

    紀錄({
        目標區域是否閃電,
        目標地區下雨量: (目標地區下雨量.最小 + 目標地區下雨量.最大) / 2 + 目標地區下雨量.單位
    })
}

void 主要()