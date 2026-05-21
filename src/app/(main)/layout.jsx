import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
const Layout = ({children}) =>{
    return(
        <>
             <Navbar></Navbar>
             {children}
             <Footer></Footer>
        </>
    )
}
export default Layout