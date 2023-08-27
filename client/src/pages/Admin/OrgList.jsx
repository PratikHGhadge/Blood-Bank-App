import React, { useEffect, useState } from "react";
import API from "../../services/API";
import Layout from "../../components/shared/Layout/Layout";
import TableForAdmin from "../../components/shared/tables/TableForAdmin";

function OrgList() {
  const [data, setData] = useState([]);
  const getOrganisationData = async (req, res) => {
    try {
      const { data } = await API.get("/admin/organisation-list");
      setData(data.organizationData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOrganisationData();
  }, []);
  return (
    <Layout>
      <TableForAdmin data={data} list={"Organisation List"} />
    </Layout>
  );
}

export default OrgList;
