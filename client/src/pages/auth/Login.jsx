import React from "react";
import Form from "../../components/shared/Form/Form";
import Spinner from "../../components/shared/Spinner";
import { useSelector } from "react-redux";
import { LogoIcon } from "../../components/shared/Icons";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="md:flex h-screen items-center justify-center ">
          <div className="rounded-xl shadow-xl py-10 bg-gray-50 my-auto items-center">
            <div className="flex justify-center ">
              <LogoIcon></LogoIcon>
            </div>
            <Form
              formType={"login"}
              formTitle={"Login in to your account"}
              submitBtn={"Login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
