export interface 政府天氣應用程式介面返回中文格式 {
    閃電: 政府天氣應用程式介面返回閃電中文格式
    下雨: 政府天氣應用程式介面返回下雨中文格式
    圖標: number[]
    圖標更新時間: Date
    特別天氣提示: string[]
    紫外線: 政府天氣應用程式介面返回紫外線中文格式
    溫度: 政府天氣應用程式介面返回溫度中文格式
    警告信息: string[]
    mintempFrom00To09: string,
    rainfallFrom00To12: string,
    rainfallLastMonth: string,
    rainfallJanuaryToLastMonth: string,
    tcmessage: string,
    濕度: 政府天氣應用程式介面返回濕度中文格式
}

export interface 政府天氣應用程式介面返回閃電中文格式 {
    數據: Array<{
        地區: string
        發生: string
    }>
    開始時間: Date
    時間結束: Date
}

export interface 政府天氣應用程式介面返回下雨中文格式 {
    數據: Array<{
        單位: string
        地區: string
        最大: number
        最小: number
        主要: string
    }>
    開始時間: Date
    時間結束: Date
}

export interface 政府天氣應用程式介面返回紫外線中文格式 {
    記錄時間: string
    數據: Array<{
        數值: number
        地區: string
        描述: string
    }>
}

export interface 政府天氣應用程式介面返回溫度中文格式 {
    記錄時間: Date
    數據: Array<{
        單位: string
        數值: number
        地區: string
    }>
}

export interface 政府天氣應用程式介面返回濕度中文格式 {
    記錄時間: Date
    數據: Array<{
        單位: string
        數值: number
        地區: string
    }>
}