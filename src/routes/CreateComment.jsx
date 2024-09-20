import { useState } from "react";
export default function CreateComment(props) {

    const [newCommentId, setNewCommentId] = useState();

    const sendComment = (e) => {
        try {
            fetch('http://localhost:3000/comments/create', {
                method: 'POST',
                body: JSON.stringify({
                    userId: props.userId,
                    body: e.target[0].value,
                    postId: props.postId
                }),

                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
          
            }).then((res) => {
                return res.json();
            }).then((data) => {
                UpdatePostWithComment(data._id);
                window.location.reload();
            })

        } 
        catch (error) {
            console.log(error);
        }
    }

    const UpdatePostWithComment = (commentId) => {
        try {
            fetch(`http://localhost:3000/posts/${props.postId}/comment`, {
                method: 'POST',
                body: JSON.stringify({
                    commentId: commentId
                }),

                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },

            }).then((res) => {
                return res.json();
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendComment(e);
        UpdatePostWithComment();
    }

    return (
        <>
            <h2>What do you think?</h2>
            <form onSubmit={handleSubmit} className="createCommentForm">
                <label htmlFor="commentBody"></label>
                <textarea name="commentBody" id="commentBody" rows="2" cols="30" />
        
                <input type="submit" value="Post" /> 
            </form>  
        </>
    )
}