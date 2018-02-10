import React, { Component, Fragment } from 'react';
import Item from './item';

class List extends Component {
    constructor() {
        super();
        this.state = {
            isCheck: false
        }
        this.isChecked = this.isChecked.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.q = this.q.bind(this);
        this.x = this.x.bind(this);
    }
    // 多选
    isChecked(index) {
        this.setState((state) => {
            state.isCheck = !state.isCheck;
            return state;
        });        
    }
    // 清空
    clearAll(){
        this.setState((state) => {
            state.isCheck = false;
            return state;
        });
    }
    q(){
        this.setState((state) => {
            state.isCheck = true;
            return state;
        }); 
    }
    x(){
        this.setState((state) => {
            state.isCheck = false;
            return state;
        });
    }
    render() {
        let { list } = this.props;
        let { activeIndex, isCheck, isRedio } = this.state;
        return (
            <Fragment>
                <p className={isCheck ? 'active' : ''}><span onClick={this.isChecked}>√</span>{list.title}<b onClick={this.clearAll}>清空</b></p>
                <Item item={list.list} check={isCheck} callback={this.q} x={this.x}/>                
            </Fragment>
        );
    }
}
export default List;