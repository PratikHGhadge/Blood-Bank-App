import React from "react";
import Layout from "../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
const HomePage = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <Layout>
      {error && <span className="text-red-500">{error}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="bg-black">hello</h1>
          <h1 className="bg-black">hello</h1>
        </>
      )}
    </Layout>
  );
};

export default HomePage;
