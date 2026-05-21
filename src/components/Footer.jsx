
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaXTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-mauve-800 via-mauve-600 to-mauve-400 text-gray-400  p-16 mt-15">
        <div className='flex flex-col  justify-center items-center text-center'>
            <div>
                <p className="btn btn-ghost text-4xl font-bold text-mauve-300 ">Idea<span className="text-mauve-400 ">Vault</span></p>
                <p className="mt-4 text-sm mb-4 ">
                    Every great innovation starts with a simple thought. Idea Vault is where those thoughts are preserved, organized, and turned into possibilities.
                </p>
            </div>
            <div>
                 <div className='flex flex-col justify-center items-center'>
                <h3 className="text-white font-semibold mb-3">Social Links</h3>
                <div className="flex gap-3 mt-2">
                    
                    <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                    <FaInstagram />
                    </a>

                    <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white hover:text-black  transition cursor-pointer">
                    <FaFacebook />
                    </a>

                    <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                    <FaXTwitter />
                    </a>

                </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-4'>
                <h3 className="text-xl font-semibold mb-3 text-white">Platform links</h3>
                <Link href={"/ideas"} className="text-gray-300 text-sm">Ideas</Link>
                <Link href={"/add-idea"} className="text-gray-300 text-sm">Add Idea</Link>
                <Link href={"/my-ideas"} className="text-gray-300 text-sm">My Ideas</Link>
            </div>
            <div className='mt-4'>
                <h3 className="text-xl font-semibold mb-3 text-white">Contact Us:</h3>
                <p className="text-gray-300 text-sm">Mymensingh, Bangladesh</p>
                <p className="text-gray-300 text-sm">+880 1234-567890</p>
                <p className="text-gray-300 text-sm">info@ideavault.com</p>
            </div>
            
            
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-10 border-t border-gray-500 pt-6 flex flex-col       md:flex-row justify-between text-sm">
        
            <p >© 2026 Idea Vault. All rights reserved.</p>

            <div className="flex gap-6 mt-4 md:mt-0 ">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
            </div>

      </div>
      
    </footer>
  );
};

export default Footer;