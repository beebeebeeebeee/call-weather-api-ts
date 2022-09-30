export interface 政府天氣應用程式介面返回英文格式 {
    lightning: 政府天氣應用程式介面返回閃電英文格式
    rainfall: 政府天氣應用程式介面返回下雨英文格式
    icon: number[]
    iconUpdateTime: Date
    specialWxTips: string[]
    uvindex: 政府天氣應用程式介面返回紫外線英文格式
    temperature: 政府天氣應用程式介面返回溫度英文格式
    warningMessage: string[]
    mintempFrom00To09: string,
    rainfallFrom00To12: string,
    rainfallLastMonth: string,
    rainfallJanuaryToLastMonth: string,
    tcmessage: string,
    humidity: 政府天氣應用程式介面返回濕度英文格式
}

export interface 政府天氣應用程式介面返回閃電英文格式 {
    data: Array<{
        place: string
        occur: string
    }>
    startTime: Date
    endTime: Date
}

export interface 政府天氣應用程式介面返回下雨英文格式 {
    data: Array<{
        unit: string
        place: string
        max: number
        min: number
        main: string
    }>
    startTime: Date
    endTime: Date
}

export interface 政府天氣應用程式介面返回紫外線英文格式 {
    recordTime: string
    data: Array<{
        value: number
        place: string
        desc: string
    }>
}

export interface 政府天氣應用程式介面返回溫度英文格式 {
    recordTime: Date
    data: Array<{
        unit: string
        value: number
        place: string
    }>
}

export interface 政府天氣應用程式介面返回濕度英文格式 {
    recordTime: Date
    data: Array<{
        unit: string
        value: number
        place: string
    }>
}