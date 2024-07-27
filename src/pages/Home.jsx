import React from "react";
import User from "../components/User";
import Message from "../components/Message";

const Home = () => {
  return (
    <div className="flex h-screen  px-10 flew-col justify-center items-start gap-x-5">
      <div className=" bg-white h-[90vh] px-4 py-5 border border-gray-100 w-1/4 rounded-lg">
        <h3>Chats</h3>
        <input
          type="text"
          className="border outline-none my-2 py-2 w-full text-xs rounded-lg px-3"
          placeholder="Search customers"
        />
        <User />
        <User />
      </div>
      <div className="relative bg-white overflow-y-auto h-[90vh] py-3 px-10 border w-3/4 border-gray-100 rounded-lg">
        <Message />

        <div className="fixed bottom-14 w-full flex">
          {/* Messages come here... */}
          <textarea
            placeholder="Send message"
            className="outline-none rounded-lg py-1 px-3 text-xs   border w-[60vw]"
          ></textarea>
          <button className="text-white bg-blue-500  rounded-lg text-xs px-3 mx-1">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
