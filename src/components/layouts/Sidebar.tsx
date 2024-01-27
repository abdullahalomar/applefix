import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-slate-300 h-screen col-span-2 sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "bg-slate-400 rounded-md p-2 text-center font-semibold hover:bg-slate-500 mb-2 flex justify-center items-center gap-2",
              {
                "hover:bg-slate-500 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "bg-slate-400 rounded-md p-2 text-center font-semibold hover:bg-slate-500 mb-2 flex justify-center items-center gap-2",
              {
                "hover:bg-slate-500 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "bg-slate-400 rounded-md p-2 text-center font-semibold hover:bg-slate-500 mb-2 flex justify-center items-center gap-2",
              {
                "hover:bg-slate-500 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
