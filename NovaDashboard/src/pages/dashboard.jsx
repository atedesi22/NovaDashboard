import {
  LayoutDashboard,
  MessageSquare,
  Wallet,
  Database,
  Cpu,
  Settings,
  Users,
  Activity,
  Bell,
  Search
} from "lucide-react";

export default function NovaCoreDashboard() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white flex">

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-[#0E1424] border-r border-white/5 p-6">
        <h1 className="text-2xl font-bold tracking-wider mb-10">
          <span className="text-cyan-400">N</span>ovaCore
        </h1>

        <nav className="flex flex-col gap-6 text-sm">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <SidebarItem icon={<MessageSquare size={18} />} label="NovaChat" />
          <SidebarItem icon={<Wallet size={18} />} label="NovaPay" />
          <SidebarItem icon={<Cpu size={18} />} label="NovaAI" />
          <SidebarItem icon={<Database size={18} />} label="NovaData" />
          <SidebarItem icon={<Users size={18} />} label="Users" />
          <SidebarItem icon={<Activity size={18} />} label="Analytics" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <header className="h-16 bg-[#0E1424] border-b border-white/5 flex items-center justify-between px-6">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg">
            <Search size={16} className="text-gray-400" />
            <input
              placeholder="Search modules, users..."
              className="bg-transparent outline-none text-sm placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-6">
            <Bell size={20} className="text-gray-400 cursor-pointer" />
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center font-semibold">
              PE
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 space-y-8">

          {/* Welcome */}
          <section>
            <h2 className="text-2xl font-semibold">NovaCore Control Center</h2>
            <p className="text-gray-400 mt-1">
              Unified system management layer of NovaVerse
            </p>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Active Users" value="1,240,893" />
            <StatCard title="Transactions" value="348,120" />
            <StatCard title="AI Requests" value="92,384" />
            <StatCard title="System Uptime" value="99.98%" />
          </section>

          {/* Modules Overview */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <ModuleCard
              title="NovaChat"
              description="Messaging infrastructure & real-time layer"
            />

            <ModuleCard
              title="NovaPay"
              description="Wallet & transactional system"
            />

            <ModuleCard
              title="NovaAI"
              description="AI orchestration & intelligence core"
            />

            <ModuleCard
              title="NovaData"
              description="Metadata & identity management"
            />

          </section>

        </main>
      </div>
    </div>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer transition-all duration-200 
      ${active ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

/* Stat Card */
function StatCard({ title, value }) {
  return (
    <div className="bg-[#0E1424] border border-white/5 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
    </div>
  );
}

/* Module Card */
function ModuleCard({ title, description }) {
  return (
    <div className="bg-[#0E1424] border border-white/5 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <div className="mt-4 text-cyan-400 text-sm">Manage Module →</div>
    </div>
  );
}