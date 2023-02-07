import React from "react"
import MainImg from "../assets/MainImg.jpg"

const Main = () => {
	return (
		<div className="max-w-[1640px] mx-auto p-4">
			<div className="max-h-[500px] relative">
				<div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
						All <span className="text-orange-500">Star</span>
					</h1>
					<h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
						Sports <span className="text-orange-500">Cards</span>
					</h1>
				</div>
				<img className="w-full max-h-[500px] object-cover" src={MainImg} alt="/" />
			</div>
		</div>
	)
}

export default Main
