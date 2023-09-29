import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import Modal from "../../components/shared/Modal/Modal";
import API from "../../services/API";
import Table from "../../components/shared/tables/InventoryTable";

function Inventory() {
  const { loading, error } = useSelector((state) => state.auth);
  const [showModal, setModal] = useState(false);
  const [data, setData] = useState([]);
  // get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory", {});
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  const handelOpenModal = () => {
    setModal(true);
  };
  const handelCloseModal = () => {
    setModal(false);
  };
  return (
    <Layout>
      {error && <span className="text-red-500">{error}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <div className="md:pl-64 ">
              <div className="max-auto   flex   flex-col md:px-8 xl:px-0">
                <main className="flex-1 ">
                  <div className="py-3">
                    <button
                      onClick={handelOpenModal}
                      class="group relative ml-10 mt-2 py-3 px-6 bg-white border border-black text-black font-medium rounded-md transition duration-200 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
                      <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                      <span class="relative text-black group-hover:text-white">
                        <span className="text-2xl">+</span> Add Inventory
                      </span>
                    </button>

                    {showModal && <Modal onClose={handelCloseModal} />}

                    <div className="px-4 sm:px-6 md:px-0">
                      {/* content */}
                      <div className="py-4">
                        <div className="h-96  rounded-lg">
                          <hr />
                          {/* table for printing inventory data */}
                          <Table data={data} heading={"All blood Records"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Inventory;
