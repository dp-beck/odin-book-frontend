export default function Comment(props) {
    return (
        <div style={{border: '1px solid black'}}>
            <div className="commentAuthor">
                <p>{props.commentAuthor} comments ...</p>
            </div>
            
            <div className="commentBody">
                <p>{props.commentBody}</p>
=            </div>

        </div>
    );
}
