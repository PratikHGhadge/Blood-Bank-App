import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { PlusIcon } from "../../components/shared/Icons";
import Modal from "../../components/shared/Modal/Modal";
import API from "../../services/API";
import Table from "../../components/shared/tables/InventoryTable";

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
                    <div className="rounded-md pl-2 cursor-pointer pr-4 bg-slate-400 shadow-xl w-fit mx-2 mt-2 py-2 flex items-center">
                      <button
                        onClick={handelOpenModal}
                        type="button"
                        className="inline-flex px-5 py-4 items-center p-3 rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                      >
                        <PlusIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <div className="pl-2 text-white text-2xl">
                        Add Inventroy
                      </div>
                      {/* conditional rendring */}
                      {showModal && <Modal onClose={handelCloseModal} />}
                    </div>
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
