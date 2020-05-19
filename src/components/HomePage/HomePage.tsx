import React from "react";
import { MDBView, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import mansLink from '../../assets/images/mansLink.png'
import watchLink from '../../assets/images/watchLink.png'
import hatsLink from '../../assets/images/hatsLink.png'
import womensLink from '../../assets/images/womensLink.png'
import snikersLink from '../../assets/images/snikersLink.png'
import Slider from "../utils/Slider/Slider";

export default function HomePage() {

    return (
        <div>
            <Slider />
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol md="4">
                        <MDBRow>
                            <MDBCol md="12">
                                <MDBView hover zoom>
                                    <MDBNavLink to="/men/all"><img src={mansLink} className="img-fluid" alt="" /></MDBNavLink>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                                <MDBView hover zoom>
                                    <MDBNavLink to="/men/clothes/shoes"><img src={snikersLink} className="img-fluid mt-2" alt="" /></MDBNavLink>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="8">
                        <MDBRow>
                            <MDBCol md="5" sm="12">
                                <MDBView hover zoom>
                                    <MDBNavLink to="#!"><img src={watchLink} className="img-fluid" alt="" /></MDBNavLink>
                                </MDBView>
                            </MDBCol>
                            <MDBCol md="5" sm="12">
                                <MDBView hover zoom>
                                    <MDBNavLink to="#!"><img src={hatsLink} className="img-fluid mb-3" alt="" /></MDBNavLink>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="10" sm="12" className="mt-4">
                                <MDBView hover zoom>
                                    <MDBNavLink to="/women/all"><img src={womensLink} className="img-fluid" alt="" /></MDBNavLink>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>

  );
}
