import React from "react";

const Login = () => {
  return (
    <div className="container h-screen w-screen flex flex-row justify-center items-center">
      <form className="w-1/2" action="">
        <div>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Username</label>
          <input type="password" />
        </div>
      </form>
      <img className="w-1/2" src="./login.jpg" alt="" />
    </div>
  );
};

export default Login;
