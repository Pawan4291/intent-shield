"use client"

import { useState } from "react"

export default function PoolPage() {

  const [intents] = useState([
    {
      id: 1,
      token: "ETH",
      action: "Buy",
      amount: "1",
      condition: "Price < 2800",
      status: "Encrypted"
    },
    {
      id: 2,
      token: "BTC",
      action: "Sell",
      amount: "2",
      condition: "Price > 70000",
      status: "Encrypted"
    }
  ])

  return (
    <div className="min-h-screen bg-[#58BDF6] p-10">

      <h1 className="text-4xl font-bold text-white mb-10">
        Intent Pool
      </h1>

      <div className="bg-white rounded-xl shadow p-6">

        <table className="w-full">

          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Token</th>
              <th className="p-3 text-left">Action</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Condition</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>

            {intents.map((intent) => (

              <tr key={intent.id} className="border-b">

                <td className="p-3">{intent.id}</td>
                <td className="p-3">{intent.token}</td>
                <td className="p-3">{intent.action}</td>
                <td className="p-3">{intent.amount}</td>
                <td className="p-3">{intent.condition}</td>
                <td className="p-3 text-blue-600">{intent.status}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}