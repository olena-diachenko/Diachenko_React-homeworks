const PostItem = (props) => (
        <li className="posts_single-post" data-post-id={props.id}>
            <h3 className="posts__post-title">{props.title}</h3>
            <p className="posts__post-description">{props.body}</p>
        </li>
    )

PostItem.defaultProps = {
    id: 1,
    title: "Post title",
    body: "Body content"
}

export default PostItem;