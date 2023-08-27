import Header from "./Header";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <>
      <div className="bg-white ">
        <div className="fixed left-0 right-0 top-0 z-10 shadow-md bg-white">
          <Header />
        </div>
        <div>
          <SideBar />
        </div>

        <div className="h-screen  overflow-y-scroll">
          <div className="w-screen h-14  left-0 right-0 top-0"></div>
          {children}{" "}
        </div>
      </div>
    </>
  );
}

export default Layout;
