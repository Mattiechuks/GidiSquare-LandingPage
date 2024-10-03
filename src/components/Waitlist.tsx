'use client';

import React, { useState } from "react";
import Image from "next/image";
 
const Waitlist = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/waitlist", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});
			if (response.ok) {
				setMessage("You have been added to the waitlist!");
				setEmail("");
			} else {
				setMessage("Something went wrong. Please try again.");
			}
		} catch {
			setMessage("An error occurred. Please try again.");
		}
	};

	return (
		<section className="w-full flex justify-center items-center">
			<section className="relative max-w-[1300px] w-full flex max-md:flex-col justify-center items-center gap-[10px] p-10 my-20 shadow-md bg-[#bed9f2] rounded-[80px] max-md:rounded-[40px]">
				<div className="w-full text-black flex flex-col justify-center gap-[10px] max-w-[1300px] font-bold">
					<p className="font-bold font-nueuthin text-[15px] relative text-black">
						Join Our Waitlist
					</p>
					<p className="my-5 max-lg:text-[50px] max-md:text-[30px] text-[40px]">
                    Get Ahead of the Curve. Secure Your Spot on Our Waitlist!
					</p>
					<form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							required
							className="p-3 rounded-md text-black"
						/>
						<button
							type="submit"
							className="w-fit mt-5 max-sm:mb-5 rounded-md px-5 py-3 text-bold border-[1px] tracking-widest bg-black text-[#ffffff] hover:bg-white/80 hover:text-black transition duration-200"
						>
							Submit
						</button>
					</form>
					{message && <p>{message}</p>}
				</div>
				<div className="w-[50%] max-md:w-full overflow-clip">
					<Image
						fetchPriority="high"
						loading="eager"
						width={387}
						height={432}
						decoding="async"
						className="w-full rounded-lg"
						src="/images/WaitListMan.png"
						alt="man-image"
					/>
				</div>
			</section>
		</section>
	);
};

export default Waitlist;
