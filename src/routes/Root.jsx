import "../App.css";
import { Outlet } from "react-router-dom";

export default function Root() {

  return (
    <>
      <header>
        <h1>Odin Book</h1>
        
        <ul id="nav-bar">
          <li><a href="/">Home</a></li>
          <li><a href="/">Settings</a></li>
          <li><a href="/">Personal Profile</a></li>
          <li><a href="/">Friend Requests</a></li>
          <li><a href="/">Log Out</a></li>
      </ul>
      </header>
      <main>
        <Outlet />
      </main>
      
    </>
  );
}
