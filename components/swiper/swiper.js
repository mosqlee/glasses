import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap';
import imgs from './imgs'
import { connect } from 'react-redux'
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
      const { swiperInfo, isLoading, errorMsg } = this.props.swiperInfo;
      return (
        <div>
            <style scope jsx>{`
                .swiper-img {
                    width: 100%;
                    height: 500px;
                }
                `}
            </style>
            <Carousel>
                  {swiperInfo.swiperInfo.map((i)=>{
                    return (
                        <Carousel.Item key={i}>
                            <img className="swiper-img" alt="900x500" src={i}/>
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
        </div>
      )
  }
}
export default connect((state) => ({ swiperInfo: state.swiperInfo }))(Swiper)