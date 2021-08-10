import request from '@/utils/request.js'

// 以API结尾的方法都是网络请求方法（内部都是ajax请求）
// ajax请求是异步代码-在未来请求回来才会触发一个函数
// Promise来管理异步代码（request方法原地返回一个Promise对象）
// 总结：每次调用API结尾的方法，都会得到一个Promise对象

// 用户登录
export const loginAPI = function (data) {
  return request({
    url: '/mp/v1_0/authorizations',
    method: 'POST',
    data
  })
}
