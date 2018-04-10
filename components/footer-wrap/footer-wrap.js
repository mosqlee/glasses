import React, { Component } from 'react';
class FooterWrap extends Component {
    render() {
        return (
            <div className="container-fuild footer-wrap-container">
                <style scope jsx>{`
                    .footer-wrap-container {
                        background: #f6f6f6;
                    }
                    .footer-row{
                        padding-top: 20px;
                    }
                    .footer-line{
                        display: block;
                        width: 25px;
                        margin-top: 3px;
                        margin-bottom: 3px;
                        margin-left: 0;
                        height: 1px;
                        background-color: gray;
                    }
                    ul {
                        margin: 0;
                        padding: 0;
                        list-style-type: none;
                        font-size: 12px;
                    }
                    li {
                        text-align: left;
                    }
                    li a{
                        font-size: 12px;
                        color: #000;
                    }
                    li a:hover{
                        color: #334c83;
                    }
                    .credit-card-container {
                        margin: 50px 0 20px 0;
                    }
                `}</style>
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-md-3">
                            <div className="col-md-12 text-left">
                                <b>Firmoo</b>
                                <i className="footer-line"></i>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    {
                                        [...Array(6).keys()].map(i=>{
                                            return (
                                                <li key={i}>
                                                    <a href="#">Contact Us</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    {
                                        [...Array(6).keys()].map(i => {
                                            return (
                                                <li key={i}>
                                                    <a href="#">Contact Us</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="col-md-12 text-left">
                                <b>Firmoo</b>
                                <i className="footer-line"></i>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    {
                                        [...Array(6).keys()].map(i => {
                                            return (
                                                <li key={i}>
                                                    <a href="#">Contact Us</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    {
                                        [...Array(6).keys()].map(i => {
                                            return (
                                                <li key={i}>
                                                    <a href="#">Contact Us</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-12 text-left">
                                <b>Firmoo</b>
                                <i className="footer-line"></i>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    {
                                        [...Array(6).keys()].map(i => {
                                            return (
                                                <li key={i}>
                                                    <a href="#">Contact Us</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    {
                                        [...Array(6).keys()].map(i => {
                                            return (
                                                <li key={i}>
                                                    <a href="#">Contact Us</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {/*  完 */}
                        <div className="col-md-12 text-center credit-card-container">
                            <img src={"../../static/img/credit-card.jpg"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FooterWrap