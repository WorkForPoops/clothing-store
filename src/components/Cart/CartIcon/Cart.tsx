import React, { FC } from "react";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { CartInitialStateType } from '../../../redux/cart-redux'

import style from './Cart.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));


type PropsType = {
    cart: CartInitialStateType
}

let Cart: FC<PropsType> = ({cart}) => {

    const classes = useStyles();

    // localStorage.setItem('items', JSON.stringify(cart.purchases))

    return (
        <div>
            {cart.count > 0 &&
            <div className={classes.root}>
                <div className="fixed-bottom">
                    <NavLink className="black-text float-right m-4" to="/shop-cart">
                        <Badge badgeContent={cart.count} color="secondary">
                            <ShoppingCartIcon style={{ fontSize: 40 }} className={style.pulse}/>
                        </Badge>
                    </NavLink>
                    {/* <span className={style.pulse}></span> */}
                </div>
            </div>
            }
        </div>

    );
}

export default Cart