import dayjs from 'dayjs'

export const FormatTime = (date: Date | string) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm')
}

export const localGetItem = (key: string) => {
  const dataStr = localStorage.getItem(key)
  if (dataStr) {
    return JSON.parse(dataStr)
  }
  return null
}

export const localSetItem = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data))
}

export const genId = (): number => {
  return Math.floor(Math.random() * 939874)
}

// 模拟 HTTP 请求
export const ImitateHttp = (
  fun: (s: (value: unknown) => void, f: (value: unknown) => void) => void,
  timer = 1000
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => fun(resolve, reject), timer)
  })
}
