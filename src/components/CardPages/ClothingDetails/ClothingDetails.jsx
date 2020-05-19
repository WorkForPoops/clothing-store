import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBCol, MDBRow, MDBDropdownItem, MDBBtn, MDBIcon } from "mdbreact";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

export default function MensTshirtCard(props) {
    let state = '';
    let sex = props.match.params.sex
    let type = props.match.params.type
    let adrId = props.match.params.id

    if(`${sex} ${type}` == 'men ts') {
        state = props.mensProduct.mensTshirts.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'men sw'){
        state = props.mensProduct.mensSweatshirts.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'men js'){
        state = props.mensProduct.mensJeans.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'men sh'){
        state = props.mensProduct.mensShorts.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'men cs'){
        state = props.mensProduct.mensCoats.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'men ss'){
        state = props.mensProduct.mensShoes.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'women ts') {
        state = props.womensProduct.womensTshirts.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'women sw'){
        state = props.womensProduct.womensSweatshirts.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'women js'){
        state = props.womensProduct.womensJeans.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'women sh'){
        state = props.womensProduct.womensShorts.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'women cs'){
        state = props.womensProduct.womensCoats.filter(s => s.id == adrId);
    }else if(`${sex} ${type}` == 'women ss'){
        state = props.womensProduct.womensShoes.filter(s => s.id == adrId);
    }

    let subject = state[0];

    let startColor = '';
    let setStartColor = () => {
        for(let key in subject.color){
            startColor = subject.color[key];
            break;
        }
    }
    setStartColor();

    let optionColors = [];

    let setOptionColors = () => {
        Object.keys(subject.color).forEach(function(key) {
            optionColors.push(this[key].color);
        }, subject.color);
    }

    let optionSizes = [];

    let setOptionSizes = () => {
        for(let key in subject.size){
            optionSizes.push(key);
        }
    }
    setOptionSizes();

    const [valueColor, setValueColor] = React.useState(startColor.color);
    let setSize = '';
    const handleChangeColor = (event) => {
        activateEditMode(event.target.value);
        setValueColor(event.target.value);
    };

    const [valueSize, setValueSize] = React.useState(optionSizes[0]);

    const handleChangeSize = (event) => {
        setValueSize(event.target.value);
        setSize = event.target.value;
    };

    setOptionColors();

    let [editMode, setEditMode] = useState(startColor);
    let setColor = '';
    const activateEditMode = (event) => {
        setEditMode(subject.color[event])
        setColor = subject.color[event];
    }

    let onSetItem = (img, name, size, color, price, id) => {
        props.setItem(img, name, size, color, price, id);
    }


    return (
        <div>
        <Container maxWidth="lg">
            <MDBDropdownItem divider />
        </Container>
        <MDBContainer>
            <h5 className="mb-3 mt-3 text-capitalize"><NavLink to={`/${sex}/all`} className="black-text" style={{ borderBottom: '1px solid black' }}>{sex} </NavLink><ArrowForwardIosIcon style={{ fontSize: 15 }}/> <NavLink to={`/${sex}/clothes/${subject.mainLink}`} className="black-text" style={{ borderBottom: '1px solid black' }}>{subject.mainLink} </NavLink> <ArrowForwardIosIcon style={{ fontSize: 15 }}/> {subject.name}</h5>
            <MDBRow className="mt-4">
                <MDBCol md="6">
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
                                    <img
                                        className="d-block w-100"
                                        src={editMode.firstImg}
                                        alt="First slide"
                                    />                
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={editMode.secondImg}
                                        alt="Second slide"
                                    />                
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="d-block w-100"
                                        src={editMode.thirdImg}
                                        alt="Third slide"
                                    />                
                                </MDBView>
                            </MDBCarouselItem>
                            </MDBCarouselInner>
                        </MDBCarousel>
                </MDBCol>
                <MDBCol md="6">
                    <h3>{subject.name}</h3>
                    <p>{subject.description}</p>
                    <h3>{subject.cost} $</h3>
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Choose color:</FormLabel>
                            <RadioGroup aria-label="color" name="color1" value={valueColor} onChange={handleChangeColor}>
                                { optionColors.map( color => <FormControlLabel value={color} control={<Radio />} label={color} /> ) }
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Select your size:</FormLabel>
                            <RadioGroup row aria-label="size" name="size1" value={valueSize} onChange={handleChangeSize}>
                                { optionSizes.map( size => <FormControlLabel className="text-uppercase" value={size} control={<Radio />} label={size} /> ) }
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <MDBBtn md="12" color="elegant" onClick={ () => { onSetItem(subject.color[valueColor].firstImg, subject.name, valueSize, valueColor, subject.cost, subject.id) } }>Add to basket</MDBBtn>
                    <p className="mt-3"><MDBIcon icon="truck" /> Free home deliveryon all your ordersfrom £20</p>
                    <p><MDBIcon icon="exchange-alt" /> Returns extendedto 30 days from the reopening of stores.</p>
                    <p><MDBIcon far icon="clock" /> Delivery may take a littlelonger than usual due to the current situation</p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
  );
}

