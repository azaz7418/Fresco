// import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import PageTransition from "../pages/PageTransition";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = () => {
  return (
    <body className=" body *:m-0 *:box-border min-h-screen flex flex-col">
      <Header />
      <div className=" ">
        <Outlet />
      </div>
      <Footer />
    </body>
  );
};

export default Layout;
