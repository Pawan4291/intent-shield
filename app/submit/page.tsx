"use client"

import { useState } from "react"

export default function SubmitIntent() {

  const [token, setToken] = useState("")
  const [action, setAction] = useState("")
  const [amount, setAmount] = useState("")
  const [condition, setCondition] = useState("")

  const submitIntent = () => {

    const intent = {
      token,
      action,
      amount,
      condition
    }

    console.log("Intent Submitted:", intent)

    alert("Intent Submitted (simulation)")
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