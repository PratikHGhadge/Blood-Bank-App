import { toast } from "react-toastify";
import { UserIcon, LogoIcon } from "../Icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/login");
  };

  return (
    <>
      <div className=" hidden md:block  ">
        <div
          className="sticky top-0 z-10 flex-shrink-0 h-16  bg-white border-b  flex 
        "
        >
          <div className="flex-1 flex justify-end px-4 md:px-0">
            <div className="absolute top-0 left-0 bottom-0 right-0 my-2 ml-6">
              <LogoIcon></LogoIcon>
            </div>

            <div className="ml-4 flex mr-4 items-center md:ml-6 z-0 ">
              <div className="flex items-center  mx-4">
                <UserIcon />
                <div className="flex mx-4 text-xl text-black ">
                  <h3>Welcome_ </h3>
                  <h3>{user?.name}</h3>
                  <h3>{user?.organisationName}</h3>
                  <h3>{user?.hospitalName}</h3>
                </div>
                <span className="inline-block px-2 py-1 text-sm font-semibold text-black bg-green-400 rounded">
                  {user?.role}
                </span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-b from-red-400 to-red-500"
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
