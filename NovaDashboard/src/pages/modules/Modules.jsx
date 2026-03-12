export default function Modules() {
    const modules = [
        { name: "NovaChat", status: "Online" },
        { name: "NovaPay", status: "Online" },
        { name: "NovaAI", status: "Online" },
        { name: "NovaData", status: "Online" }
    ];

    return (
        <div>

            <h1 className="text-2xl font-semibold mb-6">Modules Control</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {modules.map((module) => (
                    <div
                        key={module.name}
                        className="bg-[#111827] border border-white/5 rounded-xl p-6"
                    >
                        <h2 className="text-lg font-semibold">{module.name}</h2>
                        <p className="text-sm text-green-400 mt-2">{module.status}</p>
                    </div>
                ))}

            </div>

        </div>
    );
}