import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";
import OrganisationTable from "../../components/shared/tables/OrganisationTable";
import { useSelector } from "react-redux";

function Organistion() {
  const [data, setData] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) return;

    (async () => {
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
        if (data?.success) {
          setData(() => data.organisations);
        }
      }
    })();
  }, [user]);

  return (
    <Layout>
      <OrganisationTable data={data} heading={"Organisation records"} />
    </Layout>
  );
}
export default Organistion;
