"use client"

import Link from "next/link";
import { RiArrowDropDownFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./ThemeSwitch";

const Navbar = () => {

    const pathname = usePathname();

    const navLinkClass = (path) =>
        `font-semibold pb-1 ${
            pathname === path
                ? "border-b-2 border-mauve-500 text-mauve-500 "
                : "text-mauve-800 dark:text-mauve-300"
        }`;
    
    return(
        <>
            <div className="relative z-50">
                <div className="navbar flex-col md:flex-row  bg-transparent  shadow-sm p-4 relative z-50">
                    <div className="flex-1">
                        <p className="btn btn-ghost text-4xl font-bold text-mauve-700 dark:text-mauve-400">Idea<span className="text-mauve-500 ">Vault</span></p>
                        
                    </div>
                    <div className="flex justify-center items-center gap-4 text-mauve-800">
                        <div className=" flex justify-center items-center  gap-6">
                            <Link href="/" className={navLinkClass("/")}>Home</Link>
                            <Link href="/ideas" className={navLinkClass("/ideas")}>Ideas</Link>
                            <div className="dropdown  dropdown-bottom dropdown-center">
                                <div tabIndex={0} role="button" className="btn m-1">
                                    <RiArrowDropDownFill />
                                </div>
                                <ul tabIndex="-1" className="dropdown-content menu menu-sm bg-mauve-200 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><Link href="/add-idea" className={`${
                                            pathname === "/add-idea"
                                                ? "bg-mauve-500 text-white"
                                                : ""
                                        }`}>Add Idea</Link></li>
                                    <li><Link href="/my-ideas" className={`${
                                            pathname === "/my-ideas"
                                                ? "bg-mauve-500 text-white"
                                                : ""
                                        }`}>My Ideas</Link></li>
                                    <li><Link href="/my-interactions"   className={`${
                                            pathname === "/my-interactions"
                                                ? "bg-mauve-500 text-white"
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
                                className="menu menu-sm dropdown-content bg-mauve-200 rounded-box z-10 mt-3 w-52 p-2 shadow">
                                <li><Link  href="/profile"  className={`${
                                    pathname === "/profile"
                                        ? "bg-mauve-500 text-white"
                                        : ""
                                }`}>Profile</Link></li>
                                <li><Link  href="/add-idea">Login</Link></li>
                                <li><Link  href="/add-idea">SignUp</Link></li>
                            </ul>
                            </div>
                            
                        </div>
                        <div>
                                <ThemeSwitch></ThemeSwitch>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}
export default Navbar