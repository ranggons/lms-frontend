import React from "react";

const Navbar = () => {
    return (
        <div className="w-screen h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg">
            <div className="px-1 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">LOGO</h1>
                </div>
                <div className="hidden md:flex pr-4">
                    <ul className="hidden md:flex">
                        <li className="p-4 ">
                            Beranda
                        </li>
                        <li className="p-4 ">
                            Fitur
                        </li>
                        <li className="p-4 ">
                            Hubungi Kami
                        </li>
                    </ul>
                    <button className="px-3 py-3 text-white border bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600 rounded-md" >Masuk</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


