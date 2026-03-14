"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

  const [wallet,setWallet] = useState("")

  const connectWallet = async () => {

    const win = window as any

    if(!win.keplr){
      alert("Install Keplr Wallet")
      return
    }

    const chainId = "fairyring-testnet-1"

    await win.keplr.enable(chainId)

    const signer = win.getOfflineSigner(chainId)

    const accounts = await signer.getAccounts()

    setWallet(accounts[0].address)

  }

  return(

    <div className="w-full bg-white border-b">

      <div className="w-full flex items-center justify-between px-16 py-5">

        {/* LEFT */}

        <div className="flex items-center gap-3">

          <img
            src="/fairblock.png"
            className="w-10 h-10"
          />

          <div className="text-2xl font-bold">
            IntentShield
          </div>

        </div>


        {/* CENTER */}

        <div className="flex gap-10 text-lg">

          <Link href="/">Home</Link>

          <Link href="/submit">Submit Intent</Link>

          <Link href="/pool">Intent Pool</Link>

        </div>


        {/* RIGHT */}

        {!wallet ? (

          <button
            onClick={connectWallet}
            className="bg-[#58BDF6] text-white px-6 py-3 rounded-lg"
          >
            Connect Wallet
          </button>

        ) : (

          <div className="bg-gray-100 px-4 py-2 rounded-lg">
            {wallet.slice(0,6)}...{wallet.slice(-4)}
          </div>

        )}

      </div>

    </div>

  )

}