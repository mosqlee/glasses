import React, { Component } from 'react';
import './swiper.css';
import { Carousel} from 'react-bootstrap';
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
    return (
        <Carousel>
            {imgs.map((i)=>{
                return (
                    <Carousel.Item>
                        <img className="swiper-img" alt="900x500" src={i} />
                    </Carousel.Item>
                )
            })}
            {/* <Carousel.Item>
                
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
      )
  }
}
export default Swiper