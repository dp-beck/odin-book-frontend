import CommentList from "./CommentList";
import { useState } from "react";

export default function Post(props) {

    const [numberOfLikes, setNumberofLikes] = useState(props.likes.length);

    const addLike = () => {
        try {
            fetch(`http://localhost:3000/posts/${props.postId}/like`, {
                method: 'POST',
                body: JSON.stringify({
                    likerId: props.userId,
                }),

                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
          
            }).then((res) => {
                return res.json();
            }).then((data) => {
                if (!data.alreadyLiked) {
                    updateNumberOfLikes();
                    console.log(data.msg);
                }
            })

        } 
        catch (error) {
            console.log(error);
        }
    }

    const updateNumberOfLikes = () => {
        setNumberofLikes(numberOfLikes+1);
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
                <button onClick={addLike}>LIKE</button>
                # Likes: {numberOfLikes}
            </div>

            <CommentList 
                comments={props.comments}/>

        </div>
    );
}