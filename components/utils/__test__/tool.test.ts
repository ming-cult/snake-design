import { noop, getType, mapKeys, getCx } from '../tool'

describe('utils/tool Test', () => {
  it('noop works correctly', () => {
    expect(noop()).toEqual(undefined)
    expect(noop(1, 2, 3)).toEqual(undefined)
  })
  it('getType works correctly', () => {
    expect(getType('')).toEqual('string')
    expect(getType(1)).toEqual('number')
    expect(getType({})).toEqual('object')
    expect(getType([1, 2, 3])).toEqual('array')
  })
  it('mapKeys works correctly', () => {
    expect(mapKeys({ a: 1, b: 2 }, (val, key) => key + val)).toEqual({
      a1: 1,
      b2: 2
    })
  })
  it('getCx works correctly', () => {
    const cx = getCx('breadcrumb')
    const color = 'blue'
    expect(cx('header')).toEqual('breadcrumb-header')
    expect(
      cx(
        'item',
        null,
        undefined,
        [{ 'item-first': true }],
        {
          'item-hover': false,
          'item-active': true
        },
        `item-${color}`,
        {
          className: 'my-item'
        }
      )
    ).toEqual(
      'breadcrumb-item breadcrumb-item-first breadcrumb-item-active breadcrumb-item-blue my-item'
    )
  })
})
