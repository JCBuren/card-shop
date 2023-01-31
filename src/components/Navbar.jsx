import React from "react"
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {
	return (
		<div>
			{/* Left Side */}
			<div>
				<div>
					<AiOutlineMenu size={35} />
				</div>
				<h1>
					Hello <span>World</span>
				</h1>
			</div>
		</div>
	)
}

export default Navbar
