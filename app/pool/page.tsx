"use client"

import { intents } from "../intents"
import { useState, useEffect } from "react"

export default function PoolPage(){

const [revealPhase,setRevealPhase] = useState(false)
const [,forceUpdate] = useState(0)

const [timer,setTimer] = useState(20)
const [hashFeed,setHashFeed] = useState<string[]>([])


/* Reveal countdown */

useEffect(()=>{

if(revealPhase) return

const interval = setInterval(()=>{

setTimer((t)=>{

if(t<=1){
setRevealPhase(true)
clearInterval(interval)
return 0
}

return t-1

})

},1000)

return ()=>clearInterval(interval)

},[revealPhase])


/* Live encrypted hash stream */

useEffect(()=>{

const interval = setInterval(()=>{

const hash =
"0x"+Math.random().toString(16).substring(2,12)

setHashFeed((prev)=>{

const updated = [hash+" committing to pool...", ...prev]

return updated.slice(0,6)

})

},1200)

return ()=>clearInterval(interval)

},[])



/* Reveal transaction */

const revealIntent = async (intent:any)=>{

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
chain_id:chainId,
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

):(

<div className="text-green-200 text-xl font-semibold">
Reveal Phase Active
</div>

)}

</div>



{/* Live hash feed */}

<div className="bg-black text-green-400 font-mono p-6 rounded-xl mb-10 shadow-lg h-32 overflow-hidden text-sm">

{hashFeed.map((h,i)=>(
<div key={i} className="animate-pulse">
{h}
</div>
))}

</div>



{/* Intent cards */}

<div className="grid grid-cols-3 gap-6">

{intents.map((intent)=>{

const fakeHash =
"0x"+
Math.random()
.toString(16)
.substring(2,18)

return(

<div
key={intent.id}
className="bg-white rounded-xl shadow-lg p-6 hover:scale-[1.02] transition"
>

<div className="text-sm text-gray-500 mb-2">
Intent #{intent.id}
</div>

<div className="font-mono text-blue-700 text-sm mb-3">

{intent.revealed ? (
`${intent.token} ${intent.action} ${intent.amount}`
) : (
fakeHash+"..."
)}

</div>

<div className="mb-4">

{intent.revealed ? (
<span className="text-green-600 font-semibold">
Revealed
</span>
) : (
<span className="text-gray-500">
Encrypted
</span>
)}

</div>

{revealPhase && !intent.revealed && (

<button
onClick={()=>revealIntent(intent)}
className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
>
Reveal
</button>

)}

</div>

)

})}

</div>

</div>

)

}