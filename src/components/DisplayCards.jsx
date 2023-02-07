import React from "react"
import NFL from "../assets/NFL.jpg"
import MLB from "../assets/MLB.jpg"
import NBA from "../assets/NBA.jpg"

const DisplayCards = () => {
	return (
		<div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
			<div className="rounded-xl relative">
				<div className="absolute w-full h-full bg-black/50 text-white rounded-xl ">
					<p className="font-bold text-2xl px-2 pt-4">NFL</p>
					<button className="border-white bg-white/60 text-black font-bold mx-2 absolute bottom-4">Shop</button>
				</div>
				<img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={NFL} alt="" />
			</div>

            <div className="rounded-xl relative">
				<div className="absolute w-full h-full bg-black/50 text-white rounded-xl ">
					<p className="font-bold text-2xl px-2 pt-4">MLB</p>
					<button className="border-white bg-white/60 text-black font-bold mx-2 absolute bottom-4">Shop</button>
				</div>
				<img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={MLB} alt="" />
			</div>

            <div className="rounded-xl relative">
				<div className="absolute w-full h-full bg-black/50 text-white rounded-xl ">
					<p className="font-bold text-2xl px-2 pt-4">NBA</p>
					<button className="border-white bg-white/60 text-black font-bold mx-2 absolute bottom-4">Shop</button>
				</div>
				<img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={NBA} alt="" />
			</div>
		</div>
        
	)
}

export default DisplayCards
