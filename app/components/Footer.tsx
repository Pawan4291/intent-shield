export default function Footer() {

return (

<div className="bg-white border-t py-3">

<div className="max-w-4xl mx-auto flex items-center justify-between">


{/* CENTER SOCIAL ICONS */}

<div className="flex gap-8 text-xl mx-auto">

<a href="https://fairblock.network" target="_blank">
🌐
</a>

<a href="https://x.com/0xfairblock" target="_blank">
𝕏
</a>

<a href="https://discord.gg/fairblock" target="_blank">
💬
</a>

</div>


{/* BUILDER CREDIT */}

<div className="absolute right-10 text-sm text-gray-500">

Built by{" "}
<a
href="https://x.com/Pawan2001564157"
target="_blank"
className="underline"
>
𝕏 Pawan
</a>

</div>


</div>

</div>

)

}