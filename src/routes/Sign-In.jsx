import { useState } from "react";
import { Navigate, Link } from 'react-router-dom';

const wrongInfoMsgStyle = {
  color: 'red',
  fontWeight: 600,
};

export default function SignIn() {

  const [user, setUser] = useState();
  const [wrongInfoMsg, setWrongInfoMsg] = useState(false);
  
  const loginUser = (e) => {
    try {
      fetch('http://localhost:3000/users/login', {
        method: 'POST',
        body: JSON.stringify({
        userName: e.target[0].value,
        password: e.target[1].value,
        }),

        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },

      }).then((res) => {
        if (res.ok) {
         return res.json();
        } else {
          if (res.status === 400) {setWrongInfoMsg(true);}
          if (res.status === 404) throw new Error('404, Not found');
          if (res.status === 500) throw new Error('500, internal server error');
          throw new Error(res.status);
        }
      }).then((data) => {
        setUser(e.target[0].value);
        localStorage.setItem('token', data.token);
      })
      }
    catch (error) {
      console.error('Fetch', error);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(e);
  }
  
  return (
    <>
        <h1>Odin Book</h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Welcome to the Odin Book, the world's coolest fake social media app</p>
        <form onSubmit={handleSubmit} className='login_form'>

          <h2>Welcome Back!</h2>
          <label htmlFor="user_name">Username:</label>
          <input type="text" name="user_name" id="user_name" />
  
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
  
          <input type="submit" value="Log In" />

        </form>

        {wrongInfoMsg && (<p style={wrongInfoMsgStyle}>Wrong username or password entered.</p>)}

        <p>Not a user, yet? To create a new account, <Link to='/signup'>Sign up here</Link> </p> 

        {user && (<Navigate to='/' replace={true} />)}
    </>
  );
}
