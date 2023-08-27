import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const navigateTo = () => {
    if (user?.role === "oraganisation") {
      return <Navigate to={"/inventory"}></Navigate>;
    } else if (user?.role === "hospital") {
      return <Navigate to={"/orgnaisation"}></Navigate>;
    } else if (user?.role === "donar") {
      return <Navigate to={"/orgnaisation"}></Navigate>;
    } else if (user?.role === "admin") {
      return <Navigate to={"/donar-list"}></Navigate>;
    }
  };
  return <>{navigateTo()}</>;
}

export default HomePage;
