import React, {createContext, useState} from "react";

const FoodAppContext = createContext({
    foodItems: [],
    cart: [],
    addToCart: (foodItem) => {
    }
})

export const FoodContextProvider = ({children}) => {
    const [food, setFoodItems] = useState([
        {
            id: 1,
            name: "Burger",
            picture: "https://unsplash.com/photos/sc5sTPMrVfk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxNTgwMDMz&force=true",
            price: 9.99,
        },
        {
            id: 2,
            name: "Pizza",
            picture: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
            price: 11.99,
        },
        {
            id: 3,
            name: "Biryani",
            picture: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
            price: 14.99,
        },
        {
            id: 4,
            name: "Chicken 65",
            picture: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/rimmy-bindra20170714211245319.jpeg",
            price: 8.99,
        },
        {
            id: 5,
            name: "BBQ Wings",
            picture: "https://www.homecookingadventure.com/wp-content/uploads/2022/01/bbq_chicken_wings_main.jpg",
            price: 14.99,
        },
    ])

    const [cart, setCart] = useState([])
    const [modalContent, setModalContent] = useState(null)

    const addToCart = (foodItem) => {
        const item = cartHasItem(cart, foodItem)
        console.log(item)
        setCart(item)
    }

    return (
        <FoodAppContext.Provider
            value={{
                foodItems: food,
                cart: cart,
                addToCart: addToCart,
                modalContent: modalContent,
                setModalContent: setModalContent
            }}>
            {children}
        </FoodAppContext.Provider>)

}
const cartHasItem = (cart, foodItem) => {
    const cartItem = cart.find(obj => obj.id === foodItem.id)
    if (cartItem) {
        foodItem.quantity = cartItem.quantity + foodItem.quantity
        return [...cart.filter(obj => obj.id !== foodItem.id), foodItem]
    } else {
        return [...cart, foodItem]
    }
}
export default FoodAppContext