/*
 * @Author: your name
 * @Date: 2021-09-21 12:47:49
 * @LastEditTime: 2022-03-06 10:00:31
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \源码\阶段五：Vue.js项目实战开发\第七章 HR-saas中台管理项目资料\HR-saas中台管理项目资料\项目完整源码\hrsaas106\src\utils\auth.js
 */
import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token' // 设置一个独一无二的key
const timeKey = 'hrsaas-timestamp-key' // 设置一个独一无二的key
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// 设置时间戳
export function setTimeStamp() {
  Cookies.set(timeKey, Date.now())
}
