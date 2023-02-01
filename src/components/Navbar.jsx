import React from "react"
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
	return (
		<div className="max-w-[1640px] mx-auto flex justify-between">
			{/* Left Side */}
			<div className="flex items-center">
				<div className="cursor-pointer">
					<AiOutlineMenu size={35} />
				</div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl">
					Hello <span>World</span>
				</h1>
			</div>
		</div>
	)
}

export default Navbar
