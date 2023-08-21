import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <>
      <div className="header ">
        <Header />
      </div>
      <div>
        <SideBar />
      </div>
      <div className="bg-gradient-to-b from-red-400 to-pink-100 h-screen overflow-y-scroll">
        {children}{" "}
      </div>
    </>
  );
}

export default Layout;
