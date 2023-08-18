import { React, useEffect, useState } from "react";
import API from "../services/API";
import Layout from "../components/shared/Layout/Layout";
import AnalyticsCard from "../components/shared/AnalyticsCard";

function Analytics() {
  const [data, setData] = useState([]);

  const colors = {};

  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroup-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);
  return (
    <>
      <Layout>
        <AnalyticsCard data={data}></AnalyticsCard>
      </Layout>
    </>
  );
}

export default Analytics;
