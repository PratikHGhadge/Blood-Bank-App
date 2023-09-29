import { React, useEffect, useState } from "react";
import API from "../services/API";
import { useSelector } from "react-redux";
import Layout from "../components/shared/Layout/Layout";
import AnalyticsCard from "../components/shared/AnalyticsCard";
import InventoryTable from "../components/shared/tables/InventoryTable";
import Spinner from "../components/shared/Spinner";

function Analytics() {
  const { loading, error } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [recentData, setRecentData] = useState([]);

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
  const getRecentBloodGroupData = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setRecentData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  useEffect(() => {
    getRecentBloodGroupData();
  }, []);
  return (
    <>
      <Layout>
        {error && <span className="text-red-500">{error}</span>}
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="md:pl-64 mt-6">
              <h1 className="flex items-center text-white mb-2 justify-center font-serif text-6xl font-bold bg-gradient-to-b from-red-600 to-pink-300 mx-8 rounded-lg">
                Recent Blood Recordes
              </h1>
            </div>
            <AnalyticsCard data={data}></AnalyticsCard>
            <div className="md:pl-64">
              <h1 className="flex items-center text-white mb-2 justify-center font-serif text-6xl font-bold bg-gradient-to-b from-red-600 to-pink-300 mx-8 rounded-lg">
                Recent Blood Recordes
              </h1>
              <InventoryTable data={recentData}></InventoryTable>
            </div>
          </>
        )}
      </Layout>
    </>
  );
}

export default Analytics;
