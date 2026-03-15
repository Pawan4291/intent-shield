"use client"

import { motion } from "framer-motion"

export default function SuccessAnimation(){

return(

<motion.div
initial={{scale:0}}
animate={{scale:1}}
transition={{duration:0.4}}
className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
>

<motion.div
initial={{y:30,opacity:0}}
animate={{y:0,opacity:1}}
className="bg-white px-10 py-8 rounded-xl shadow-xl text-center"
>

<h2 className="text-2xl font-bold mb-2">
Intent Submitted
</h2>

<p className="text-gray-600">
Your encrypted intent has entered the pool
</p>

</motion.div>

</motion.div>

)

}