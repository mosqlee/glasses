import React, { Component } from 'react';
import './swiper.css';
import { Button,Panel,PanelGroup} from 'react-bootstrap';
import imgs from './imgs'

class Swiper extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          activeKey: '0'
        };
    }
    
    handleSelect(activeKey) {
        this.setState({ activeKey });
    }
  render() {
    const links = [
        {title:'MATERIAL', links:['Metal','Acetate','TR','Titanium']},
        {title:'FRAME', links:['Full Frame','Semi-rimless','Rimless']},
    ];
    return (
        <div>
            {imgs.map((i)=>{
                return (
                    <img src={i} key="i"/>
                )
            })}
        </div>
      )
  }
}
export default Swiper