import React, { Component } from 'react';
import NavCate from '../nav-category/nav-cate'
import { Navbar, NavItem, MenuItem, NavDropdown,Nav } from 'react-bootstrap';

class NavG extends Component {

    render() {
    //   const navList = ['EYEGLASSES','SUNGLASSES',''];
      return (
        <header>
            <style global jsx>{`
            .glasses-title {
                color: #fff;
                font-size: 14px;
                margin: 0;
                }
                .glasses-title a {
                color: #fff!important;
                cursor: text;
                }
                nav {
                border: none;
                }
                .nav-filter {
                height: 50px;
                }
                .nav-b-container {
                float: left;
                }
                .nav-b-container li {
                position: relative;
                float: left;
                color: #fff;
                cursor: pointer;
                }
                .nav-b-container li:hover {
                background: #585858;
                }
                .nav-b-container li:hover .nav-b-hover {
                display: block;
                }
                .nav-b-container li .nav-b-hover {
                display: none;
                position: absolute;
                left: 0;
                cursor: text;
                top: 50px;
                background: #585858;
                width: 100px;
                height: 300px;
                }
                .glass-nav-static {
                height: 71px;
                background: #fff;
                }
                .nav-img {
                padding: 10px 0 0 0;
                box-sizing: content-box;
                }
                .nav-b-item a {
                padding: 25px 10px!important;
                }

            `}</style>
            <Navbar inverse collapseOnSelect fixedTop >
                <Navbar.Header className="col-sm-3">
                    <Navbar.Brand>
                        <NavDropdown eventKey={3} title="Currency:US Dollar" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated NavItemnk</MenuItem>
                        </NavDropdown>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav className="col-sm-9">
                    <NavItem className="glasses-title">Toll Free: 1-888-277-8308 | Email: service@firmoo.com</NavItem>
                    <Nav className="nav-b-container pull-right">
                        <NavItem>SIGN IN
                            <div className="nav-b-hover">

                            </div>
                        </NavItem>
                        <NavItem>Track Order
                            <div className="nav-b-hover">
                        
                            </div>
                        </NavItem>
                        <NavItem>HELP</NavItem>
                        <NavItem>
                            <i className="glyphicon glyphicon-shopping-cart"></i>
                            <span>(0)</span>
                        </NavItem>
                        <NavItem>
                            <i className="glyphicon glyphicon-heart"></i>
                        </NavItem>
                    </Nav>
                    
                </Nav>
            </Navbar>
            <div className="nav-filter"></div>
            <NavCate></NavCate>
        </header>
      );
    }
};
export default NavG

