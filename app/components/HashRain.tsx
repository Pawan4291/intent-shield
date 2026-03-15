"use client"

import { useEffect, useState } from "react"

export default function HashRain(){

const [hashes,setHashes]=useState<string[]>([])

useEffect(()=>{

const arr=[]

for(let i=0;i<20;i++){

arr.push(
"0x"+Math.random().toString(16).substring(2,10)
)

}

setHashes(arr)

},[])

return(

<div className="absolute inset-0 pointer-events-none">

{hashes.map((h,i)=>(
<div
key={i}
className="absolute text-white text-xs opacity-20 animate-pulse"
style={{
left:Math.random()*90+"%",
top:Math.random()*80+"%"
}}
>
{h}
</div>
))}

</div>

)

}