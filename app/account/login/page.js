"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader, User } from "lucide-react";
import Link from "next/link";

import {
  customer_login,
  messageClear,
} from "@/lib/store/features/auth/authSlice";
import FloatingShape from "@/components/FloatingShape";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { loginSchema } from "@/validation/schemas";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loader, userInfo, errorMessage, successMessage } = useAppSelector(
    (state) => state.auth
  );

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        dispatch(customer_login(values));
      } catch (error) {
        toast.error("Login failed. Please try again.");
      }
    },
  });

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);

      dispatch(messageClear());
    }
    if (userInfo) {
      router.push("/dashboard");
    }
  }, [userInfo, dispatch, successMessage, errorMessage, router]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
        <FloatingShape
          color={"bg-green-500"}
          size={"w-64 h-64"}
          top={"-5%"}
          left={"10%"}
          delay={"0"}
        />
        <FloatingShape
          color={"bg-green-500"}
          size={"w-48 h-48"}
          top={"70%"}
          left={"80%"}
          delay={"0"}
        />
        <FloatingShape
          color={"bg-green-500"}
          size={"w-32 h-32"}
          top={"40%"}
          left={"-10%"}
          delay={"0"}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              Welcome Back
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="size-5 text-green-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="w-full outline-none pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
                  placeholder="Enter your email"
                />
              </div>

              {errors.email && (
                <div className="text-sm mb-2 text-red-500 px-2">
                  {errors.email}
                </div>
              )}
              <div className="relative mb-4">
                <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="size-5 text-green-500" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className="w-full outline-none pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
                  placeholder="Enter your password"
                />
              </div>

              {errors.password && (
                <div className="text-sm mb-2 text-red-500 px-2">
                  {errors.password}
                </div>
              )}

              <div className="flex items-center mb-6">
                <Link
                  href={"/forgot-password"}
                  className="text-sm text-green-400 hover:underline"
                >
                  Forgot Password
                </Link>
              </div>

              <motion.button
                className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:right-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loader}
              >
                {loader ? (
                  <Loader className="w-6 h-6 animate-spin mx-auto" />
                ) : (
                  "Login"
                )}
              </motion.button>
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?
              <Link
                href={"/account/signup"}
                className="text-green-400 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LoginPage;
