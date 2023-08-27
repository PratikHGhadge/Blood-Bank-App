import React, { useEffect, useState } from "react";
import API from "../../services/API";
import Layout from "../../components/shared/Layout/Layout";
import TableForAdmin from "../../components/shared/tables/TableForAdmin";

function HospitalList() {
  const [data, setData] = useState([]);
  const getHospitalData = async (req, res) => {
    try {
      const { data } = await API.get("/admin/hospital-list");
      setData(data.hospitalData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHospitalData();
  }, []);
  return (
    <>
      <Layout>
        <TableForAdmin data={data} list={"Hospital List"} />
      </Layout>
    </>
  );
}

export default HospitalList;
