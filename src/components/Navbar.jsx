import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { BsFillCartFill } from "react-icons/bs"
import {
	FaFootballBall,
	FaBasketballBall,
	FaBaseballBall,
	FaHockeyPuck,
} from "react-icons/fa"
import { MdCatchingPokemon } from "react-icons/md"

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false)
	return (
		<div className="max-w-[1640px] mx-auto flex justify-between">
			{/* Left Side */}
			<div className="flex items-center m-2">
				<div
					onClick={() => setToggleNav(!toggleNav)}
					className="cursor-pointer"
				>
					<AiOutlineMenu size={35} />
				</div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl">
					All Star <span className="font-bold italic">Sports Cards</span>
				</h1>
			</div>
			{/* Search */}
			<div className="bg-gray-300 rounded-full items-center flex px-2 w-[200px] sm:w-[300px] lg:w-[500px] my-2">
				<AiOutlineSearch size={20} />
				<input
					className="bg-transparent p-2 w-full"
					type="text"
					placeholder="Search Cards"
				></input>
			</div>
			<button className="bg-black text-white hidden md:flex rounded-full items-center py-2 m-2">
				<BsFillCartFill size={20} className="mr-2" />
				Cart
			</button>
			{toggleNav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			<div
				className={
					toggleNav
						? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-400"
						: "fixed top-0 left-[100%] w-[300px] h-screen bg-white duration-400"
				}
			>
				<AiOutlineClose
					onClick={() => setToggleNav(!toggleNav)}
					size={30}
					className="absolute right-4 top-4 cursor-pointer"
				/>
				<h2 className="text-2xl p-4">
					All-Star <span className="font-bold italic">Sports Cards</span>
				</h2>
				<nav>
					<ul className="flex flex-col p-6 text-gray-750">
						<li className="text-xl py-4 flex">
							<FaFootballBall size={30} /> Football
						</li>
						<li className="text-xl py-4 flex">
							<FaBasketballBall size={30} /> Basketball
						</li>
						<li className="text-xl py-4 flex">
							<FaBaseballBall size={30} /> Baseball
						</li>
						<li className="text-xl py-4 flex">
							<FaHockeyPuck size={30} /> Hockey
						</li>
						<li className="text-xl py-4 flex">
							<MdCatchingPokemon size={32} /> Pokemon
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
