import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "src/config/base_url";

import { throwToastSuccess, throwToastError } from "src/utils/throw_toast";

const initialState = {
  isAddFeedbackLoading: false,
  addFeedbackError: null,
};

export const addFeedback = createAsyncThunk(
  "feedback/addFeedback",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/feedback`, data);
      if (response.status === 201) {
        throwToastSuccess("Thank you for your feedback.🤗");
        return response.data;
      }
    } catch (err) {
      console.log(err);
      const errorMessage = err?.response?.data?.message || "Failed to Add";
      throwToastError(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addFeedback.pending, (state) => {
        state.isAddFeedbackLoading = true;
      })
      .addCase(addFeedback.fulfilled, (state, action) => {
        state.isAddFeedbackLoading = false;
      })
      .addCase(addFeedback.rejected, (state, action) => {
        state.isAddFeedbackLoading = false;
        state.addFeedbackError = action.payload;
      });
  },
});

export default feedbackSlice.reducer;
