import {useEffect, useState} from "react";
import getUrl from "../PostData";
import Post from "./Post";

const Posts = () => {
    const [posts,setPosts] = useState([]);

    useEffect( () => {
        console.log("Hello")
        fetchData(setPosts).catch(console.error);
    },[])

    return (
        <>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </>
    )
};

const fetchData = async (setterFunction) => {

    const url = getUrl();
    const headers = {};
    const response = await fetch(url, {headers});
    const json = await response.json()
    const postData = json.data.children.map(post => post.data)
    console.log(postData)
    setterFunction(postData)
}

export default Posts;