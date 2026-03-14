"use client"

import { intents } from "../intents"
import { useState } from "react"

export default function PoolPage() {

  const [, forceUpdate] = useState(0)

  const revealIntent = (intent:any) => {
    intent.revealed = true
    intent.status = "Revealed"
    forceUpdate(n => n + 1)
  }

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
              <th className="p-3 text-left">Data</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>

          </thead>

          <tbody>

            {intents.map((intent) => (

              <tr key={intent.id} className="border-b">

                <td className="p-3">{intent.id}</td>

                <td className="p-3 font-mono">

                  {intent.revealed ? (
                    `${intent.token} ${intent.action} ${intent.amount} ${intent.condition}`
                  ) : (
                    intent.payload.slice(0,25) + "..."
                  )}

                </td>

                <td className="p-3">{intent.status}</td>

                <td className="p-3">

                  {!intent.revealed && (
                    <button
                      onClick={() => revealIntent(intent)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Reveal
                    </button>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )
}