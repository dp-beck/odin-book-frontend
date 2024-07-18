export default function SignIn() {
  
  return (
    <>
        <h1>Odin Book</h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Welcome to the Odin Book, the world's coolest fake social media app</p>
        <form className='login_form'>

          <h2>Welcome Back!</h2>
          <label htmlFor="user_name">Username:</label>
          <input type="text" name="user_name" id="user_name" />
  
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
  
          <input type="submit" value="Log In" />

        </form>

        <p>Not a user, yet? To create a new account, <a href="http://" target="_blank" rel="noopener noreferrer">click here</a> </p>
    </>
  );
}
