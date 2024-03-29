import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    //validate the form Data
    const availname = nameRef?.current?.value ? nameRef?.current?.value : null;

    const message = checkValidData(
      emailRef.current.value,
      passwordRef.current.value,
      availname
    );
    setErrorMsg(message);
    if (message) return;

    // SignIn Signup Logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <section>
      <Header />
      <div className="h-screen w-full relative">
        <img
          className="h-screen w-full object-cover "
          src={BG_URL}
          alt="background"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-80 flex flex-col py-10 px-10 gap-8   absolute xl:top-6 sm:top-10 top-16 right-0 left-0 max-w-sm sm:mx-auto my-20 rounded-md  mx-6 *:text-white"
        >
          <h1 className="text-white text-2xl font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="px-4 py-2 bg-slate-800 outline-none rounded-sm"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email Adddress"
            className="px-4 py-2 bg-slate-800 outline-none rounded-sm"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="px-4 py-2 bg-slate-800 outline-none rounded-sm"
          />
          {errorMsg && (
            <div className="relative">
              <small className="text-sm !text-red-500 font-bold ">
                {errorMsg}
              </small>
            </div>
          )}

          <button
            className="px-4 py-2 bg-[#e50914] text-white font-semibold rounded-sm"
            onClick={handleBtnClick}
          >
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
