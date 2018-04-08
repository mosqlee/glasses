import React, { Component } from 'react';
import './nav-cate.css';
import { Button,Panel,PanelGroup} from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

class NavCate extends Component {
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
            <nav className="nav-cate">
                <div className="nav-cate-container">
                    <a>
                        <img src={logo} alt="logo"/>>
                    </a>
                    <ul className="nav-cate-item">
                        <li onClick={() => this.setState({ activeKey: this.state.activeKey ==='1'?'0':'1' })}>
                            <span>EYEGLASSES</span>
                            <span className="nav-cater"></span>
                        </li>
                        <li onClick={() => this.setState({ activeKey: this.state.activeKey ==='2'?'0':'2' })}>
                            <span>SUNGLASSES</span>
                            <i className="nav-cater"></i>
                        </li>
                        <li>DAILY NEW</li>
                        <li>BOGO SALE</li>
                        <li onClick={() => this.setState({ activeKey: this.state.activeKey ==='3'?'0':'3' })}>
                            <span>FEATURED STYLES</span>
                            <i className="nav-cater"></i>
                        </li>
                    </ul>
                    <div className="search-component">
                        <input className="search-input" type="text" placeholder="Search.."/>
                        <i className="glyphicon glyphicon-search"></i>
                    </div>
                </div>
            </nav>
            <PanelGroup
                accordion
                id="accordion-controlled"
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
            >
                <Panel eventKey="1">
                    <Panel.Body collapsible>
                        <div className="panel-body-container">
                            <div className="col-md-4 panel-body-img">
                                <a href="#" className="">
                                    <img src={"https://df5apg8r0m634.cloudfront.net/images/2017/0516/xT7dqzj9V4.jpg" } alt="product"/>
                                    <p>MEN'S GLASSES</p>
                                </a>
                                <a href="#" className="">
                                    <img src={"https://df5apg8r0m634.cloudfront.net/images/2017/0516/xT7dqzj9V4.jpg" } alt="product"/>
                                    <p>MEN'S GLASSES</p>
                                </a>
                            </div>
                            <div className="col-md-4 panel-body-selection">
                                {links.map((i)=> {
                                    return (
                                    <div className="filter-item-container" key={i.title}>
                                        <h5>{i.title}</h5>
                                        {i.links.map((m)=>{
                                            return (
                                            <a className="filter-item-link" key={m} href="#">{m}</a>
                                        )})}
                                    </div>
                                    )
                                })}

                            </div>
                            <div className="col-md-4 panel-body-selection">
                                {links.map((i)=> {
                                    return (
                                    <div className="filter-item-container" key={i.title}>
                                        <h5>{i.title}</h5>
                                        {i.links.map((m)=>{
                                            return (
                                            <a className="filter-item-link" key={m} href="#">{m}</a>
                                        )})}
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Panel.Body>
                </Panel>
                <Panel eventKey="2">
                    <Panel.Body collapsible>Panel content 2</Panel.Body>
                </Panel>
                <Panel eventKey="3">
                    <Panel.Body collapsible>Panel content 3</Panel.Body>
                </Panel>
            </PanelGroup>
        </div>
      );
  }
}
export default NavCate