import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";
import { LogoIcon } from "../../components/shared/Icons";
const Register = () => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="md:flex h-screen items-center justify-center ">
          <div className="rounded-xl shadow-xl py-10 bg-gray-50 my-auto items-center">
            <div className="flex justify-center ">
              <LogoIcon></LogoIcon>
            </div>
            <Form
              formType={"register"}
              formTitle={"Register"}
              submitBtn={"Register"}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Register;
