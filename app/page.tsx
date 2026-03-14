"use client"

import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#58BDF6] to-[#4aa3d6]">

      {/* HERO SECTION */}

      <div className="max-w-[1400px] mx-auto px-10 pt-28 pb-24 flex items-center justify-between gap-20">

        {/* LEFT CONTENT */}

        <div className="max-w-xl">

          <h1 className="text-7xl font-bold text-white mb-8">
            IntentShield
          </h1>

          <p className="text-white/90 text-lg leading-relaxed mb-10">
            Private Order Flow Infrastructure powered by Fairblock encryption.
            Submit trading intents privately and reveal execution only when
            conditions are met.
          </p>

          <div className="flex gap-6">

            <Link href="/submit">
              <button className="bg-white text-blue-600 px-7 py-3 rounded-lg font-semibold shadow">
                Submit Intent
              </button>
            </Link>

            <Link href="/pool">
              <button className="bg-black text-white px-7 py-3 rounded-lg font-semibold">
                View Intent Pool
              </button>
            </Link>

          </div>

          <p className="text-white/60 mt-8 text-sm">
            Powered by Fairblock Encryption Infrastructure
          </p>

        </div>


        {/* MASCOT IMAGE */}

        <div className="relative">

          <Image
            src="/mascot.png"
            alt="IntentShield Mascot"
            width={420}
            height={420}
            priority
          />

        </div>

      </div>

    </div>
  )
}