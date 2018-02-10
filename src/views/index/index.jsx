import React, { Component } from 'react';
import List from './list';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    title: '工程研发部门',
                    list: ['Mac开发工程师', 'ios App测试工程师', 'Android远程控制工程师', 'web前端工程师', 'Android多媒体软件开发工程师']
                },
                {
                    title: '产品设计部门',
                    list: ['网页设计师', 'ID / 工业设计师', '视觉设计师 / GUI界面设计师', '平面设计师']
                }
            ]
        }
    }
    render() {
        let { list } = this.state;
        return (
            <div className='indexPage'>
                <h2>招聘职位</h2>
                {list.map((item, index) => {
                    return <div className="box">
                        <List list={item} key={index} /></div>
                })}
            </div>
        );
    }
}
export default Index;