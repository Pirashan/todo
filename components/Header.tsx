"use client";

import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
        <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
            <div 
                className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#4978be] rounded-md filter blur-3xl opacity-50 -z-50"
            />
            
            <h1 className="text-5xl p-2 pb-5 md:pb-4">
                Todo
            </h1>

            <div className="flex items-center space-x-5 flex-1 justify-end w-full">
                {/* Search Box */}
                <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"/>
                    <input type="text" placeholder="Search" className="flex-1 outline-none p-2" />
                    <button type="submit" hidden>
                        Search
                    </button>
                </form>
                {/* Avatar */}
                <Avatar name="Pirashan Ravi" round size="50" color="#0055D1" />
            </div>
        </div>

        <div className="flex items-center justify-center px-5 py-2 md:py-5">
            <p className="flex items-center text-sm font-light p-5 pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3 text-[#0055D1]/80">
                <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1]/90 mr-1"/>
                GPT is summarising your tasks for the day...
            </p>
        </div>
    </header>
  )
}

export default Header