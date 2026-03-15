"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { intents } from "../intents"
import CryptoJS from "crypto-js"

export default function SubmitPage(){

const router = useRouter()

const [token,setToken] = useState("")
const [action,setAction] = useState("BUY")
const [amount,setAmount] = useState("")
const [condition,setCondition] = useState("")
const [loading,setLoading] = useState(false)
const [step,setStep] = useState("")

const submitIntent = async () => {

try{

setLoading(true)

setStep("Encrypting intent...")

await new Promise(r => setTimeout(r,1000))

const payload = `${token}|${action}|${amount}|${condition}`

const encrypted = CryptoJS.SHA256(payload).toString()

setStep("Connecting wallet...")

const win = window as any

if(!win.keplr){
alert("Install Keplr Wallet")
setLoading(false)
return
}

const chainId = "fairyring-testnet-1"

await win.keplr.enable(chainId)

const signer = win.getOfflineSigner(chainId)

const accounts = await signer.getAccounts()

const address = accounts[0].address

setStep("Waiting for wallet signature...")

await signer.signAmino(
address,
{
chain_id: chainId,
account_number: "0",
sequence: "0",
fee: { amount: [], gas: "0" },
msgs: [],
memo: "Commit Encrypted Intent"
}
)

setStep("Broadcasting encrypted intent...")

await new Promise(r => setTimeout(r,1000))

intents.push({
id: intents.length + 1,
token,
action,
amount,
condition,
payload: encrypted,
status: "Encrypted",
revealed: false
})

setStep("Intent successfully committed")

await new Promise(r => setTimeout(r,1200))

router.push("/pool")

}catch(e){

alert("Transaction cancelled")

setLoading(false)

}

}

return(

<div className="min-h-screen bg-[#58BDF6] flex items-center justify-center p-10">

<div className="bg-white rounded-xl shadow-xl p-10 w-[500px]">

<h1 className="text-3xl font-bold mb-6">
Submit Trading Intent
</h1>

<input
className="border w-full p-3 rounded mb-4"
placeholder="Token (ETH / BTC)"
value={token}
onChange={(e)=>setToken(e.target.value)}
/>

<select
className="border w-full p-3 rounded mb-4"
value={action}
onChange={(e)=>setAction(e.target.value)}
>
<option>BUY</option>
<option>SELL</option>
</select>

<input
className="border w-full p-3 rounded mb-4"
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<input
className="border w-full p-3 rounded mb-6"
placeholder="Execution Condition"
value={condition}
onChange={(e)=>setCondition(e.target.value)}
/>

<button
onClick={submitIntent}
disabled={loading}
className="bg-[#58BDF6] text-white w-full py-3 rounded-lg"
>
Submit Intent
</button>

{loading && (

<div className="mt-6 text-center">

<div className="animate-pulse text-blue-600 font-semibold">
{step}
</div>

</div>

)}

</div>

</div>

)

}