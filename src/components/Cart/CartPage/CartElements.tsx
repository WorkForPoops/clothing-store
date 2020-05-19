import React, { FC } from 'react';
import { MDBTableBody, MDBBtn } from 'mdbreact';

type PropsType = {
    size: string
    color: string
    img: string
    price: number
    name: string
    id: number
    deleteItemAC: (id: number, price: number) => void
}

const CartElements: FC<PropsType> = ({size, color, img, price, name, id, deleteItemAC}) => {


    return (
        
           
            <MDBTableBody>
                <tr>
                    <td> <img src={img} className="img-fluid" style={{height: '10%'}} /> {name}</td>
                    <td className="align-middle">{size}</td>
                    <td className="align-middle">{color}</td>
                    <td className="align-middle">{price}</td>
                    <td className="align-middle">    
                        <MDBBtn color="danger" size="sm" onClick={() => deleteItemAC(id, price)}>
                            Delete
                        </MDBBtn>
                    </td>
                </tr>
            </MDBTableBody>
        
    );
}

export default CartElements;