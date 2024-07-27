import React from "react";

const Register = () => {
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
            Business number
          </label>
          <input
            className="py-1 px-2 border w-full outline-none my-2 rounded-sm"
            type="text"
          />
        </div>

        <div className="w-1/2 flex flex-col">
          <button className="bg-blue-500 rounded-sm text-white py-2 block text-sm ">
            Register
          </button>
        </div>
        <div className="w-1/2 flex flex-col">
          <a href="/auth" className="text-xs text-slate-900 my-2 underline">
            Log into your business account
          </a>
        </div>
      </form>
      <img
        className="w-1/2 h-[100vh] object-cover"
        src="/register.jpg"
        alt=""
      />
    </div>
  );
};

export default Register;
