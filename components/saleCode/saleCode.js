import React, { Component } from 'react';

class SaleCode extends Component {
    render() {
        const title = this.props.title;
        const bg = this.props.bg;
        return (
                <div className="enter-email-input">
                    <input className="enter-email" type="email" placeholder="Enter your email address to get code" />
                    <button className="btn btn-default email-button">Subscribe</button>
                </div>
        )
    }
}
export default SaleCode