import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Boxes,
  Users,
  Wallet,
  FileText,
  Menu,
  X
} from "lucide-react";

export default function DashboardLayout() {

  const location = useLocation();
  const [open, setOpen] = useState(false)

  const navItem = (path, label, Icon) => (
    <Link
      to={path}
      onClick={() => setOpen(false)}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition
      ${location.pathname === path
          ? "bg-blue-600 text-white"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
        }`}
    >
      <Icon size={18} />
      {label}
    </Link>
  )

  return (
    <div className="flex min-h-screen bg-[#0B0F1A] text-white">

      {/* MOBILE SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">
          <div className="w-64 bg-[#111827] h-full p-6">

            <div className="flex justify-between items-center mb-8">
              <h1 className="font-bold">NovaCore</h1>
              <X onClick={() => setOpen(false)} className="cursor-pointer" />
            </div>

            <nav className="flex flex-col gap-3">
              {navItem("/", "Overview", LayoutDashboard)}
              {navItem("/modules", "Modules", Boxes)}
              {navItem("/users", "Users", Users)}
              {navItem("/finance", "Finance", Wallet)}
              {navItem("/logs", "Logs", FileText)}
            </nav>

          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex w-64 bg-[#111827] border-r border-white/5 p-6 flex-col">

        <h1 className="font-bold text-lg mb-8">
          NovaCore
        </h1>

        <nav className="flex flex-col gap-3">
          {navItem("/", "Overview", LayoutDashboard)}
          {navItem("/modules", "Modules", Boxes)}
          {navItem("/users", "Users", Users)}
          {navItem("/finance", "Finance", Wallet)}
          {navItem("/logs", "Logs", FileText)}
        </nav>

      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-6 bg-[#111827]">

          <div className="flex items-center gap-3">

            {/* MOBILE MENU BUTTON */}
            <Menu
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(true)}
            />

            <p className="text-sm text-gray-400">
              NovaCore Control Center
            </p>

          </div>

          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-sm font-semibold">
            PE
          </div>

        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-6">
          <Outlet />
        </main>

      </div>

    </div>
  )
}