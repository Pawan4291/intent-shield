"use client"

import { useState } from "react"
import { intents } from "../intents"
import { useRouter } from "next/navigation"
import CryptoJS from "crypto-js"

export default function SubmitIntent() {

  const router = useRouter()

  const [token, setToken] = useState("")
  const [action, setAction] = useState("")
  const [amount, setAmount] = useState("")
  const [condition, setCondition] = useState("")

  const submitIntent = async () => {

    const win = window as any

    if (!win.keplr) {
      alert("Install Keplr wallet")
      return
    }

    const chainId = "fairyring-testnet-1"

    await win.keplr.enable(chainId)

    const signer = win.getOfflineSigner(chainId)

    const accounts = await signer.getAccounts()

    const address = accounts[0].address

    const message = {
      token,
      action,
      amount,
      condition
    }

    await signer.signAmino(
      address,
      {
        chain_id: chainId,
        account_number: "0",
        sequence: "0",
        fee: { amount: [], gas: "0" },
        msgs: [],
        memo: JSON.stringify(message)
      }
    )

    const rawIntent = `${token}-${action}-${amount}-${condition}`

    const encryptedIntent = CryptoJS.SHA256(rawIntent).toString()

    const newIntent = {
      id: intents.length + 1,
      token,
      action,
      amount,
      condition,
      payload: encryptedIntent,
      status: "Encrypted",
      revealed: false
    }

    intents.push(newIntent)

    router.push("/pool")

  }

  return (

    <div className="min-h-screen bg-[#58BDF6] flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold text-white mb-8">
        Submit Encrypted Intent
      </h1>

      <div className="bg-white p-8 rounded-xl shadow w-[400px]">

        <input
          placeholder="Token (ETH)"
          className="border p-2 w-full mb-4"
          onChange={(e)=>setToken(e.target.value)}
        />

        <input
          placeholder="Action (Buy / Sell)"
          className="border p-2 w-full mb-4"
          onChange={(e)=>setAction(e.target.value)}
        />

        <input
          placeholder="Amount"
          className="border p-2 w-full mb-4"
          onChange={(e)=>setAmount(e.target.value)}
        />

        <input
          placeholder="Condition (Price < 2800)"
          className="border p-2 w-full mb-6"
          onChange={(e)=>setCondition(e.target.value)}
        />

        <button
          onClick={submitIntent}
          className="bg-[#58BDF6] text-white px-4 py-2 rounded w-full"
        >
          Submit Intent
        </button>

      </div>

    </div>

  )
}