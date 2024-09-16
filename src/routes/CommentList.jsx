import Comment from "./Comment";

export default function CommentList(props) {

    const displayComments = props.comments.map((comment) => {
        return <li key={comment._id}>
                    <Comment 
                        commentId={comment._id}
                        commentBody={comment.body} 
                        commentAuthor={comment.author.userName}
                    />
                </li>
    });

    if (props.comments.length == 0) {
        return (
            <div>
                <p>Be the first to comment!</p>
            </div>
        )
    } else {
        return (
            <>
                <ul className="commentList">
                    {displayComments}
                </ul>
            </>
            
        )
    }
}