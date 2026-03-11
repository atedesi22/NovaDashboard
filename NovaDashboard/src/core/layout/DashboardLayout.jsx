// src/core/layout/DashboardLayout.jsx

import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white flex">
      
      {/* Sidebar ici */}
      
      <div className="flex-1 flex flex-col">
        
        {/* Topbar ici */}

        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}