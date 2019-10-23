import axioa from '../../src/index'
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/ger',
  params: {
    a: 1,
    b: 2
  }
})
