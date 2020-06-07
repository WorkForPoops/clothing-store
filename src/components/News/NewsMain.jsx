import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView,
  MDBMask
} from "mdbreact";

export default function NewsMain(props) {
    
    let arr = props.arr

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
  
    shuffle(arr)

    return (
        <MDBContainer className="mt-5">
            <MDBRow className="mb-4">
                <MDBCol md="3">
                    <MDBView zoom >
                        <img
                            className="d-block w-100"
                            src={arr[0].img}
                            style={{borderRadius: 10+'px'}}
                            />
                        <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                            <h6 className="white-text font-weight-bolder p-3">{arr[0].text}</h6>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="3">
                    <MDBView zoom >
                        <img
                            className="d-block w-100"
                            src={arr[1].img}
                            style={{borderRadius: 10+'px'}}
                            />
                        <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                            <h6 className="white-text font-weight-bolder p-3">{arr[1].text}</h6>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="3">
                    <MDBView zoom >
                        <img
                            className="d-block w-100"
                            src={arr[2].img}
                            style={{borderRadius: 10+'px'}}
                            />
                        <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                            <h6 className="white-text font-weight-bolder p-3">{arr[2].text}</h6>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="3">
                    <MDBView zoom >
                        <img
                            className="d-block w-100"
                            src={arr[3].img}
                            style={{borderRadius: 10+'px'}}
                            />
                        <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                            <h6 className="white-text font-weight-bolder p-3">{arr[3].text}</h6>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
                <MDBCol md="3">
                    <MDBView zoom >
                        <img
                            className="d-block w-100"
                            src={arr[4].img}
                            style={{borderRadius: 10+'px'}}
                            />
                        <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                            <h6 className="white-text font-weight-bolder p-3">{arr[4].text}</h6>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="3">
                    <MDBView zoom >
                        <img
                            className="d-block w-100"
                            src={arr[5].img}
                            style={{borderRadius: 10+'px'}}
                            />
                        <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                            <h6 className="white-text font-weight-bolder p-3">{arr[5].text}</h6>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="3">
                    <MDBView zoom >
                        <img
                            className="d-block w-100"
                            src={arr[6].img}
                            style={{borderRadius: 10+'px'}}
                            />
                        <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                            <h6 className="white-text font-weight-bolder p-3">{arr[6].text}</h6>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
                <MDBCol md="3">
                    <MDBView zoom >
                        <img
                            className="d-block w-100"
                            src={arr[7].img}
                            style={{borderRadius: 10+'px'}}
                            />
                        <MDBMask style={{borderRadius: 10+'px'}} className="d-flex align-items-end" overlay="black-light">
                            <h6 className="white-text font-weight-bolder p-3">{arr[7].text}</h6>
                        </MDBMask>
                    </MDBView>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}