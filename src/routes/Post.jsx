import CommentList from "./CommentList";

export default function Post(props) {

    return (
        <div style={{border: '1px solid black'}}>
            <div className="postAuthor">
                <img src={props.authorPhoto} height={50} />
                <p>{props.author} wrote ...</p>
            </div>
            
            <div className="postBody">
                <p>{props.body}</p>
                <p>{props.time}</p>
            </div>

            <div>
                <button>LIKE</button>
                # Likes: {props.likes.length}
            </div>

            <CommentList 
                comments={props.comments}/>

        </div>
    );
}
