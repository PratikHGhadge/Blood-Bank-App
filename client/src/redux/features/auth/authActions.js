import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import API from "../../../services/API";

//login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      // store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
      }
      window.location.replace("/home");
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        alert("error accured");
        return rejectWithValue(error.message);
      }
    }
  }
);

// register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data?.success) {
        // = data && data.success
        alert("User Registerd Successfully");
        window.location.replace("/login");
        toast.success(data.response.message);
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        alert("error accured");
        return rejectWithValue(error.message);
      }
    }
  }
);

// get current user
export const getcurrentUser = createAsyncThunk(
  "auth/getcurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("/auth/currentuser");
      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
