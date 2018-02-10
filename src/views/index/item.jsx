import React, { Component, Fragment } from 'react';

class Item extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            redio: false
        }
        this.redio = this.redio.bind(this);
    }
    redio(ind){
              
        this.setState((state) => {
            state.count = ind;
            state.redio = !state.redio;
            return state;
        });
        // console.log(ind, this.state.count);  
    }
    render() {
        let { item, check } = this.props;
        let { count } = this.state;
        return (
            <ul ref='parent'>
                {item.map((val, ind) => {
                    
                    if (ind===count){
                        console.log(ind, count)
                        return <li key={ind} className={(check ? 'active' : '') || (this.state.redio ? 'active': '')} onClick={()=>{
                            this.redio(ind);
                            // console.log(ind, count)
                        }}><span>√</span>{val}</li>
                    } else {
                        return <li key={ind} className={check ? 'active' : ''} onClick={()=>{
                            this.redio(ind);
                        }}><span>√</span>{val}</li>
                    }
                })}
            </ul>
        );
    }
    componentDidUpdate(){
        let { parent } = this.refs;
        let len = this.refs.parent.querySelectorAll('li').length;
        let { count } = this.state;
        if (count === len){
            // this.props.callback()
        } else {
            // this.props.x()
        }
    }
}
export default Item;