import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Post from "./Post";
import CreatePost from "./CreatePost";

export default function Index() {
  const user = useOutletContext();
  const [userList, setUserList] = useState([]);
  const [postList, setPostList] = useState([]);

  // Get list of users
  useEffect(() => {
      fetch('http://localhost:3000/users')
          .then((res) => {
              return res.json();
          })
          .then((data) => {
              const userList = data.filter((entry) => entry.userName !== user.userName);
              setUserList(userList);
          })
  }, []);

  // Get List of Posts
  useEffect(() => {
    fetch('http://localhost:3000/posts')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setPostList(data);
            console.log(data);
        })
  }, []);

// FETCH CALL FOR SUBMITTING A POST

    return (
      <>
        <div>
          <CreatePost user={user}/>
        </div>
        <div> 
          <h2>ALL POSTS</h2>
          {/* Get a list of posts and Map through them */}
          <ul className="postList">
            {postList.map((post) => (
              <li key={post._id}>
                <Post 
                  author={post.author.userName} 
                  authorPhoto={post.author.profilePhotoUrl} 
                  body={post.body}
                  time={post.createdAt} 
                  likes={post.likes}
                  comments={post.comments}/>
              </li>
            ))}
          </ul>
        </div>
        <div>SEARCH TOO FOR FINDING A NEW FRIEND</div>
      </>
    );
  }
  