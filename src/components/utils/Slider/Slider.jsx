import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask,  MDBIcon } from "mdbreact";
import Container from '@material-ui/core/Container';
import sliderOne from '../../../assets/images/sliderOne.png';
import { NavLink } from "react-router-dom";

export default function Slider() {
  return (
    <Container maxWidth="lg" className="pt-3">
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      className="pt-4"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="First slide"
            />
          <MDBMask />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive float-left text-uppercase" style={{backgroundColor: "black"}}>New colletcion</h3>
            <br />
            <br />
            <h2 className="h2-responsive float-left black-text text-uppercase">Up to <span className="light-green-text font-weight-bolder">50% of</span></h2>
            <br />
            <br />
            {/* <p className="float-left">Shop now</p> */}
            <NavLink className="black-text float-left" to="/women/all">Shop now <MDBIcon icon="long-arrow-alt-right" /></NavLink>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Some text</h3>
            <p>Some text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={sliderOne}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Some text</h3>
            <p>Some text</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </Container>
  );
}