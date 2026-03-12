export default function Overview() {
    return (
        <div className="space-y-6">

            <h1 className="text-2xl font-semibold">System Overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                <Stat title="Active Users" value="1,240,893" />
                <Stat title="Transactions" value="348,120" />
                <Stat title="AI Requests" value="92,384" />
                <Stat title="System Uptime" value="99.98%" />

            </div>

        </div>
    );
}

function Stat({ title, value }) {
    return (
        <div className="bg-[#111827] border border-white/5 p-6 rounded-xl">
            <p className="text-gray-400 text-sm">{title}</p>
            <h2 className="text-2xl font-semibold mt-2">{value}</h2>
        </div>
    );
}