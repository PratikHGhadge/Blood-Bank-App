import React, { useEffect, useState } from "react";
import API from "../../src/services/API";
import Layout from "../../src/components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import ConsumerAndDonationTable from "../../src/components/shared/tables/ConsumerAndDonationTable";

function Donation() {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = new useState([]);
  const getConsumerData = async () => {
    const { data } = await API.post("/inventory/get-inventory-hospital", {
      filters: {
        inventoryType: "in",
        donar: user?._id,
      },
    });
    if (data?.success) {
      setData(data.inventory);
    }
    return data;
  };

  useEffect(() => {
    getConsumerData();
  }, []);

  return (
    <Layout>
      <ConsumerAndDonationTable data={data} heading={"Donation records"} />
    </Layout>
  );
}

export default Donation;
