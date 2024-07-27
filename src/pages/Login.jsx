import React, { useEffect, useState } from "react";
import login from "../services/authentication";
import useLogin from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="w-screen flex h-[100vh] flex-row justify-between items-center">
      <form
        className="w-1/2 container flex flex-col justify-center items-center"
        action=""
      >
        <h2 className="my-4 text-blue-700 font-bold">
          Info<span className="text-yellow-400">GENIE</span>
        </h2>
        <small className="text-xs">
          Easy way to handle your customers' needs
        </small>
        <div className=" my-2 w-1/2 flex flex-col ">
          <label className="text-sm" htmlFor="">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="py-1 px-2 border w-full outline-none my-2 rounded-sm"
            type="text"
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <label className="text-sm" htmlFor="">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-1 px-2 border w-full outline-none my-2 rounded-sm"
            type="password"
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <button
            disabled={isLoading}
            onClick={handleLogin}
            className="bg-blue-500 rounded-sm text-white py-2 block text-sm "
          >
            {isLoading ? "Submitting" : "Sign in"}
          </button>
        </div>
        <div className="w-1/2 flex flex-col">
          <a
            href="/auth/register"
            className="text-xs text-slate-900 my-2 underline"
          >
            Register your business
          </a>
        </div>
      </form>
      <img className="w-1/2 h-[100vh] object-cover" src="/login.jpg" alt="" />
    </div>
  );
};

export default Login;
