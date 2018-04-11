import React, { Component } from 'react';

class SaleCode extends Component {
    getSaleCode = ()=>{
        console.log(this.refs)
    }
    render() {
        const title = this.props.title;
        const bg = this.props.bg;
        return (
                <div className="enter-email-input">
                    <input className="enter-email"
                    ref="saleCode"
                     type="email" placeholder="Enter your email address to get code" />
                    <button onClick={this.getSaleCode}
                    className="btn btn-default email-button">Subscribe</button>
                </div>
        )
    }
}
export default SaleCode