import React from "react";
import {
    useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWitGoogle, g_user, g_loading, g_error] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, f_user, f_loading, f_error] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, git_user, git_loading, git_error] =
    useSignInWithGithub(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;
  let userName;
  if (loading || f_loading || git_loading || g_loading || updating) {
    return <Loading />;
  }
  if (error || f_error || git_error || g_error || updateError) {
    signInError = <p className="text-red-500">{error?.message || git_error?.message || g_error?.message || f_error?.message || updateError?.message}</p>;
  }

  if (user || f_user || git_user || g_user) {
    
    userName = (
        <div>
             <small className="text-purple-400">Sign Up Complete</small>
        <p className="font-medium text-sm"> <span className="text-yellow-400">UserName</span> : {user?.user?.displayName}</p>
        </div>
       
    )
  }

  const onSubmit = async(data) => {
    // console.log(data.name);
    // signInWithEmailAndPassword(data.email , data.password);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({displayName: data.name})
    
   
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center mt-10">
        <div className="card flex w-96 bg-base-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Sing up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Enter Your Name </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z/0-9 ]{3,30}$/,
                      message: "Name must be greater than 3 character",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="text-red-400">{errors.name.message}</span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="text-red-400">{errors.name.message}</span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Enter Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Please provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="text-red-400">{errors.email.message}</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-red-400">{errors.email.message}</span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Enter Your Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },

                    minLength: {
                      value: 6,
                      message: "Enter at least 6 character",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Signup"
              />
            </form>
            <span className="text-blue-400">{userName ?  userName :  <small className="text-emerald-400">
              Already Have an account ..? <Link to="/login"> <span className="text-blue-400">Please Login</span> </Link>
            </small>}</span>
           
            <div className="divider">OR</div>
            <button
              onClick={() => signInWitGoogle()}
              className="btn btn-primary"
            >
              Google log in
            </button>
            <button
              onClick={() => signInWithFacebook()}
              className="btn btn-primary"
            >
              Facebook log in
            </button>
            <button
              onClick={() => signInWithGithub()}
              className="btn btn-primary"
            >
              Github log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
