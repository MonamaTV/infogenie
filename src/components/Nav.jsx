import React from "react";
import { Outlet } from "react-router";
import { PrivateRoute } from "./ProtectedRoute";

const Nav = () => {
  return (
    <div className="bg-blue-100">
      <nav className="flex py-4 px-10 flew-col gap-x-5">
        <h2 className=" text-blue-700 font-bold">
          Info<span className="text-yellow-400">GENIE</span>
        </h2>
      </nav>
      <PrivateRoute redirectPath={"/auth"}>
        <Outlet />
      </PrivateRoute>
    </div>
  );
};

export default Nav;
