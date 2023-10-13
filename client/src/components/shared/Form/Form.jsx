import React, { useState } from "react";
import { InputType } from "./InputType";
import { handleLogin, handleRegister } from "../../../services/AuthServices";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const roles = [
  { id: "admin", title: "Admin" },
  { id: "oraganisation", title: "Oraganisation" },
  { id: "donar", title: "Donar" },
  { id: "hospital", title: "Hospital" },
];

function Form({ formType, formTitle, submitBtn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const history = useNavigate();
  return (
    <div className="">
      <form
        onSubmit={(e) => {
          if (formType === "login") {
            return handleLogin(e, email, password, role, history);
          } else {
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organisationName,
              address,
              hospitalName,
              website,
              history
            );
          }
        }}
        className=" shadow-x-xl  px-4 py-8 rounded-lg"
      >
        <div className="text-center mb-6">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {formTitle}
          </h2>
        </div>
        {/* Radio buttons */}
        <fieldset className="my-4">
          <legend className="sr-only">Role selection</legend>
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
            {roles.map((roles) => (
              <div key={roles.id} className="flex items-center">
                <input
                  id={roles.id}
                  value={roles.id}
                  name="notification-method"
                  type="radio"
                  defaultChecked={roles.id === "doonar"}
                  onClick={(e) => {
                    setRole(e.target.value);
                  }}
                  className="focus:ring-black h-4 w-4 text-black border-gray-300"
                />
                <label
                  htmlFor={roles.id}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {roles.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
        {/* switch statement */}
        {(() => {
          // eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* remaining register fields */}
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}

                  {role === "oraganisation" && (
                    <InputType
                      labelText={"organisationName"}
                      labelFor={"forOrganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"HospitalName"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  <InputType
                    labelText={"Website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full mt-5 bg-black flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black-600 hover:bg-black "
        >
          {submitBtn}
        </motion.button>
        {formType === "login" ? (
          <p className="mt-4 text-center text-sm text-gray-600">
            Not registerd yet ?{" "}
            <Link
              to="/register"
              className="font-medium text-black hover:text-black"
            >
              Register!
            </Link>
          </p>
        ) : (
          <p className="mt-4 text-center text-sm text-gray-600">
            Already User Please{" "}
            <Link
              to="/login"
              className="font-medium text-black hover:text-black"
            >
              Login!
            </Link>
          </p>
        )}
      </form>
    </div>
  );
}

export default Form;
