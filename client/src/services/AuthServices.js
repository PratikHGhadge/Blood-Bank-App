import store from "../redux/Store";
import { userLogin, userRegister } from "../redux/features/auth/authActions";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please privde all fields");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    alert("error accured");
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      })
    );
  } catch (error) {
    alert("error accured");
    console.log(error);
  }
};
