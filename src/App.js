import './App.css';
import UserForm from "./components/Features/UserForm/UserForm";
import Card from "./components/UI/Card/Card";
import UserTable from "./components/Features/UserTable/UserTable";
import {useState} from "react";

function App() {

    const [users, setUsers] = useState([
        {
            age: 20,
            id: 1,
            username: "John Doe",
        },
        {
            age: 20,
            id: 2,
            username: "Jane Doe",
        },
        {
            age: 27,
            id: 3,
            username: "Satya Nalluri",
        },
    ]);
    //console.log(Object.values(users[0]))

    const addUser = (user) => {
        setUsers(prevState => {
            return [...prevState, user]
        })
    };
    return (
        <div>
            <UserForm getUser={(user) => addUser(user)}/>
            {users.length > 0 && <Card>
                <UserTable contents={users}/>
            </Card>}
        </div>
    );
}

export default App;
