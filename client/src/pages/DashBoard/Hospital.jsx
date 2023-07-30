import React, { useEffect, useState } from "react";
import API from "../../services/API";
import Layout from "../../components/shared/Layout/Layout";
import HospitalTable from "../../components/shared/tables/HospitalTable";

function Hospital() {
  const [data, setData] = new useState([]);
  const getHodpitalData = async () => {
    const { data } = await API.get("/inventory/get-hospitals");
    if (data?.success) {
      setData(data.hospitals);
    }
  };

  useEffect(() => {
    getHodpitalData();
  }, []);

  return (
    <Layout>
      <HospitalTable data={data} />
    </Layout>
  );
}

export default Hospital;
