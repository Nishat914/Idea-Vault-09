import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import Navbar from "@/components/Navbar"
const Layout = ({children}) =>{
    return(
        <>
             <Navbar></Navbar>
             {children}
        </>
    )
}
export default Layout