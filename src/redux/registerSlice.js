// import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const registerSlice = createSlice({
//   name: "register",
//   initialState: {
//     newUser: null,
//     isFetching: false,
//     error: false,
//   },
//   reducers: {
//     registerStart: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },
//     registerSuccess: (state, action) => {
//       state.isFetching = false;
//       state.newUser = action.payload;
//     },
//     registerError: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//   },
// });

// export const { registerError, registerStart, registerSuccess } =
//   registerSlice.actions;
// export default registerSlice.reducer;

// Using redux thunk
export const registerNewUser2 = createAsyncThunk("/register", async (user) => {
  const res = await axios.post(
    "https://exprestemplate.herokuapp.com/api/auth/register",
    user
  );
  return res.data;
});

const registerSlice = createSlice({
    name: "register",
    initialState: {
        newUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {},
    extraReducers: {
        [registerNewUser2.pending]: (state) => {
            state.isFetching = true
            state.error = false
        },
        [registerNewUser2.fulfilled]: (state, action) => {
            state.isFetching = false
            state.newUser = action.payload
        },
        [registerNewUser2.rejected]: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export default registerSlice.reducer
