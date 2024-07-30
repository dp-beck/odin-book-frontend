// Figure Out How to Upload a photo now

import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function SignUp() {
    const [userCreated, setUserCreated] = useState(false);
    const [signupErrors, setSignupErrors] = useState([]);

    const createUser = (formData) => {
      try {
        fetch('http://localhost:3000/users/signup', {
              method: 'POST',
              body:  formData
            }).then((res) => {
              return res.json();
            }).then((data) => {
              if (data.errors) {
                setSignupErrors(data.errors);
              } else {
                setUserCreated(true);
              }
            })
          } catch (error) {
            console.error('Fetch', error);
          }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); 
        createUser(formData); 
    }

    return (
        <div className="signup">
            <h1> Odin Book </h1>
                <form onSubmit={handleSubmit} className="signup_form">
                    <h2>Sign Up!</h2>
                    <div className="signup_entry">
                      <label htmlFor="userName">Username:</label>
                      <input type="text" name="userName" id="userName" />
                    </div>
                    
                    <div className="signup_entry">
                      <label htmlFor="password">Password:</label>
                      <input type="password" name="password" id="password" />
                    </div>

                    <div className="signup_entry">
                      <label htmlFor="firstName">First Name:</label>
                      <input type="text" name="firstName" id="firstName" />
                    </div>

                    <div className="signup_entry">                    
                      <label htmlFor="lastName">Last Name:</label>
                      <input type="text" name="lastName" id="lastName" />
                    </div>
                    
                    <div className="signup_entry">
                      <label htmlFor="email">Email:</label>
                      <input type="email" name="email" id="email" rows="5" cols="20" />
                    </div>
                    
                    <div className="signup_entry">
                      <label htmlFor="aboutMe">About Me:</label>
                      <textarea name="aboutMe" id="aboutMe" />
                    </div>

                    <div className="signup_entry">
                        <label htmlFor="image">Profile Photo: </label>
                        <input type="file" name="image" id="image" />
                    </div> 
                  

                    <input type="submit" value="Submit" />
                </form>
                <ul>
                  {signupErrors.map(error => <li className="signupErrors" key={signupErrors.indexOf(error)}>{error.msg}</li>)}
                </ul>
                {userCreated && <Navigate to='/sign-in' replace={true}/>}
        </div>
    )
}
