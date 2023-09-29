import { createSlice } from "@reduxjs/toolkit";
import { getcurrentUser, userLogin, userRegister } from "./authActions";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    });

    // register
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    });
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload.error;
    });

    // getcurrentUser
    builder.addCase(getcurrentUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getcurrentUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
    });
    builder.addCase(getcurrentUser.rejected, (state, payload) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default authSlice;
