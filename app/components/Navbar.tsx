export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">
      
      <h1 className="text-xl font-bold text-gray-800">
        IntentShield
      </h1>

      <button className="bg-[#58BDF6] text-white px-4 py-2 rounded-lg hover:bg-[#718BD2]">
        Connect Wallet
      </button>

    </nav>
  )
}