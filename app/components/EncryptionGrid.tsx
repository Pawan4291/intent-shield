"use client"

import { useEffect, useRef } from "react"

export default function EncryptionGrid() {

const canvasRef = useRef<HTMLCanvasElement>(null)

useEffect(() => {

const canvas = canvasRef.current
if (!canvas) return

const ctx = canvas.getContext("2d")
if (!ctx) return

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let lines:number[] = []

for (let i=0;i<25;i++){
lines.push(Math.random()*canvas.width)
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.strokeStyle="rgba(255,255,255,0.08)"
ctx.lineWidth=1

lines.forEach((x,i)=>{

ctx.beginPath()
ctx.moveTo(x,0)
ctx.lineTo(x+120,canvas.height)
ctx.stroke()

lines[i]+=0.2

if(lines[i]>canvas.width){
lines[i]=-100
}

})

requestAnimationFrame(draw)

}

draw()

},[])

return (

<canvas
ref={canvasRef}
className="absolute inset-0 pointer-events-none"
/>

)
}