import React, {useContext} from "react";
import FoodAppContext from "../../context/FoodAppContext";

const CartModal = () => {
    const {cart} = useContext(FoodAppContext)
    return (
        <div>
            {cart.toString()}
        </div>
    )
}

export default CartModal