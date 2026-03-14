"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {

  const [wallet, setWallet] = useState("")

  const connectWallet = async () => {

    if (!window.keplr) {
      alert("Please install Keplr wallet")
      return
    }

    try {

      const chainId = "fairyring-testnet-1"

      await window.keplr.enable(chainId)

      const offlineSigner = window.getOfflineSigner(chainId)

      const accounts = await offlineSigner.getAccounts()

      setWallet(accounts[0].address)

    } catch (error) {
      console.log(error)
    }

  }

  const disconnectWallet = () => {
    setWallet("")
  }

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md">

      <h1 className="text-xl font-bold text-gray-800">
        IntentShield
      </h1>

      <div className="flex gap-6 items-center">

        <Link href="/">
          <p className="cursor-pointer">Home</p>
        </Link>

        <Link href="/submit">
          <p className="cursor-pointer">Submit Intent</p>
        </Link>

        <Link href="/pool">
          <p className="cursor-pointer">Intent Pool</p>
        </Link>

        {wallet ? (

          <button
            onClick={disconnectWallet}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            {wallet.slice(0,6)}...{wallet.slice(-4)}
          </button>

        ) : (

          <button
            onClick={connectWallet}
            className="bg-[#58BDF6] text-white px-4 py-2 rounded-lg"
          >
            Connect Wallet
          </button>

        )}

      </div>

    </nav>
  )
}