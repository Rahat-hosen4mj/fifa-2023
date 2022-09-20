import React from "react";
import {
    useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
  const [signInWitGoogle, g_user, g_loading, g_error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, f_user, f_loading, f_error] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, git_user, git_loading, git_error] =
    useSignInWithGithub(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;
  let userName;
  if (loading || f_loading || git_loading) {
    return <Loading />;
  }
  if (error || f_error || git_error || g_error) {
    signInError = <p className="text-red-500">{error}</p>;
  }

  if (user || f_user || git_user || g_user) {
    console.log(user || f_user || git_user || g_user);
    
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email , data.password)
    console.log(data.email, data.password);
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center ">
        <div className="card flex w-96 bg-base-400 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Log in</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Enter Your Email ?</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  class="input input-bordered w-full max-w-xs"
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
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span className="text-red-400">{errors.email.message}</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-red-400">{errors.email.message}</span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Enter Your Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  class="input input-bordered w-full max-w-xs"
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
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span className="text-red-400">{errors.password.message}</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-400">{errors.password.message}</span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Login"
              />
            </form>
           {userName}
            <small className="text-emerald-400">New to the page ..? <Link to='/signup'>Please Register</Link></small>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWitGoogle()}
              className="btn btn-primary"
            >
              Google log in
            </button>
            <button onClick={() => signInWithFacebook()} className="btn btn-primary">Facebook log in</button>
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

export default Login;
