import { Link, NavLink } from "react-router-dom";

function Navigation() {
  const navLinkClasses = ({ isActive }) =>
    `rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-slate-700 text-white shadow"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <nav className="flex items-center justify-between  border border-slate-700 bg-slate-900 px-4 py-3 shadow-lg">
      <Link
        to="/"
        className="text-lg font-bold text-white transition-colors hover:text-sky-400"
      >
        Home
      </Link>

      <div className="flex items-center gap-2">
        <NavLink to="/About" className={navLinkClasses}>
          About
        </NavLink>

        <NavLink to="/Contacts" className={navLinkClasses}>
          Contacts
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
