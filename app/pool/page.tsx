"use client"
import MempoolStream from "../components/MempoolStream"
import { intents } from "../intents"
import { useState } from "react"

export default function PoolPage() {

const [revealPhase,setRevealPhase] = useState(false)
const [,forceUpdate] = useState(0)

const startRevealPhase = () => {
setRevealPhase(true)
}

const revealIntent = async (intent:any) => {

const win = window as any

if(!win.keplr){
alert("Install Keplr wallet")
return
}

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
memo:"Reveal Intent"
}
)

intent.revealed = true
intent.status = "Revealed"

forceUpdate(n=>n+1)

}



return(

<div className="min-h-screen bg-gradient-to-b from-[#58BDF6] to-[#4aa3d6] p-12">


{/* HEADER */}

<div className="max-w-[1200px] mx-auto text-white mb-12">

<h1 className="text-5xl font-bold mb-4">
Encrypted Intent Pool
</h1>

<p className="opacity-90 max-w-2xl">
IntentShield mempool stores encrypted trading instructions. 
Orders remain hidden until the protocol reveal phase begins.
</p>

<MempoolStream/>

</div>



{/* STATS */}

<div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-6 mb-12">

<div className="bg-white rounded-xl p-6 shadow-lg">
<div className="text-gray-500 text-sm">Total Intents</div>
<div className="text-3xl font-bold">{intents.length}</div>
</div>

<div className="bg-white rounded-xl p-6 shadow-lg">
<div className="text-gray-500 text-sm">Encrypted</div>
<div className="text-3xl font-bold">
{intents.filter(i=>!i.revealed).length}
</div>
</div>

<div className="bg-white rounded-xl p-6 shadow-lg">
<div className="text-gray-500 text-sm">Revealed</div>
<div className="text-3xl font-bold">
{intents.filter(i=>i.revealed).length}
</div>
</div>

</div>



{/* REVEAL PHASE BUTTON */}

<div className="max-w-[1200px] mx-auto mb-8">

{!revealPhase ? (

<button
onClick={startRevealPhase}
className="bg-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
>
Start Reveal Phase
</button>

) : (

<div className="text-white text-lg font-semibold">
Reveal Phase Active
</div>

)}

</div>



{/* POOL TABLE */}

<div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-xl p-8">

<table className="w-full">

<thead>

<tr className="border-b text-gray-700">

<th className="p-4 text-left">Intent ID</th>
<th className="p-4 text-left">Encrypted Payload</th>
<th className="p-4 text-left">Status</th>
<th className="p-4 text-left">Action</th>

</tr>

</thead>

<tbody>

{intents.map((intent)=>{

const fakeHash =
"0x"+
Math.random()
.toString(16)
.substring(2,18)

return(

<tr key={intent.id} className="border-b hover:bg-gray-50 transition">

<td className="p-4 font-semibold">
#{intent.id}
</td>



{/* PAYLOAD */}

<td className="p-4 font-mono text-blue-700">

{intent.revealed ? (

`${intent.token} ${intent.action} ${intent.amount} ${intent.condition}`

) : (

fakeHash + "..."

)}

</td>



{/* STATUS */}

<td className="p-4">

{intent.revealed ? (

<span className="text-green-600 font-semibold">
Revealed
</span>

) : (

<span className="text-gray-600">
Encrypted
</span>

)}

</td>



{/* ACTION */}

<td className="p-4">

{revealPhase && !intent.revealed && (

<button
onClick={()=>revealIntent(intent)}
className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
>
Reveal
</button>

)}

</td>

</tr>

)

})}

</tbody>

</table>

</div>



</div>

)

}