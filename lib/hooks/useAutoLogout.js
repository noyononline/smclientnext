import { useEffect } from "react";
import { useAppDispatch } from "@/lib/store/hooks/hooks"; // Ensure to import dispatch
import { customer_logout } from "@/lib/store/features/auth/authSlice"; // Import your logout action
import jwtDecode from "jwt-decode";
// Helper function to decode the JWT token and check its expiration
const decodeToken = (token) => {
  if (!token) return null;

  try {
    const decoded = jwtDecode(token); // Decode the token
    const now = Date.now() / 1000; // Current time in seconds
    if (decoded.exp < now) {
      return null; // Token expired
    }
    return decoded;
  } catch (error) {
    return null; // If there's an error decoding the token, return null
  }
};

const useAutoLogout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("userToken"); // Get token from localStorage
    if (!token) {
      return; // No token, no need to check
    }

    const decodedToken = decodeToken(token); // Decode and check expiry
    if (!decodedToken) {
      // Token expired, logout the user automatically
      dispatch(customer_logout());
      localStorage.removeItem("userToken"); // Remove token from localStorage
    }
  }, [dispatch]);
};

module.exports = useAutoLogout;
