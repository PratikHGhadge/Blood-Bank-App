import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import OrganisationTable from "../../components/shared/tables/OrganisationTable";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Organistion() {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  const getOrganistationData = async () => {
    if (user?.role === "donar") {
      const { data } = await API.get("/inventory/get-organisation");
      if (data?.success) {
        setData(() => data.organisations);
      }
    }
    if (user?.role === "hospital") {
      const { data } = await API.get(
        "/inventory/get-organisation-for-hospital"
      );
      console.log("Hospitals data");
      console.log(data.organisations);
      if (data?.success) {
        setData(() => data.organisations);
      }
    }
  };

  useEffect(() => {
    console.log("Fetching.....");
    console.log(user);
    if (!user) return;
    getOrganistationData();
  }, [user]);

  return (
    <Layout>
      <OrganisationTable data={data} />
    </Layout>
  );
}
export default Organistion;
