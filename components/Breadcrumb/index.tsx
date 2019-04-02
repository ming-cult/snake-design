import * as React from 'react'
import {getCx} from '../utils/tool'
import {BreadcrumbProps, BreadcrumbItemProps} from 'types/breadcrumb.d'
import './index.scss'

const {useCallback} = React

const defaultProps: Partial<BreadcrumbProps> = {
  prefixCls: 'snake-breadcrumb',
  size: 'default',
  separator: '/',
  expandMax: 5,
}

const Breadcrumb: React.FC<BreadcrumbProps> & {defaultProps: Partial<BreadcrumbProps>} = props => {
  const {prefixCls, separator, onClick, dataSource} = props
  const cx = useCallback(getCx(prefixCls), [prefixCls])

  return (
    <div className={prefixCls}>
      {dataSource.map((item: BreadcrumbItemProps, index: number) => {
        const isActive = index === dataSource.length - 1
        let aProps: any = {}
        if (!isActive) {
          aProps = onClick
            ? {
                onClick: () => onClick(index, item.link),
              }
            : {
                href: item.link,
              }
        }
        return (
          <span
            key={`key-${item.link}`}
            className={cx('item', {
              ['item-active']: isActive,
            })}
          >
            <a {...aProps} className={cx('item-content')}>
              {item.content}
            </a>
            {!isActive && <span className={cx('separator')}>{separator}</span>}
          </span>
        )
      })}
    </div>
  )
}

Breadcrumb.defaultProps = defaultProps

export default Breadcrumb
