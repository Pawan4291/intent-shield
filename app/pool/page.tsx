"use client"

import { intents } from "../intents"
import { useState } from "react"

export default function PoolPage() {

  const [revealPhase, setRevealPhase] = useState(false)
  const [, forceUpdate] = useState(0)

  const startRevealPhase = () => {
    setRevealPhase(true)
  }

  const revealIntent = async (intent:any) => {

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

    await signer.signAmino(
      address,
      {
        chain_id: chainId,
        account_number: "0",
        sequence: "0",
        fee: { amount: [], gas: "0" },
        msgs: [],
        memo: "Reveal Intent"
      }
    )

    intent.revealed = true
    intent.status = "Revealed"

    forceUpdate(n => n + 1)

  }

  return (

    <div className="min-h-screen bg-[#58BDF6] p-10">

      <h1 className="text-4xl font-bold text-white mb-10">
        Intent Pool
      </h1>

      <div className="mb-6">

        {!revealPhase ? (

          <button
            onClick={startRevealPhase}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg"
          >
            Start Reveal Phase
          </button>

        ) : (

          <div className="text-white font-semibold">
            Reveal Phase Active
          </div>

        )}

      </div>

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

                  {revealPhase && !intent.revealed && (

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