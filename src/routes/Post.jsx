import CommentList from "./CommentList";
import { useState } from "react";

export default function Post(props) {

    const [numberOfLikes, setNumberofLikes] = useState(props.likes.length);

    // Gotta make a fetch request post to update likes in db
    // TO DO: FIX -- Like I haven't wired up the bit that solves the problem of you know if you already liked it
    const addLike = () => {
        try {
            fetch(`http://localhost:3000/posts/${props.postId}/like`, {
                method: 'POST',
                body: JSON.stringify({
                    LikeId: props.user._id,
                }),

                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
          
            }).then((res) => {
                return res.json();
            })

        } 
        catch (error) {
            console.log(error);
        }
    }

    const updateNumberOfLikes = () => {
        setNumberofLikes(numberOfLikes+1);
    }

    const handleLikesButtonClick = () => {
        addLike();
        updateNumberOfLikes();
    }

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
                <button onClick={handleLikesButtonClick}>LIKE</button>
                # Likes: {numberOfLikes}
            </div>

            <CommentList 
                comments={props.comments}/>

        </div>
    );
}
