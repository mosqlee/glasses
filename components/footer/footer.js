import React, { Component } from 'react';
import ShowUser from '../show-user/show-user';
import SaleCode from './../saleCode/saleCode';
import Card from './../card/card';
class Footer extends Component {
    render(){
        return(
            <footer>
                <style scope jsx>{`
                    .sale-title{
                        margin: 0 0 10px 0;
                        font-size: 35px;
                    }
                    .star-firmoo {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding-top: 15px;
                        padding-bottom: 15px;
                        margin-left: 30px;
                        width: 1110px;
                        border-top: 1px solid #ccc;
                        border-bottom: 1px solid #ccc;
                    }
                    .star-container {
                        display: flex;
                    }
                    .star {
                        display: block;
                        margin: 0 2px;
                        width: 25px;
                        height: 25px;
                        background: url('../../static/img/star.png');
                    }
                    .link-hover {
                        padding: 0 15px;
                        color: #000;
                    }
                    .link-hover:hover {
                        color: #00A2E1;
                    }
                    .ad-talk {
                        padding-top: 10px;
                        border-top: solid 1px #d8d8d8;
                    }
                `}
                </style>
                <div className="compony-me-container col-md-12 text-center">
                    <p></p>
                    <h3>Firmoo & Me</h3>
                    <p></p>
                </div>
                <p>Review firmoo glasses with photos, get a chance to be featured and to help other customers shop.</p>
                <ShowUser></ShowUser>
                <div className="col-md-12 star-firmoo">
                    <a className="star-container" href="">
                        {[1,2,3,4,5].map(i=>{
                            return(
                                <span className="star" key={i}></span>
                            )
                        })}
                    </a>
                    <a className="link-hover" href="">Firmoo reviews Excellent 9.7 Our Customers Love Us</a>
                    <a href="">
                        <img src={"../../static/img/trust_plot.png"} alt="trustPlot"/>
                    </a>
                </div>
                <div className="col-md-12">
                    <div className="enter-email-container">
                        <h3 className="sale-title">Buy one Get one Free</h3>
                        {/* <p>
                            <b>Join Us Now & Get 15% Off</b>
                        </p> */}
                        <SaleCode></SaleCode>
                    </div>
                </div>
                <div className="col-md-12 guide-container">
                    <div className="col-md-4">
                        <Card 
                        title="Measure your PD" 
                        subtitle="(pupillary distance)"
                        img="../../static/img/guide_size.png"
                        ></Card>
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Face Shape"
                            img="../../static/img/guide_face.png"
                        ></Card>
                    </div>
                    <div className="col-md-4">
                        <Card
                            img="../../static/img/shopping_share.jpg"
                        ></Card>
                    </div>
                </div>
                <p className="ad-talk">One-on-One Service, Save Up to 90%</p>
            </footer>
        )
    }
}
export default Footer