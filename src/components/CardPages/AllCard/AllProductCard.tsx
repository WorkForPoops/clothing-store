import React, { FC } from "react";
import { MDBMask, MDBView, MDBCol } from "mdbreact";
import { NavLink } from "react-router-dom";

type PropsType = {
    link: string
    img: string
    name: string
}

let AllProductCard: FC<PropsType> = ({link, img, name}) => {
    return (
        <MDBCol md="4" className="mt-4">
            <MDBView hover>
                <NavLink to={link}>    
                    <img
                        src={img}
                        className="img-fluid"
                        alt={name}
                    />
                    <MDBMask className="flex-center" overlay="red-strong">
                        <h3 className="white-text">{name}</h3>
                    </MDBMask>
                </NavLink>
            </MDBView>    
        </MDBCol>
  )
}

export default AllProductCard