import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
        state.currentUser = null
    }
  },
});

export const { logOut, loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;

// using redux thunk
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const newUser2 = createAsyncThunk("/login", async (user) => {
//   const res = await axios.post(
//     "https://exprestemplate.herokuapp.com/api/auth/login",
//     user
//   );
//   return res.data;
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     currentUser: null,
//     isFetching: false,
//     error: false,
//   },
//   reducers: {
//     logOut: (state) => {
//       state.currentUser = null;
//     }
//   },
//   extraReducers: {
//     [newUser2.pending]: (state) => {
//       state.isFetching = true;
//       state.error = false;
//     },
//     [newUser2.fulfilled]: (state, action) => {
//       state.isFetching = false;
//       state.currentUser = action.payload;
//     },
//     [newUser2.rejected]: (state) => {
//       state.isFetching = false;
//       state.error = true;
//     },
//   },
// });


// export const { logOut, loginStart, loginSuccess, loginFailure } = userSlice.actions;
// export default userSlice.reducer;