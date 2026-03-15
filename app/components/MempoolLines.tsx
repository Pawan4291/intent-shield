"use client"

import { useEffect, useState } from "react"

export default function MempoolLines(){

const [lines,setLines] = useState<number[]>([])

useEffect(()=>{

setLines(Array.from({length:14},(_,i)=>i))

},[])

return(

<div className="absolute inset-0 pointer-events-none overflow-hidden">

{lines.map((i)=>{

const top = Math.random()*100

return(

<div
key={i}
className="absolute h-[2px] bg-white/10 animate-pulse"
style={{
top: top+"%",
left: "-200px",
width: "200px",
animation: "moveLine 12s linear infinite"
}}
/>

)

})}

</div>

)

}