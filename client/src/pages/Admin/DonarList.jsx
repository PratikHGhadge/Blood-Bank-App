import React, { useEffect, useState } from "react";
import API from "../../services/API";
import Layout from "../../components/shared/Layout/Layout";
import TableForAdmin from "../../components/shared/tables/TableForAdmin";
import Spinner from "../../components/shared/Spinner";
import { useSelector } from "react-redux";

const DonarList = () => {
  const { loading, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const getDonarData = async (req, res) => {
    try {
      const { data } = await API.get("/admin/donar-list");
      if (data?.success) {
        setData(data.donarData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonarData();
  }, []);
  return (
    <>
      <Layout>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="md:pl-64 ">
              <h1 className="flex mt-8 items-center text-white mb-2 justify-center font-serif text-6xl font-bold bg-gradient-to-b from-red-500 to-pink-300 mx-8 py-2 -mb-4 rounded-lg">
                Welcome Admin {user?.name}
              </h1>
            </div>
          </>
        )}
        <TableForAdmin data={data} />
      </Layout>
    </>
  );
};

export default DonarList;
