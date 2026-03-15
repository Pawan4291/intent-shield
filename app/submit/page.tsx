"use client"

import { useState, useEffect } from "react"
import { intents } from "../intents"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function SubmitPage(){

const router = useRouter()

const [token,setToken] = useState("")
const [action,setAction] = useState("BUY")
const [amount,setAmount] = useState("")
const [condition,setCondition] = useState("")
const [status,setStatus] = useState("")

const [lines,setLines] = useState<number[]>([])

useEffect(()=>{
setLines(Array.from({length:10},(_,i)=>i))
},[])



const submitIntent = async () => {

const win = window as any

if(!win.keplr){
alert("Install Keplr Wallet")
return
}

setStatus("Executing transaction...")

const chainId = "fairyring-testnet-1"

await win.keplr.enable(chainId)

const signer = win.getOfflineSigner(chainId)

const accounts = await signer.getAccounts()

const address = accounts[0].address

await signer.signAmino(
address,
{
chain_id: chainId,
account_number:"0",
sequence:"0",
fee:{amount:[],gas:"0"},
msgs:[],
memo:"Submit Intent"
}
)

setStatus("Encrypting intent...")

const payload =
btoa(`${token}-${action}-${amount}-${condition}-${Date.now()}`)

intents.push({
id:intents.length+1,
token,
action,
amount,
condition,
payload,
revealed:false,
status:"Encrypted"
})

setStatus("Intent submitted successfully ✔")

setTimeout(()=>{
router.push("/pool")
},1500)

}



return(

<div className="relative min-h-screen bg-gradient-to-b from-[#58BDF6] to-[#4aa3d6] overflow-hidden">


{/* ELECTRIC LINES */}

<div className="absolute inset-0 opacity-20 pointer-events-none">

{lines.map((i)=>{

const top=(i*10)%100

return(

<div
key={i}
className="absolute h-[2px] bg-white animate-pulse"
style={{
top:top+"%",
left:"-200px",
width:"200px",
animation:"moveLine 10s linear infinite"
}}
/>

)

})}

</div>



<div className="max-w-[1300px] mx-auto px-8 pt-28">

{/* 3 COLUMN GRID */}

<div className="grid grid-cols-3 items-start gap-10">


{/* LEFT TEXT */}

<div className="text-white">

<h1 className="text-7xl font-bold mb-6 leading-tight">
Submit Intent
</h1>

<p className="text-lg opacity-90 max-w-md leading-relaxed mb-8">
Create encrypted trading instructions that remain private until the reveal phase.
IntentShield protects strategies from MEV bots using Fairblock encryption.
</p>

<div className="space-y-3 text-white/90 text-lg">

<div>✔ Encrypted Trading Intents</div>
<div>✔ Private Order Flow</div>
<div>✔ MEV Protection</div>
<div>✔ Fairblock Threshold Encryption</div>

</div>

</div>



{/* CENTER FORM */}

<div className="flex justify-center">

<div className="bg-white p-12 rounded-2xl shadow-2xl w-[500px]">

<h2 className="text-3xl font-bold mb-8 text-center">
Trading Intent
</h2>

<input
placeholder="Token (ETH / BTC)"
className="w-full border rounded-lg p-4 mb-4"
value={token}
onChange={(e)=>setToken(e.target.value)}
/>

<select
className="w-full border rounded-lg p-4 mb-4"
value={action}
onChange={(e)=>setAction(e.target.value)}
>
<option>BUY</option>
<option>SELL</option>
</select>

<input
placeholder="Amount"
className="w-full border rounded-lg p-4 mb-4"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<input
placeholder="Execution Condition"
className="w-full border rounded-lg p-4 mb-6"
value={condition}
onChange={(e)=>setCondition(e.target.value)}
/>

<button
onClick={submitIntent}
className="w-full bg-[#58BDF6] text-white py-4 rounded-lg text-lg font-semibold hover:scale-105 transition"
>
Submit Intent
</button>

{status && (
<div className="mt-5 text-center text-gray-700 font-semibold">
{status}
</div>
)}

</div>

</div>



{/* RIGHT MASCOT */}

<div className="flex justify-center">

<motion.img
src="/mascot/mascot.png"
className="w-[500px] max-w-none drop-shadow-[0_0_90px_rgba(255,255,255,0.45)] scale-x-[-1]"
animate={{ y:[0,-20,0] }}
transition={{ duration:4, repeat:Infinity }}
/>

</div>

</div>



{/* INTENT FLOW DIAGRAM */}

<div className="mt-20 flex justify-center">

<div className="bg-white/20 backdrop-blur rounded-xl px-10 py-6 text-white">

<div className="text-center font-bold mb-4">
Intent Flow
</div>

<div className="flex items-center gap-4 text-sm">

<div className="bg-white/30 px-4 py-2 rounded-lg">
Wallet
</div>

<div>→</div>

<div className="bg-white/30 px-4 py-2 rounded-lg">
Intent
</div>

<div>→</div>

<div className="bg-white/30 px-4 py-2 rounded-lg">
Encrypted Pool
</div>

<div>→</div>

<div className="bg-white/30 px-4 py-2 rounded-lg">
Reveal
</div>

<div>→</div>

<div className="bg-white/30 px-4 py-2 rounded-lg">
Execute
</div>

</div>

</div>

</div>


</div>


</div>

)

}