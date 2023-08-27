import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import Donartable from "../../components/shared/tables/Donartable";

export const Donar = () => {
  const [data, setData] = useState([]);
  // find donar record
  const getDonars = async () => {
    try {
      const { data } = await API.get("/inventory/get-donars");
      // console.log(data);
      if (data?.success) {
        setData(data.donars);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);
  return (
    <Layout>
      <Donartable data={data} heading={"Donar records"} />
    </Layout>
  );
};
