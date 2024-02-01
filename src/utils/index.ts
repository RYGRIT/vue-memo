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
