import { NavLink } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "menu",
    path: "/menu",
  },
  {
    name: "about us",
    path: "/aboutUs",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) => {
              return isActive
                ? " text-accent border-b-2 border-accent capitalize"
                : "  capitalize font-medium hover:text-accent transition-all";
            }}
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Nav;
