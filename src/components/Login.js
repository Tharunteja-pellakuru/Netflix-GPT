import { useRef, useState } from "react";
import Header from "./Header";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-20"
          alt="bgImg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_medium.jpg"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black bg-opacity-70 rounded-lg my-36 mx-auto right-0 left-0">
        <h1 className="text-white font-bold text-2xl my-4 w-full">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full rounded-lg bg-gray-700 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full rounded-lg bg-gray-700 text-white"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-3 my-4 w-full rounded-lg bg-gray-700 text-white"
        />
        <button className="p-3 my-4 bg-red-600 rounded-lg text-white w-full">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p onClick={toggleSignInForm} className=" p-3 text-gray-400">
          {" "}
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}
          <span className="font-bold cursor-pointer text-white">
            {isSignInForm ? " Sign Up Now" : " Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
