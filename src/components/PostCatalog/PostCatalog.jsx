import {useState, useEffect} from "react";
import PostItem from "../PostItem.jsx";
import "./PostCatalog.css";

const PostCatalog = (props) => {

    const [posts, setPosts] = useState([])
    const controller = new AbortController();
    const {signal} = controller;

    const handleClick = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {signal})
            .then((response) => response.json())
        const arr = [...posts, ...res];
        setPosts(arr);
    };

    useEffect(() => () => {
            controller.abort();
        }, [])

    return (
        posts.length !== 0 ? (
                <div className="posts">
                    <ul className="posts__list">
                        {posts.map(({id, title, body}) =>
                            <PostItem id={id} title={title} body={body} key={id}/>
                        )}
                    </ul>
                </div>
            ) : (
                <div className="btn-wrap">
                    <button type="button" className="btn btn-primary" onClick={handleClick}>Show posts</button>
                </div>
        )
    )
}

export default PostCatalog;