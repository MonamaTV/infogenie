import React from "react";

const User = () => {
  return (
    <div className="cursor-pointer flex flex-col px-1 py-2 rounded-sm">
      <div className="flex flex-row items-start justify-between">
        <div>
          <h3 className="size-10 text-white bg-red-400 rounded-full flex items-center justify-center">
            M
          </h3>
        </div>
        <div className="mx-3 flex flex-col">
          <h3>Mpolokeng</h3>
          <small className="block text-xs text-gray-500">
            Lorem ipsum dolor sit amet consecm etur adipisicing elit taidmd
          </small>
        </div>
      </div>
    </div>
  );
};

export default User;
