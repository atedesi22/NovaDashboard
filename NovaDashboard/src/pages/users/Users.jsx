export default function Users() {

    const users = [
        { id: 1, name: "Paul Emmanuel", role: "Founder" },
        { id: 2, name: "Admin Ops", role: "Admin" },
        { id: 3, name: "Data Analyst", role: "Analyst" }
    ]

    return (
        <div>

            <h1 className="text-2xl font-semibold mb-6">Users Management</h1>

            <div className="bg-[#111827] border border-white/5 rounded-xl overflow-hidden">

                <table className="w-full text-left text-sm">

                    <thead className="border-b border-white/5 text-gray-400">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Role</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-white/5">
                                <td className="p-4">{user.name}</td>
                                <td className="p-4 text-purple-400">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    )
}