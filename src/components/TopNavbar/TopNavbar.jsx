import React, { Component } from "react"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBContainer } from "mdbreact"

class TopNavbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBContainer>
          <MDBNavbar color="white" className="z-depth-0 fixed-top" scrolling expand="md">
          <MDBContainer>
            <MDBNavbarBrand>
              <strong className="black-text">Logo</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink className="black-text" to="/home">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret className="black-text">
                      <span className="mr-2">Men</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBNavLink to="/men/all">All</MDBNavLink>
                      <MDBNavLink to="/men/clothes/t-shirts">T-Shirts</MDBNavLink>
                      <MDBNavLink to="/men/clothes/sweatshirts">Sweatshirts</MDBNavLink>
                      <MDBNavLink to="/men/clothes/jeans">Jeans</MDBNavLink>
                      <MDBNavLink to="/men/clothes/shorts">Shorts</MDBNavLink>
                      <MDBNavLink to="/men/clothes/coats">Coats</MDBNavLink>
                      <MDBNavLink to="/men/clothes/shoes">Shoes</MDBNavLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret className="black-text">
                      <span className="mr-2">Women</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBNavLink to="/women/all">All</MDBNavLink>
                      <MDBNavLink to="/women/clothes/t-shirts">T-Shirts</MDBNavLink>
                      <MDBNavLink to="/women/clothes/sweatshirts">Sweatshirts</MDBNavLink>
                      <MDBNavLink to="/women/clothes/jeans">Jeans</MDBNavLink>
                      <MDBNavLink to="/women/clothes/shorts">Shorts</MDBNavLink>
                      <MDBNavLink to="/women/clothes/coats">Coats</MDBNavLink>
                      <MDBNavLink to="/women/clothes/shoes">Shoes</MDBNavLink>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBNavLink className="black-text" to="#!">Accessories</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active>
                  <MDBNavLink className="black-text" to="/contact">Contact</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className="md-form my-0">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
       </MDBContainer>
      );
    }
}

export default TopNavbar;