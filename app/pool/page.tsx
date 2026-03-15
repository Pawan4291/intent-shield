"use client"

import { intents } from "../intents"
import { useState, useEffect } from "react"

export default function PoolPage() {

const [revealPhase,setRevealPhase] = useState(false)
const [,forceUpdate] = useState(0)
const [timer,setTimer] = useState(20)
const [hashFeed,setHashFeed] = useState<string[]>([])


/* Countdown timer */

useEffect(()=>{

if(revealPhase) return

const interval = setInterval(()=>{

setTimer((t)=>{

if(t <= 1){
setRevealPhase(true)
clearInterval(interval)
return 0
}

return t - 1

})

},1000)

return ()=>clearInterval(interval)

},[revealPhase])


/* Live encrypted hash feed */

useEffect(()=>{

const interval = setInterval(()=>{

const newHash =
"0x" +
Math.random()
.toString(16)
.substring(2,14)

setHashFeed((prev)=>{

const updated = [newHash + " committing to private pool...", ...prev]

return updated.slice(0,6)

})

},1200)

return ()=>clearInterval(interval)

},[])


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

<h1 className="text-5xl font-bold text-white mb-10">
Encrypted Intent Pool
</h1>


{/* Reveal Countdown */}

<div className="mb-10">

{!revealPhase ? (

<div className="text-white text-xl font-semibold">
Reveal Phase starts in: {timer}s
</div>

) : (

<div className="text-green-200 text-xl font-semibold">
Reveal Phase Active
</div>

)}

</div>


{/* Encrypted Hash Feed */}

<div className="bg-black text-green-400 font-mono p-6 rounded-xl mb-10 shadow-lg h-32 overflow-hidden text-sm">

{hashFeed.map((h,i)=>(
<div key={i} className="animate-pulse">
{h}
</div>
))}

</div>


{/* Pool Table */}

<div className="bg-white rounded-2xl shadow-xl p-8">

<table className="w-full">

<thead>

<tr className="border-b text-gray-700">

<th className="p-4 text-left">ID</th>
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
{intent.id}
</td>


{/* DATA */}

<td className="p-4 font-mono text-blue-700">

{intent.revealed ? (

`${intent.token} ${intent.action} ${intent.amount} ${intent.condition}`

) : (

fakeHash + "..."

)}

</td>


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