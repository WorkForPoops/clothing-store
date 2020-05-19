import React from "react"
import { MDBContainer, MDBDropdownItem, MDBRow } from "mdbreact"
import Container from '@material-ui/core/Container'
import AllProductCard from './AllProductCard'

let All = (props) => {
    let link
    let sex = props.match.params.sex

    switch(sex) {
        case 'men':
            link = 'mensProduct'
            break
        case 'women':
            link = 'womensProduct'
            break
        default:
            link = ''
    }

    let productElements = props[link].map( card => <AllProductCard key={card.id} id={card.id} name={card.name} img={card.img} link={card.link}/> )

    return (
        <div>
            <Container maxWidth="lg">
                <MDBDropdownItem divider />
            </Container>
            <MDBContainer>
                <h4 className="mb-3 mt-3">{sex}</h4>
                <MDBRow>
                    { productElements }
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default All