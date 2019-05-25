const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    return acc
  }, {})

const getColumnsByFixed = array => {
  return groupBy(array, 'fixed')
}

const checkboxKey = Symbol.for('checkbox')
const radioKey = Symbol.for('radio')

export { getColumnsByFixed, checkboxKey, radioKey }
