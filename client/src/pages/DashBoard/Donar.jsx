import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";

export const Donar = () => {
  const [data, setData] = useState([]);
  // find donar record
  const getDonars = async () => {
    try {
      const { data } = await API.get("/inventory/get-donars");
      // console.log(data);
      if (data?.success) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);
  return <Layout></Layout>;
};
