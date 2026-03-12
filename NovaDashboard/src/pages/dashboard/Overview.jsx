import { Users, Wallet, Cpu, Server } from "lucide-react";

export default function Overview() {

    return (
        <div className="space-y-8">

            {/* TITLE */}
            <div>
                <h1 className="text-xl md:text-2xl font-semibold">
                    System Overview
                </h1>
                <p className="text-gray-400 text-sm">
                    NovaVerse infrastructure status
                </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

                <Stat icon={Users} title="Active Users" value="1.2M" />
                <Stat icon={Wallet} title="Transactions" value="348K" />
                <Stat icon={Cpu} title="AI Requests" value="92K" />
                <Stat icon={Server} title="System Uptime" value="99.98%" />

            </div>

            {/* PANELS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="bg-[#111827] border border-white/5 rounded-xl p-6">
                    <h2 className="font-semibold mb-4">System Status</h2>

                    <div className="space-y-3 text-sm">

                        <Status label="API Gateway" />
                        <Status label="Database Cluster" />
                        <Status label="NovaAI Engine" />
                        <Status label="Payment Processor" />

                    </div>
                </div>

                <div className="bg-[#111827] border border-white/5 rounded-xl p-6">
                    <h2 className="font-semibold mb-4">Recent Activity</h2>

                    <div className="space-y-3 text-sm text-gray-400">

                        <p>User login detected</p>
                        <p>NovaPay transaction executed</p>
                        <p>NovaAI inference completed</p>
                        <p>Module NovaChat restarted</p>

                    </div>
                </div>

            </div>

        </div>
    )
}

function Stat({ icon: Icon, title, value }) {

    return (
        <div className="bg-[#111827] border border-white/5 rounded-xl p-5 flex items-center gap-4">

            <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400">
                <Icon size={20} />
            </div>

            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <h2 className="font-semibold">{value}</h2>
            </div>

        </div>
    )
}

function Status({ label }) {

    return (
        <div className="flex justify-between">

            <span className="text-gray-400">{label}</span>

            <span className="text-green-400">
                Operational
            </span>

        </div>
    )
}