// import React, { useEffect, useState } from "react";
// import Layout from "../../components/shared/Layout/Layout";
// import API from "../../services/API";
// import OrganisationTable from "../../components/shared/tables/OrganisationTable";

// function Organistion() {
//   const [data, setData] = useState([]);
//   const getOrganistationData = async () => {
//     const { data } = await API.get("/inventory/get-organisation-for-hospital");
//     if (data?.success) {
//       setData(data.organisations);
//     }
//   };

//   useEffect(() => {
//     getOrganistationData();
//   }, []);

//   return (
//     <Layout>
//       <OrganisationTable data={data} />
//     </Layout>
//   );
// }
// export default Organistion;
