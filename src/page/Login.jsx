import React from "react";

const Login = () => {
  return (
    <div className="loginDiv">
      <div className="h-[500px] w-8 sm:w-[500px] bg-purple-200 rounded-[50px] flex p-10 flex-col text-center">
        <div>
          <h1 className="animate-bounce text-[22px] font-pageFont font-[900] dark:text-white dark:bg-dark uppercase">
            Welcome Friend
          </h1>
        </div>
        <div>
          <h3 className="text-[20px] p-5 text-primary_hover ">SING IN</h3>
        </div>
        <form className="flex flex-col text-left gap-4 p-3 font-pageFont ">
          <div className="flex flex-col gap-2">
            <label
              className='hover:cursor-pointer hover:after:content-["ab@ab.com"] hover:after:text-primary hover:after:underline'
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="h-[44px] rounded-lg focus:outline-primary focus:caret-primary p-1"
              type="email"
              id="email"
              placeholder="ab@ab.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className='hover:cursor-pointer hover:after:content-["12345"] hover:after:text-primary hover:after:underline'
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="h-[44px] rounded-lg focus:outline-primary focus:caret-primary p-1"
              type="password"
              id="password"
              placeholder="12345"
              required
            />
          </div>
          <button className="h-[45px] font-pageFont bg-primary hover:bg-primary_hover  duration-300 mt-5 text-white hover:text-black rounded-lg w-[100%] ">
            SING IN 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
