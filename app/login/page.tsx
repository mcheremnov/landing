export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center bg-[#e0e0e0] text-[#063833]">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border-2 border-[#063833] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063833]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border-2 border-[#063833] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#063833]"
                    />
                    <button className="border-2 border-[#063833] text-[#063833] px-6 py-2 rounded-lg hover:bg-[#063833] hover:text-white transition">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
