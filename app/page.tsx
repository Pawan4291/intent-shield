"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import EncryptionGrid from "./components/EncryptionGrid"
import HashRain from "./components/HashRain"

export default function Home() {

return (

<div className="relative min-h-screen bg-gradient-to-b from-[#58BDF6] to-[#4aa3d6]">
  <EncryptionGrid/>
<HashRain/>

{/* HERO */}

<div className="max-w-[1300px] mx-auto grid grid-cols-2 items-center gap-16 pt-32 pb-24 px-8">


{/* LEFT */}

<div>

<h1 className="text-8xl font-bold text-white leading-tight">
IntentShield
</h1>

<p className="text-xl text-white mt-6 max-w-xl leading-relaxed">
IntentShield is a private order flow layer powered by Fairblock encryption.
Users submit trading intents privately while conditions remain hidden until
the reveal phase protecting strategies from MEV and front-running bots.
</p>

<div className="flex gap-6 mt-10">

<Link href="/submit">
<button className="bg-white text-[#58BDF6] px-10 py-4 rounded-xl text-lg font-semibold shadow-xl hover:scale-105 transition">
Submit Intent
</button>
</Link>

<Link href="/pool">
<button className="bg-black text-white px-10 py-4 rounded-xl text-lg shadow-xl hover:scale-105 transition">
View Intent Pool
</button>
</Link>

</div>

<p className="text-white opacity-70 mt-10">
Powered by Fairblock Encryption Infrastructure
</p>

</div>


{/* RIGHT MASCOT */}

<div className="flex justify-center">

<motion.img
src="/mascot/mascot.png"
className="w-[520px] drop-shadow-[0_0_60px_rgba(255,255,255,0.35)]"
animate={{ y: [0,-25,0] }}
transition={{ duration:4, repeat:Infinity }}
/>

</div>

</div>


{/* FEATURES */}

<div className="bg-white py-24">

<div className="max-w-[1200px] mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-20">
Why IntentShield
</h2>

<div className="grid grid-cols-4 gap-8">


<div className="p-8 border rounded-xl shadow-md hover:shadow-xl transition">
<h3 className="font-bold text-lg mb-3">MEV Protection</h3>
<p className="text-gray-600">
Hide trading strategies until reveal phase so bots cannot front-run orders.
</p>
</div>


<div className="p-8 border rounded-xl shadow-md hover:shadow-xl transition">
<h3 className="font-bold text-lg mb-3">Encrypted Intents</h3>
<p className="text-gray-600">
Orders are encrypted before entering the intent pool.
</p>
</div>


<div className="p-8 border rounded-xl shadow-md hover:shadow-xl transition">
<h3 className="font-bold text-lg mb-3">Commit-Reveal Model</h3>
<p className="text-gray-600">
Trading conditions remain hidden until the reveal phase.
</p>
</div>


<div className="p-8 border rounded-xl shadow-md hover:shadow-xl transition">
<h3 className="font-bold text-lg mb-3">Decentralized Execution</h3>
<p className="text-gray-600">
Trades execute only when the defined conditions are met.
</p>
</div>

</div>

</div>

</div>


{/* HOW IT WORKS */}

<div className="py-24 text-white">

<div className="max-w-[1200px] mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-20">
How It Works
</h2>

<div className="grid grid-cols-4 gap-10">

<div className="bg-white/20 p-8 rounded-xl backdrop-blur">
<h3 className="font-bold text-lg mb-2">1. Submit Intent</h3>
<p className="opacity-90">
User submits encrypted trade instructions.
</p>
</div>

<div className="bg-white/20 p-8 rounded-xl backdrop-blur">
<h3 className="font-bold text-lg mb-2">2. Intent Pool</h3>
<p className="opacity-90">
Orders enter the encrypted private mempool.
</p>
</div>

<div className="bg-white/20 p-8 rounded-xl backdrop-blur">
<h3 className="font-bold text-lg mb-2">3. Reveal Phase</h3>
<p className="opacity-90">
Protocol allows decryption during reveal window.
</p>
</div>

<div className="bg-white/20 p-8 rounded-xl backdrop-blur">
<h3 className="font-bold text-lg mb-2">4. Execution</h3>
<p className="opacity-90">
Trades execute once conditions are satisfied.
</p>
</div>

</div>

</div>

</div>


{/* EXTRA SECTION */}

<div className="bg-white py-24">

<div className="max-w-[1100px] mx-auto text-center px-6">

<h2 className="text-4xl font-bold mb-8">
Private Intent Infrastructure
</h2>

<p className="text-gray-600 max-w-2xl mx-auto">
IntentShield demonstrates how encrypted intent pools can prevent MEV extraction
while preserving decentralized execution. Built on Fairblock's threshold encryption
network.
</p>

</div>

</div>


{/* CTA */}

<div className="bg-black text-white py-24">

<div className="max-w-4xl mx-auto text-center">

<h2 className="text-5xl font-bold mb-6">
Start Using IntentShield
</h2>

<p className="opacity-80 mb-10">
Submit encrypted intents and experience private order flow.
</p>

<Link href="/submit">
<button className="bg-[#58BDF6] px-10 py-5 rounded-xl text-lg hover:scale-105 transition">
Submit Intent
</button>
</Link>

</div>

</div>


</div>

)
}