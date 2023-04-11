/**
 * @global
 * @desc 对象数组去重
 * @param {array} arr 
 * @param {string} key 对象中相同的关键字(如id)
 * @returns {array} 返回新数组，eg: ArrayDelSome([{id: 1},{id: 2},{id: 1}], 'id') -> 返回: [{id: 1},{id: 2}]
 */
export default function ArrayDelSome(arr, key) {
  const map = new Map()
  return arr.filter((x) => !map.has(x[key]) && map.set(x[key], true))
}
