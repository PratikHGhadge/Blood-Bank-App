import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import API from "../../../services/API";

//login
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, role, history }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      // store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        history("/home");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        alert("error accrued");
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
      history,
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
        toast.success(data.message);
        history("/login"); // Use history for navigation
        return data;
      } else {
        console.error("Unexpected response data:", data);
        return rejectWithValue("Unexpected response data");
      }
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        alert("Error occurred while registering");
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
