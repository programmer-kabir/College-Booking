import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../../Component/Container/Container";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../../../Component/Hooks/useAuth";
import SocialAccount from "../SocialAccount/SocialAccount";
import { toast } from "react-hot-toast";

const Login = () => {
  const { singIn, setLoading, loading,resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // navigate(from, { replace: true });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data =>{
    // console.log(data);
    singIn(data.email, data.password)
    .then((result) =>{
      const loggedUser = result.user
      navigate(from , {replace:true})
    })
    .catch(err =>{
      setLoading(false)
      toast.error(err.message)
  })
  }
  const handleResetPassword = (email) => {
    const emailValue = email.value

    resetPassword(emailValue)
      .then(() => {
        toast.success('Please check your email for reset link')
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err.message)
        toast.error(err.message)
      })
  }
  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md  sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center ">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form
          onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-2 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register('email', { required: true })}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-600 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...register('password', { required: true })}
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-pink-600 bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div className="">
            <span  onClick={()=>handleResetPassword(email)} className="text-xs hover:underline cursor-pointer hover:text-rose-500 text-gray-400">
              Forgot password?
            </span>
          </div>
            <div>
              <button
                type="submit"
                className="bg-rose-500 hover:bg-rose-700  w-full rounded-md py-3 text-white transition-colors duration-300"
              >
                {loading ?<ImSpinner9 className='m-auto animate-spin' size={24} /> :"Continue"}
              </button>
            </div>
          </form>
          
          <SocialAccount />

          <p className="px-6 text-sm text-start text-gray-400">
            Don't have an account yet?{" "}
            <Link
              to="/sign-up"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;