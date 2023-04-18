import FoodBar from "./components/FoodBar/FoodBar";
import NavBar from "../common/components/NavBar/NavBar";
import FoodItems from "./components/FoodItems/FoodItems";
import FoodAppContext, {FoodContextProvider} from "./context/FoodAppContext";
import Modal from "../common/components/Modals/Modal/Modal";
import React, {useContext} from "react";

const FoodApp = () => {
    return (
        <FoodContextProvider>
            <FoodAppSub/>
        </FoodContextProvider>
    )
}

const FoodAppSub = () => {
    const {modalContent, setModalContent} = useContext(FoodAppContext)
    return (
        <>
            <Modal title={"Cart"} onClose={() => setModalContent(null)}>
                {modalContent}
            </Modal>
            <NavBar>
                <FoodBar/>
            </NavBar>
            <FoodItems/>
        </>
    )
}

export default FoodApp;