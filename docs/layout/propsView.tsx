import * as React from 'react'

interface PropsAttribute {
  attribute: string,
  description: string,
  type: string,
  acceptedValue?: string,
  default?: string
  [key: string]: string
}

interface PropsTableconstant {
  title: string,
  props: Array<PropsAttribute>
  [propName: string]: any
}

interface PropsTableProps {
  constants: Array<PropsTableconstant> | PropsTableconstant
}

const tr = (item: PropsAttribute) =>
  Object.keys(item).map((it, index) =>
    <td key={`td-${index}`} className={it === 'type' ? 'snake-design-type' : ''}>{item[it]}</td>
)

export default class PropsTable extends React.Component<PropsTableProps, any> {

  // 渲染一个组件的props
  renderOneProps(constants: PropsTableconstant, i: number) {
    const { title, props } = constants
    const tbody = props.map((item, index) => {
      return (<tr key={index}>{tr(item)}</tr>)
    })
    return <div key={i} className="props-table">
      <p className="props-title">{title}</p>
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>描述</th>
            <th>类型</th>
            <th>枚举值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  }

  render() {
    const { constants } = this.props
    const constantsArray = Array.isArray(constants) ? constants : [constants]
    return constantsArray.map((con, i) => this.renderOneProps(con, i))
  }
}
