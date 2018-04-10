import React, { Component } from 'react';
import Link from 'next/link'
class GlassItem extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };
        // This binding is necessary to make `this` work in the callback
    }

    handleClick(index,e) {
        console.log(index);
        this.setState(prevState => ({
            current: index
        }));
    }
    render() {
        let data = this.props.data;
        return (
            <div className="glass-item-container">
                <style scope jsx>{`
                    .img-list {
                        padding: 0;
                        list-style:none;        
                    }
                    .img-dot {
                        display: inline-block;
                        margin: 0 2px;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        border: 1px solid #45555f;
                        cursor: pointer;
                    }
                    .img-dot-active {
                        background: #45555f;
                    }
                    .glass-img{
                        width: 100%;
                    }
                `}
                </style>
                <Link href="/other">
                    <a>
                        <img className="glass-img" src={data.imgs[this.state.current]} alt="" />
                    </a>
                </Link>
                <ul className="img-list">
                    {data.imgs.map((i,index)=>{
                        return (
                            <li className={this.state.current === index ? "img-dot img-dot-active" : "img-dot" }
                                key={i} index={index}
                                onClick={(e)=>this.handleClick(index,e)}>
                            </li>
                        )
                    })}
                </ul>
                <p>${data.price}</p>
            </div>
        )
    }
}
export default GlassItem