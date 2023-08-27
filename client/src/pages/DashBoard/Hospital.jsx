import React, { useEffect, useState } from "react";
import API from "../../services/API";
import Layout from "../../components/shared/Layout/Layout";
import HospitalTable from "../../components/shared/tables/HospitalTable";

function Hospital() {
  const [data, setData] = useState([]);
  const getHospitalData = async () => {
    const { data } = await API.get("/inventory/get-hospitals");
    if (data?.success) {
      setData(data.hospitals);
    }
  };

  useEffect(() => {
    getHospitalData();
  }, []);

  return (
    <Layout>
      <HospitalTable data={data} heading={"Hospital records"} />
    </Layout>
  );
}

export default Hospital;
