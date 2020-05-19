import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import Container from '@material-ui/core/Container';

export default function BottomNavbar() {

  return (
    <div className="pt-4">

    <Container maxWidth="lg" className="pt-5">
      <MDBDropdownItem divider />
    </Container>

      <MDBContainer>
        <MDBRow className="mt-3">
          <MDBCol size="6">
            <MDBIcon far icon="envelope" /> some@email.ru
          </MDBCol>
          
          <MDBCol size="6">
            <MDBRow className="float-right">
              <MDBDropdown>
                <MDBDropdownToggle className="z-depth-0" size="sm" caret color="inherit">
                  My Account
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Action</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle className="z-depth-0" size="sm" caret color="inherit">
                  English
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Russian</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle className="z-depth-0" size="sm" caret color="inherit">
                  USD
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>EUR</MDBDropdownItem>
                  <MDBDropdownItem>RUB</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBRow>
          </MDBCol>          
        </MDBRow>

      </MDBContainer>

    </div>
  );
}