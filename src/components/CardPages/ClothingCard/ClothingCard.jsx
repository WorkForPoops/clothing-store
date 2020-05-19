import React from "react"
import { MDBContainer, MDBDropdownItem, MDBRow } from "mdbreact"
import Container from '@material-ui/core/Container'
import CardDetail from './CardDetail'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { NavLink } from "react-router-dom"

let Tshirts = (props) => {

    let clothingNav = props.match.params.type
    let sex = props.match.params.sex
    let mainLink = ''
    let link = ''

    if(sex == 'men'){
        mainLink = 'mensProduct'
        switch(clothingNav) {
            case 't-shirts':
                link = 'mensTshirts'
                break
            case 'sweatshirts':
                link = 'mensSweatshirts'
                break
            case 'jeans':
                link = 'mensJeans'
                break
            case 'shorts':
                link = 'mensShorts'
                break
            case 'coats':
                link = 'mensCoats'
                break
            case 'shoes':
                link = 'mensShoes'
                break
            default:
                link = null;
        }
    }else if(sex == 'women'){
        mainLink = 'womensProduct'
        switch(clothingNav) {
            case 't-shirts':
                link = 'womensTshirts'
                break
            case 'sweatshirts':
                link = 'womensSweatshirts'
                break
            case 'jeans':
                link = 'womensJeans'
                break
            case 'shorts':
                link = 'womensShorts'
                break
            case 'coats':
                link = 'womensCoats'
                break
            case 'shoes':
                link = 'womensShoes'
                break
            default:
                link = null;
        }
    }

    let productElements = props[mainLink][link].map( card => <CardDetail key={card.id} id={card.id} name={card.name} firstImg={card.firstImg} secondImg={card.secondImg} thirdImg={card.thirdImg} cost={card.cost} description={card.description} link={card.link}/> )
    
    return (
    <div>
        <Container maxWidth="lg">
            <MDBDropdownItem divider />
        </Container>
        <MDBContainer>
            <h5 className="mb-3 mt-3"><NavLink to={`/${sex}/all`} className="black-text text-capitalize" style={{ borderBottom: '1px solid black' }}>{sex} </NavLink><ArrowForwardIosIcon style={{ fontSize: 15 }}/> {clothingNav}</h5>
            <MDBRow>
                { productElements }
            </MDBRow>
        </MDBContainer>
    </div>
  )
}

export default Tshirts