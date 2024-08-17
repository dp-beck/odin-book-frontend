import Comment from "./Comment";

export default function CommentList(props) {
    if (props.comments.length == 0) {
        return <div>Be the first to comment!</div>
    } else {
        return (
            <div>{props.comments[0].body}</div>
        )
    }
}