import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function AnalyticsCard({ data }) {
  return (
    <div>
      {" "}
      <ul className="md:pl-64 m-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map((bloodGroup) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            variants={item}
            key={bloodGroup.index}
            className="item col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 bg-gradient-to-b from-red-600 to-pink-300"
          >
            <div className="w-full justify-between flex items-center  p-4 pb-0 space">
              <div className="w-20 h-auto text-6xl text-white font-serif  font-semibold">
                {bloodGroup.bloodGroup}
              </div>
              <img className="  w-24  " src="/assets/blood-drop.png" alt="" />
            </div>
            <div>
              <div class="grid grid-cols-2 gap-2 p-2 ">
                <div class="bg-white rounded-lg p-2">
                  {"Total In Blood : " + bloodGroup.totalIn + "ML"}
                </div>
                <div class="bg-white rounded-lg p-2">
                  {"Total Out Blood : " + bloodGroup.totalOut + "ML"}
                </div>
              </div>

              <div className="m-2 mb-4 mt-0 p-2 bg-white rounded-lg flex divide-x text-xl divide-gray-200">
                {"Available Quantity Blood : " +
                  bloodGroup.availableBlood +
                  "ML"}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default AnalyticsCard;
