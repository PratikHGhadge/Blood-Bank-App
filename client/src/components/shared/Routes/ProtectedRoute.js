import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../../services/API";
import { getcurrentUser } from "../../../redux/features/auth/authActions";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();

  // get user current
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/currentuser");
      if (data?.success) {
        dispatch(getcurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
export default ProtectedRoute;
