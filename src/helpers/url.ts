import { isDate, isObject } from './util'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
export function bulidURL(url: string, params?: any) {
  if (!params) {
    return url
  }

  const parts: Array<string> = []
  console.log(params)
  Object.keys(params).forEach(key => {
    let val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values: Array<string> = []

    if (Array.isArray(val)) {
      values = values
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializeParams = parts.join('&')

  if (serializeParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializeParams
  }
  return url
}
