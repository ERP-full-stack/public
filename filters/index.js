/**
 * Created by LIUQIYU on 2019/2/20.
 */

/**
 * 金额
 * 类型:人民币
 * @param s
 * @returns {string}
 */
export const money = (s) => {
  // if (/[^0-9\.]/.test(s)) return 'invalid value'
  s = s.replace(/^(\d*)$/, '$1.')
  s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1')
  s = s.replace('.', ',')
  let re = /(\d)(\d{3},)/
  while (re.test(s)) {
    s = s.replace(re, '$1,$2')
    s = s.replace(/,(\d\d)$/, '.$1')
  }
  return '￥' + s.replace(/^\./, '0.')
}

export const capitalize2 = (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
