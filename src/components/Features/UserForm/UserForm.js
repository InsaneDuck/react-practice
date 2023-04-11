import React, {useState} from "react";
import Input from "../../UI/Input/Input";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

const UserForm = ({getUser}) => {
    const [user, setUser] = useState(
        {
            username: "",
            age: ""
        })

    let valueChangeListener = (value, key) => {
        setUser(prevState => ({
            ...prevState,
            [key]: value,
        }))
    };

    const onSubmit = (event) => {
        event.preventDefault();
        getUser({...user, id: Math.random()})
    }

    return (
        <Card>
            <form onSubmit={onSubmit}>
                <Input label={"Username"} type={"text"} name={"username"} id={"username"}
                       onChange={(value) => valueChangeListener(value, "username")}/>
                <Input label={"Age (years)"} type={"number"} name={"age"} id={"age"}
                       onChange={(value) => valueChangeListener(value, "age")}/>
                <Button type={"submit"}>Add User</Button>
            </form>
        </Card>
    )
}

export default UserForm;