import React from "react";
import PostItem from "../PostItem.jsx";
import "./PostCatalog.css";

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    handleClick = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
        const arr = [...this.state.posts, ...res]
        this.setState({
            posts: arr
        })
    }

    render () {

        return (
            this.state.posts.length !== 0 ? (
                    <div className="posts">
                        <ul className="posts__list">
                            {this.state.posts.map(({id, title, body}) =>
                                <PostItem id={id} title={title} body={body} key={id}/>
                            )}
                        </ul>
                    </div>
                ) : (
                    <div className="btn-wrap">
                        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Show posts</button>
                    </div>
                )
        )
    }
}

export default PostCatalog;