import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "@/utils/config";
import axios from "axios";
export const get_all_category = createAsyncThunk(
  "category/get_all_category",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/get-all-category`,
        info
      );
      console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      const errorMessage = error.response?.data || error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  errorMessage: "",
  successMessage: "",
  loader: false,
  categorys: [],
  userInfo: "",
};

const cateSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(get_all_category.pending, (state, action) => {
      state.loader = true;
    });
    builder.addCase(get_all_category.rejected, (state, action) => {
      state.loader = false;
      state.errorMessage = action.payload.message;
    });
    builder.addCase(get_all_category.fulfilled, (state, action) => {
      state.loader = false;
      state.categorys = action.payload.categorys;
    });
  },
});

export const { messageClear } = cateSlice.actions;
export const cateReducer = cateSlice.reducer;
