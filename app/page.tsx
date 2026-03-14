import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#58BDF6]">
      
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[80vh] text-white">
        <h1 className="text-6xl font-bold mb-6">
          IntentShield
        </h1>

        <p className="text-xl">
          Encrypted Trading Intents powered by Fairblock
        </p>
      </div>

    </main>
  )
}