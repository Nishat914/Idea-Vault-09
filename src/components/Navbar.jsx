"use client"

import Link from "next/link";
import { RiArrowDropDownFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

    const navLinkClass = (path) =>
        `font-semibold pb-1 ${
            pathname === path
                ? "border-b-2 border-teal-500 text-teal-600"
                : "text-teal-950"
        }`;
    
    return(
        <>
            <div className=" ">
                <div className="navbar flex-col md:flex-row  bg-transparent  shadow-sm p-4">
                    <div className="flex-1">
                        <p className="btn btn-ghost text-4xl font-bold text-teal-950">Idea<span className="text-teal-500 ">Vault</span></p>
                        
                    </div>
                    <div className="flex justify-center items-center gap-4 text-teal-950">
                        <div className=" flex justify-center items-center  gap-6">
                            <Link href="/" className={navLinkClass("/")}>Home</Link>
                            <Link href="/ideas" className={navLinkClass("/ideas")}>Ideas</Link>
                            <div className="dropdown dropdown-bottom dropdown-center">
                                <div tabIndex={0} role="button" className="btn m-1">
                                    <RiArrowDropDownFill />
                                </div>
                                <ul tabIndex="-1" className="dropdown-content menu menu-sm bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><Link href="/add-idea" className={`${
                                            pathname === "/add-idea"
                                                ? "bg-teal-500 text-white"
                                                : ""
                                        }`}>Add Idea</Link></li>
                                    <li><Link href="/my-ideas" className={`${
                                            pathname === "/my-ideas"
                                                ? "bg-teal-500 text-white"
                                                : ""
                                        }`}>My Ideas</Link></li>
                                    <li><Link href="/my-interactions"   className={`${
                                            pathname === "/my-interactions"
                                                ? "bg-teal-500 text-white"
                                                : ""
                                        }`}>My Interactions</Link></li>
                                </ul>
                            
                            </div>
                        
                        </div>
                        
                        <div >
                            
                            <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link  href="/profile"  className={`${
                                    pathname === "/profile"
                                        ? "bg-teal-500 text-white"
                                        : ""
                                }`}>Profile</Link></li>
                                <li><Link  href="/add-idea">Login</Link></li>
                                <li><Link  href="/add-idea">SignUp</Link></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}
export default Navbar