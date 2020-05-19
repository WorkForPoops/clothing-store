import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCol } from "mdbreact";
import { NavLink } from "react-router-dom";

export default function MensTshirtCard(props) {
  return (
    <MDBCol md="4" className="mt-4">
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <NavLink to={props.link}>
                                <img
                                    className="d-block w-100"
                                    src={props.firstImg}
                                    alt="First slide"
                                />
                            </NavLink>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <NavLink to={props.link}>
                                <img
                                    className="d-block w-100"
                                    src={props.secondImg}
                                    alt="Second slide"
                                />
                            </NavLink>
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <NavLink to={props.link}>
                                <img
                                    className="d-block w-100"
                                    src={props.thirdImg}
                                    alt="Third slide"
                                />
                            </NavLink>
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <p className="text-center mt-3">{props.cost}$</p>
        </MDBContainer>
    </MDBCol>
  );
}