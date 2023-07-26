import React from "react";
import Form from "../../components/shared/Form/Form";
import Spinner from "../../components/shared/Spinner";
import { useSelector } from "react-redux";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="md:flex  shadow-md">
          <div className="w-auto  m-0 shadow-md">
            <img
              className="object-cover w-full h-full"
              src="./assets/blooddonation.jpg"
              alt="giveBlood"
            />
          </div>
          <div className="flex items-center">
            <div className="flex w-full h-full justify-end items-center">
              <div className=" w-full">
                <Form
                  formType={"login"}
                  formTitle={"Login in to your account"}
                  submitBtn={"Login"}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
