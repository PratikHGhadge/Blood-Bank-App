import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="md:flex  shadow-md">
          <div className="w-auto  m-0 shadow-md">
            <img
              className="object-cover w-full h-full"
              src="./assets/bloodTesting.jpg"
              alt="register"
            />
          </div>
          <div className="flex items-center">
            <div className="flex w-full h-full justify-end items-center">
              <div className=" w-full">
                <Form
                  formType={"register"}
                  formTitle={"Register"}
                  submitBtn={"Register"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Register;
