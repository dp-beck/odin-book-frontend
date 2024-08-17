export default function CreatePost(props) {

    const sendPost = (e) => {
        try {
            fetch('http://localhost:3000/posts/create', {
                method: 'POST',
                body: JSON.stringify({
                    userId: props.user._id,
                    body: e.target[0].value,
                }),

                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
          
            }).then((res) => {
                // PUT STUFF HERE
            })

        } 
        catch {

        }
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        sendPost(e);

    }

    return (
        <>
            <h2>What's on your mind?</h2>
            <form onSubmit={handleSubmit} className="createPostForm">
                <label htmlFor="postBody"></label>
                <textarea name="postBody" id="postBody" rows="5" cols="30" />
        
                <input type="submit" value="Post" /> 
            </form>  
        </>
    )
}