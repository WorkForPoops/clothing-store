import React, { FC } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';
import CartElements from './CartElements';
import { CartInitialStateType } from '../../../redux/cart-redux';

type PropsType = {
    cart: CartInitialStateType
    deleteItemAC: (id: number, price: number) => void
}

const CartPage: FC<PropsType> = ({cart, deleteItemAC}) => {

    let cartElements = cart.purchases.map( cart => <CartElements key={cart.id} id={cart.id} name={cart.name} size={cart.size} img={cart.img} color={cart.color} price={cart.price} deleteItemAC={deleteItemAC}/> )

    return (
        <MDBContainer>
            { cart.count > 0 ? 
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </MDBTableHead>
                { cartElements }
                <h3 className="mt-4">Final cost: { cart.finalCost.toFixed(2) }</h3>
            </MDBTable>
            :
            <div>
                <h3 className="text-center m-5">Your shopping cart is empty</h3>
            </div>
            }
        </MDBContainer>
    );
}

export default CartPage;