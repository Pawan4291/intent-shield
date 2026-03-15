"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {

return (

<div className="relative min-h-screen bg-gradient-to-b from-[#58BDF6] to-[#4aa3d6]">


{/* MOVING BACKGROUND LINES */}

<div className="absolute inset-0 overflow-hidden">

{Array.from({ length: 20 }).map((_, i) => (

<div
key={i}
className="absolute h-[2px] bg-white/30 animate-pulse"
style={{
top: Math.random() * 100 + "%",
left: -200,
width: 200 + Math.random() * 200,
animation: `moveLine ${8 + Math.random() * 6}s linear infinite`
}}
/>

))}

</div>


{/* HERO SECTION */}

<div className="w-full max-w-[1400px] mx-auto grid grid-cols-2 gap-20 items-center pt-36 pb-32 px-16">


{/* LEFT CONTENT */}

<div>

<h1 className="text-8xl font-bold text-white leading-tight">
IntentShield
</h1>

<p className="text-xl text-white mt-6 max-w-xl">
Private Order Flow Infrastructure powered by Fairblock encryption.
Submit trading intents privately and reveal execution only when conditions are met.
</p>

<div className="flex gap-6 mt-10">


<Link
href="/submit"
className="bg-white text-[#58BDF6] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
>
Submit Intent
</Link>


<Link
href="/pool"
className="bg-black text-white px-8 py-4 rounded-xl text-lg shadow-lg hover:scale-105 transition"
>
View Intent Pool
</Link>


</div>

<div className="mt-10 text-white text-sm opacity-70">
Powered by Fairblock Encryption Infrastructure
</div>

</div>


{/* RIGHT MASCOT */}

<div className="relative flex justify-center">


<motion.img
src="/mascot/mascot.png"
className="w-[500px] drop-shadow-[0_0_60px_rgba(255,255,255,0.4)]"
animate={{ y: [0, -20, 0] }}
transition={{ duration: 4, repeat: Infinity }}
/>


{/* FLOATING HASHES */}

<div className="absolute inset-0 pointer-events-none">

{Array.from({ length: 12 }).map((_, i) => (

<div
key={i}
className="text-[10px] text-white opacity-20 animate-pulse"
style={{
position: "absolute",
left: 300 + Math.random() * 200,
top: Math.random() * 350
}}
>

0x{Math.random().toString(16).slice(2,8)}

</div>

))}

</div>

</div>

</div>



{/* WHAT IS INTENTSHIELD */}

<div className="bg-white py-24">

<div className="max-w-6xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold mb-10">
What is IntentShield?
</h2>

<p className="text-gray-600 text-lg max-w-3xl mx-auto">
IntentShield is a prototype infrastructure built on Fairblock that allows
users to submit encrypted trading intents. These intents remain private
until the reveal phase, protecting strategies from MEV and front-running.
</p>

</div>

</div>



{/* WHY SECTION */}

<div className="bg-white py-20">

<div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-10">


<div className="p-8 rounded-xl shadow-lg border">

<h3 className="text-xl font-bold mb-4">
Encrypted Orders
</h3>

<p className="text-gray-600">
Trading instructions are encrypted before entering the intent pool,
keeping strategies private.
</p>

</div>


<div className="p-8 rounded-xl shadow-lg border">

<h3 className="text-xl font-bold mb-4">
Reveal Phase
</h3>

<p className="text-gray-600">
Orders are decrypted only during a reveal phase, preventing front-running attacks.
</p>

</div>


<div className="p-8 rounded-xl shadow-lg border">

<h3 className="text-xl font-bold mb-4">
Secure Execution
</h3>

<p className="text-gray-600">
After reveal, trades execute only when the defined conditions are satisfied.
</p>

</div>


</div>

</div>



{/* HOW IT WORKS */}

<div className="py-28 text-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-16">
How It Works
</h2>

<div className="grid grid-cols-4 gap-8">


<div className="bg-white/20 p-8 rounded-xl backdrop-blur">

<h3 className="font-bold text-lg mb-2">
1. Submit Intent
</h3>

<p className="text-sm opacity-90">
Users submit encrypted trading instructions.
</p>

</div>


<div className="bg-white/20 p-8 rounded-xl backdrop-blur">

<h3 className="font-bold text-lg mb-2">
2. Encrypted Pool
</h3>

<p className="text-sm opacity-90">
Intents enter the private encrypted mempool.
</p>

</div>


<div className="bg-white/20 p-8 rounded-xl backdrop-blur">

<h3 className="font-bold text-lg mb-2">
3. Reveal Phase
</h3>

<p className="text-sm opacity-90">
Protocol allows decryption during reveal phase.
</p>

</div>


<div className="bg-white/20 p-8 rounded-xl backdrop-blur">

<h3 className="font-bold text-lg mb-2">
4. Execution
</h3>

<p className="text-sm opacity-90">
Trades execute when conditions are met.
</p>

</div>


</div>

</div>

</div>



{/* CTA */}

<div className="bg-black text-white py-24">

<div className="max-w-6xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-6">
Start Using IntentShield
</h2>

<p className="opacity-80 mb-10">
Submit encrypted trading intents today.
</p>

<Link
href="/submit"
className="bg-[#58BDF6] px-8 py-4 rounded-xl text-lg hover:scale-105 transition"
>
Submit Intent
</Link>

</div>

</div>


</div>

)
}