import React, { useEffect, useState } from "react";
import API from "../../services/API";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import ConsumerAndDonationTable from "../../components/shared/tables/ConsumerAndDonationTable";

function Consumer() {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const getConsumerData = async () => {
    const { data } = await API.post("/inventory/get-inventory-hospital", {
      filters: {
        inventoryType: "out",
        hospital: user?._id,
      },
    });
    if (data?.success) {
      setData(data.inventory);
    }
  };

  useEffect(() => {
    getConsumerData();
  }, []);

  return (
    <Layout>
      <ConsumerAndDonationTable data={data} heading={"Consumption records"} />
    </Layout>
  );
}

export default Consumer;
