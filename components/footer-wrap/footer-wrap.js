import React, { Component } from 'react';
import FooterLinks from './../footer-links/footer-links';
class FooterWrap extends Component {
    render() {
        const FirmooLinks = [
            [
                ['Contact Us', 'Return&Exchange', 'Help', 'Terms and Conditions', 'Privacy Policy','Logistics Terms'],
                ['About Us', 'FAQ', 'Affiliate Program', 'How to Order', 'Coupons','Clearance']
            ]
        ]
        return (
            <div className="container-fuild footer-wrap-container">
                <style scope jsx>{`
                    .footer-wrap-container {
                        background: #f6f6f6;
                    }
                    .footer-row{
                        padding-top: 20px;
                    }

                    .divider-wrapper{
                        position: relative;
                        height: 1px;
                        width: 100%;
                        margin: 50px 0;
                        background-color: #dbdbdb;
                        font-size: 12px;
                    }
                    .copyright {
                        position: absolute;
                        left: 0;
                        top: -12px;
                        display: block;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                    }
                    .credit-card-container {
                        margin: 50px 0 20px 0;
                    }
                    .copyright span {
                        display: inline-block;
                        background-color: #f6f6f6;
                        padding: 0 20px;
                    }
                `}</style>
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-md-3">
                            <FooterLinks title={'Firmoo'} links={
                                FirmooLinks[0]
                            }></FooterLinks>
                        </div>
                        <div className="col-md-5">
                            <FooterLinks title={'Additional Resources'} links={
                                FirmooLinks[0]
                            }></FooterLinks>
                        </div>
                        <div className="col-md-4">
                            <FooterLinks title={'Specialty Eyewear'} links={
                                FirmooLinks[0]
                            }></FooterLinks>
                        </div>
                        {/*  完 */}
                        <div className="col-md-12 text-center credit-card-container">
                            <img src={"../../static/img/credit-card.jpg"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="divider-wrapper">
                            <div className="copyright"><span className="hidden-xs">Toll Free: 1-888-277-8308 | Email: service@firmoo.com</span>
                                <br />
                                <span>Copyright © 2018 Firmoo Online Optical Store.</span><span className="hidden-xs">All Right Reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default FooterWrap