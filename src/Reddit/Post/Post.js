import Card from "../../common/components/Card/Card";

const Post = ({post}) => {
    return (
        <Card>
            <p>{post.id}</p>
            <p>{post.subreddit}</p>
            <p>{post.title}</p>
            <p>{post.selftext}</p>
            <img src={post.url} alt={`image`}/>
        </Card>
    )
};

export default Post;