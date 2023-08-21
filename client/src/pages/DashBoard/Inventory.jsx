import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { PlusIcon } from "../../components/shared/Icons";
import Modal from "../../components/shared/Modal/Modal";
import API from "../../services/API";
import Table from "../../components/shared/tables/InventoryTable";
import { motion } from "framer-motion";

function Inventory() {
  const { loading, error, user } = useSelector((state) => state.auth);
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1 }}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      onClick={handelOpenModal}
                      className="rounded-md pl-2 cursor-pointer pr-4 bg-gradient-to-b from-green-400 to-green-300 shadow-xl w-fit ml-8 mx-2 mt-2 py-2 flex items-center"
                    >
                      <div
                        type="button"
                        className="inline-flex px-5 py-4 items-center p-3 rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                      >
                        <PlusIcon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="pl-2 text-white text-2xl">
                        Add Inventroy
                      </div>
                      {/* conditional rendring */}
                    </motion.button>
                    {showModal && <Modal onClose={handelCloseModal} />}

                    <div className="px-4 sm:px-6 md:px-0">
                      {/* content */}
                      <div className="py-4">
                        <div className="h-96  rounded-lg">
                          <hr />
                          {/* table for printing inventory data */}
                          <Table data={data} />
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
