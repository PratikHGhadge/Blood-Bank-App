import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div>
        <SideBar />
      </div>
      <div className="">{children} </div>
    </>
  );
}

export default Layout;
