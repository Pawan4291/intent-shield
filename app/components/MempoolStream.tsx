"use client"

import { useEffect, useState } from "react"

export default function MempoolStream(){

const [logs,setLogs] = useState<string[]>([])

useEffect(()=>{

const interval = setInterval(()=>{

const hash = "0x"+Math.random().toString(16).substring(2,10)

setLogs(prev => [
`${hash} committing intent to pool...`,
...prev
].slice(0,6))

},1000)

return ()=>clearInterval(interval)

},[])

return(

<div className="bg-black text-green-400 font-mono text-sm p-6 rounded-xl mb-10 shadow-lg min-h-[120px]">

{logs.length === 0 && (
<div>waiting for mempool activity...</div>
)}

{logs.map((log,i)=>(
<div key={i}>{log}</div>
))}

</div>

)

}