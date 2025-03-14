import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className=" py-8 xl:py-6  md:py-6 text-black">
      <div className=" container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <h2 className=" text-4xl font-semibold">
            frescc<span className=" text-accent">.</span>
          </h2>
        </Link>

        {/* desktop nav */}

        <div className=" hidden md:flex items-center gap-8">
          <Nav />
          <NavLink to="/contact">
            <button className=" button">Reservation</button>
          </NavLink>
        </div>

        {/* mobile nav */}
        <div className="md:hidden z-40">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
