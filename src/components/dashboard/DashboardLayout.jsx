import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  const linkClasses = ({ isActive }) =>
    `block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-sky-500 text-slate-950"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <aside className="w-64 border-r border-slate-800 bg-slate-900 p-5">
        <h1 className="mb-6 text-xl font-bold text-white">Dashboard</h1>

        <nav className="space-y-2">
          <NavLink to="/dashboard" end className={linkClasses}>
            Overview
          </NavLink>

          <NavLink to="/dashboard/account" className={linkClasses}>
            Account
          </NavLink>
        </nav>
      </aside>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
