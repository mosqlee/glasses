import React, { Component } from 'react';
import { Button,Panel,PanelGroup} from 'react-bootstrap';

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
            <style scope jsx>{`
                .nav-cate-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 71px;
                width: 1150px;
                margin: 0 auto;
                }
                .nav-cate-item {
                margin-left: 20px;
                }
                .nav-cate-item li {
                float: left;
                padding: 0 13px;
                font-size: 18px;
                cursor: pointer;
                }
                .nav-cater {
                display: inline-block;
                width: 0;
                height: 0;
                margin-left: 2px;
                vertical-align: middle;
                border-top: 4px solid;
                border-right: 4px solid transparent;
                border-left: 4px solid transparent;
                }
                .search-component {
                margin-top: -8px;
                border-bottom: 1px solid #000;
                }
                .search-input {
                width: 60px;
                border: none;
                }
                .search-input:focus {
                transition: 0.5s;
                width: 140px;
                outline: none;
                }
                .panel {
                border: none;
                }
                .panel-body-container {
                margin: 0 auto;
                width: 1200px;
                }
                .panel-body-img {
                display: flex;
                justify-content: space-around;
                align-items: center;
                border-right: #d8d8d8 solid 1px;
                }
                .panel-body-img a {
                display: block;
                }
                .panel-body-img a:hover p {
                color: #00a2e1;
                text-decoration: #00a2e1 underline;
                }
                .panel-body-img a p {
                color: #000;
                }
                .panel-body-selection {
                display: flex;
                justify-content: space-between;
                text-align: left;
                }
                .filter-item-link {
                display: block;
                color: #000;
                }
                .filter-item-link:hover {
                color: #00a2e1;
                text-decoration: #00a2e1 underline;
                }
            `}
            </style>
            <nav className="nav-cate">
                <div className="nav-cate-container">
                    <a>
                        <img src={'../../static/img/logo.png'} alt="logo"/>>
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
                                    <img src={"../../static/img/glass_man.jpg" } alt="product"/>
                                    <p>MEN'S GLASSES</p>
                                </a>
                                <a href="#" className="">
                                    <img src={"../../static/img/glass_man.jpg" } alt="product"/>
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