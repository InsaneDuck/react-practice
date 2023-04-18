import Card from "../../../common/components/Card/Card";
import {useContext} from "react";
import {FoodItem} from "../FoodItem/FoodItem";
import FoodAppContext from "../../context/FoodAppContext";

const FoodItems = () => {
    const temp = useContext(FoodAppContext)
    //console.log(foodItems)

    return (
        <Card>
            {temp.foodItems.map(foodItem =>
                <FoodItem
                    key={foodItem.id}
                    id={foodItem.id}
                    name={foodItem.name}
                    picture={foodItem.picture}
                    price={foodItem.price}
                    quantity={foodItem.quantity}
                />
            )}
        </Card>
    )
}

export default FoodItems;