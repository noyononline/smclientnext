"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";

import {
  messageClear,
  verify_email,
} from "@/lib/store/features/auth/authSlice";
import FloatingShape from "@/components/FloatingShape";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks/hooks";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

const initialValues = {
  code: ["", "", "", "", "", ""], // 6 fields for each digit
};

const VerifyEmail = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loader, userInfo, errorMessage, successMessage } = useAppSelector(
    (state) => state.auth
  );

  const { values, handleSubmit, setFieldValue, resetForm } = useFormik({
    initialValues,

    onSubmit: async (values) => {
      // Join the array into a single string
      const verificationCode = values.code.join("");

      try {
        dispatch(verify_email({ code: verificationCode }));
        //router.push("/dashboard"); // Redirect on success

        //toast.success("Email verified successfully!");

        resetForm();
      } catch (error) {
        toast.error("Verification failed. Please try again.");
      }
    },
  });

  // Manage focus for inputs, move focus to the next input automatically
  const inputRefs = useRef([]);

  const handleChangeWithFocus = (index, value) => {
    const newCode = [...values.code];
    newCode[index] = value;
    setFieldValue("code", newCode);

    // Move to next input if the current value is filled
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    // Move to previous input if backspace is pressed and current input is empty
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);

      dispatch(messageClear());
    }
    if (userInfo.isVerified === true) {
      router.push("/dashboard");
    }
  }, [userInfo, errorMessage, successMessage, router, dispatch]);

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
              Verify Your Email
            </h2>
            <p className="text-center text-gray-300 mb-6">
              Enter the 6-digit code send to your email address
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex justify-between">
                {values.code.map((digit, index) => (
                  <>
                    <input
                      key={index + 10}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      name="code"
                      value={digit}
                      maxLength="1"
                      onChange={(e) =>
                        handleChangeWithFocus(index, e.target.value)
                      }
                      aria-label={`Verification digit ${index + 1}`}
                      className="w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-gray-500 rounded-lg focus:border-green-500 focus:outline-none"
                    />
                  </>
                ))}
              </div>

              <motion.button
                className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:right-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loader}
              >
                {loader ? "Verifying..." : "Verify Email"}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default VerifyEmail;
