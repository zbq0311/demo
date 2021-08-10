// 对axios进行二次封装
// 作用：封装一个网络请求的工具对象

import axios from 'axios'

const ajax = axios.create({ // 生成自定义axios对象
  baseURL: 'http://api-toutiao-web.itheima.net'
  // 作用：所有的网络请求，都会在前面拼接这个地址
  // 使用场景：统一项目的基础地址(如果有某个地址不一样再去覆盖就可以了)
  // 特殊：具体请求的时候，如果有baseURL就会覆盖全局这个
})

export default ajax // 把有全局基地址的ajax对象暴露出去使用

/* 外部引入
import request from '这个文件'
使用
request({
  url:"具体路径",
  method:"post",
})
*/
