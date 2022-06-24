// import axios from "axios";
// import { registerError, registerStart, registerSuccess } from "./registerSlice";
// import { loginFailure, loginStart, loginSuccess } from "./userSlice";

// // Login user
// export const login = async (dispatch, userInfo) => {
//   dispatch(loginStart());
//   try {
//     const res = await axios.post(
//       "https://exprestemplate.herokuapp.com/api/auth/login",
//       userInfo
//     );
//     dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

// // Register new user

// export const registerNewUser = async (dispatch, user) => {
//   dispatch(registerStart());
//   try {
//     const res = await axios.post(
//       "https://exprestemplate.herokuapp.com/api/auth/register",
//       user
//     );
//     dispatch(registerSuccess(res.data));
//   } catch (err) {
//     dispatch(registerError());
//   }
// };
