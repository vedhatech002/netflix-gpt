import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <section>
      <Header />
      <div className="h-screen w-full relative">
        <img
          className="h-screen w-full  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <form className="bg-black bg-opacity-80 flex flex-col py-10 px-10 gap-8   absolute top-6 right-0 left-0 max-w-sm mx-auto my-20 rounded-md text-white">
          <h1 className="text-white text-2xl font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 bg-slate-800 outline-none rounded-sm"
            />
          )}
          <input
            type="text"
            placeholder="Email Adddress"
            className="px-4 py-2 bg-slate-800 outline-none rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 bg-slate-800 outline-none rounded-sm"
          />
          <button className="px-4 py-2 bg-[#e50914] text-white font-semibold rounded-sm">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <div onClick={toggleSignInForm} className="cursor-pointer ">
            {isSignInForm ? (
              <p className=" text-sm text-slate-500">
                New to Netflix
                <span className="text-white font-semibold ml-1 cursor-pointer">
                  Sign up now.
                </span>
              </p>
            ) : (
              <p className=" text-sm text-slate-500">
                {" "}
                Already have an account?
                <span className="text-white font-semibold ml-1 cursor-pointer">
                  Sign In now.
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
