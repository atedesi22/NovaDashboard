import { Lock, Mail } from "lucide-react";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0F1A] text-white px-6">

            <div className="w-full max-w-md bg-[#111827] border border-white/5 rounded-2xl p-8 shadow-xl">

                <h1 className="text-2xl font-semibold mb-2 text-center">
                    NovaCore Access
                </h1>

                <p className="text-gray-400 text-sm text-center mb-6">
                    Founder Control Center
                </p>

                <form className="space-y-5">

                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <div className="flex items-center bg-[#0B0F1A] border border-white/5 rounded-lg px-3 py-2 mt-1">
                            <Mail size={18} className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                placeholder="admin@novaverse.com"
                                className="bg-transparent outline-none w-full text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Password</label>
                        <div className="flex items-center bg-[#0B0F1A] border border-white/5 rounded-lg px-3 py-2 mt-1">
                            <Lock size={18} className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="bg-transparent outline-none w-full text-sm"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-lg font-medium hover:opacity-90 transition">
                        Login
                    </button>

                </form>
            </div>

        </div>
    );
}