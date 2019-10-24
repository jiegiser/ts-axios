import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { bulidURL } from './helpers/url'
function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}
export default axios

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}
