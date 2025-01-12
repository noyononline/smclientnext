import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "@/utils/config";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
export const customer_register = createAsyncThunk(
  "auth/customer_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${base_url}/api/auth/customer-register`,
        info
      );
      localStorage.setItem("userToken", data.token);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      const errorMessage = error.response?.data || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const verify_email = createAsyncThunk(
  "auth/verify_email",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${base_url}/api/auth/verify-email-code`,
        info
      );
      localStorage.setItem("userToken", data.token);
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      const errorMessage = error.response?.data || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const customer_login = createAsyncThunk(
  "auth/customer_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${base_url}/api/auth/customer-login`,
        info
      );
      localStorage.setItem("userToken", data.token);

      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      const errorMessage = error.response?.data || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const customer_logout = createAsyncThunk(
  "auth/customer_logout",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.post(
        `${base_url}/api/auth/customer-logout`,
        info
      );
      localStorage.removeItem("userToken");

      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      const errorMessage = error.response?.data || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

const decodeToken = (token) => {
  if (!token) return null;

  try {
    const userInfo = jwtDecode(token);
    const now = Date.now() / 1000;
    if (userInfo.exp < now) {
      return null;
    }
    return userInfo;
  } catch (error) {
    return null;
  }
};

const getUserInfoFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    // Ensure code runs only on the client
    const token = localStorage.getItem("userToken");
    return decodeToken(token);
  }
  return null;
};

const initialState = {
  errorMessage: "",
  successMessage: "",
  loader: false,
  userInfo: getUserInfoFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(customer_register.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(customer_register.rejected, (state, action) => {
      state.loader = false;
      state.errorMessage = action.payload.message;
    });
    builder.addCase(customer_register.fulfilled, (state, action) => {
      state.loader = false;
      state.successMessage = action.payload.message; // Corrected to handle message directly
      state.userInfo = decodeToken(action.payload.token);
    });

    //Handling verify_email action
    builder.addCase(verify_email.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(verify_email.rejected, (state, action) => {
      state.loader = false;
      state.errorMessage = action.payload.message; // Corrected to action.payload
    });
    builder.addCase(verify_email.fulfilled, (state, action) => {
      state.loader = false;
      state.successMessage = action.payload.message; // Corrected to handle message directly
      state.userInfo = decodeToken(action.payload.token);
    });

    // login customer
    builder.addCase(customer_login.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(customer_login.rejected, (state, action) => {
      state.loader = false;
      state.errorMessage = action.payload.message;
    });
    builder.addCase(customer_login.fulfilled, (state, action) => {
      state.loader = false;
      state.successMessage = action.payload.message; // Corrected to handle message directly
      state.userInfo = decodeToken(action.payload.token);
    });

    // customer logout
    builder.addCase(customer_logout.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(customer_logout.rejected, (state, action) => {
      state.loader = false;
      state.errorMessage = action.payload.message;
    });
    builder.addCase(customer_logout.fulfilled, (state, action) => {
      state.loader = false;
      state.successMessage = action.payload.message; // Corrected to handle message directly
      state.userInfo = null;
    });
  },
});

export const { messageClear } = authSlice.actions;
export const authReducer = authSlice.reducer; // This is what you export as authReducer
