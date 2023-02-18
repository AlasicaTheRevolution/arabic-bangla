import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (emailError) {
      const newErrorMessage = emailError?.message
        .split("Firebase: Error (auth/")
        .join("")
        .split(").")
        .join("")
        .split("-")
        .join(" ");
      toast.error(newErrorMessage.toUpperCase());
    }
  }, [emailError]);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate, from]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: true,
                    pattern: /^(.+)@(.+)$/,
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600 text-left font-semibold">
                    Email is required
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-600 text-left font-semibold">
                    Please Enter a valid email
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  autoComplete=""
                  {...register("password", { required: true, minLength: 6 })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 text-left font-semibold">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 text-left font-semibold">
                    Password must be at least 6 characters
                  </p>
                )}
              </div>
              <label className="label">
                <Link
                  to="/reset-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>

            <div>
              <button
                disabled={emailLoading ? true : false}
                className={
                  emailLoading
                    ? "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 loading"
                    : "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
