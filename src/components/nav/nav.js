import React, { Component } from 'react';
import './nav.css';
import NavCate from '../nav-category/nav-cate'
import { Navbar, NavItem, MenuItem, NavDropdown,Nav } from 'react-bootstrap';

class NavG extends Component {

    render() {
    //   const navList = ['EYEGLASSES','SUNGLASSES',''];
      return (
        <header>
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

