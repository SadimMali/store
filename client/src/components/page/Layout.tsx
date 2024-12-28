import { Outlet } from "react-router";
import NavbarNav from "../home/NavbarNav";

const Layout = () => {
  return (
    <>
      <header>
        <NavbarNav />
      </header>
      <main>
        <Outlet />
      </main>
      {/* <footer>this is footer section</footer> */}
    </>
  );
};

export default Layout;
