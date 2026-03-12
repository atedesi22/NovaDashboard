export default function Finance() {
    return (
        <div>

            <h1 className="text-2xl font-semibold mb-6">Financial Core</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <FinanceCard title="Total Volume" value="$2.3M" />
                <FinanceCard title="Transactions Today" value="4,839" />
                <FinanceCard title="Flagged Transactions" value="12" />

            </div>

        </div>
    );
}

function FinanceCard({ title, value }) {
    return (
        <div className="bg-[#111827] border border-white/5 rounded-xl p-6">
            <p className="text-gray-400 text-sm">{title}</p>
            <h2 className="text-2xl font-semibold mt-2">{value}</h2>
        </div>
    )
}