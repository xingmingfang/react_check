import React, { Component } from 'react';
import ReactDom from 'react-dom';

class SubMenu extends Component {
  render() {
    let {
      flag,
      children
    } = this.props
    return (
      <div style={flag ? {display: 'block'} : {display: 'none'} }>
        {
          children.map((itemChild, indexChild) => 
            <p key={indexChild}>{itemChild}</p>
          )
        }
      </div>
    )
  }
}

class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      ListData: [
        {
          title: '工程研发部门',
          flag: false,
          children: ['mac开发工程师','iOS app测试工程师', 'web前端工程师']
        },
        {
          title: '产品设计部门',
          flag: false,
          children: ['mac开发工程师','iOS app测试工程师', 'web前端工程师']
        }
      ] 
    }
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.ListData.map((item, index)=>
              <li key={index} onClick={()=>{
                let subMenuDom = ReactDom.findDOMNode( this.refs.SubMenu );
                let display = subMenuDom.style.display
                if ( display == 'none' ) {
                  subMenuDom.style.display = 'block'
                } else {
                  subMenuDom.style.display = 'none'
                }
              }}>
                {item.title} <a>清空</a>
                <SubMenu flag={item.flag} children={item.children} />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default List;