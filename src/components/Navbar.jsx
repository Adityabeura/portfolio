import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi";
import { href, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    
    const [open, setOpen] = useState(false);
    const navLinks = [
        {name: "Home", href:"#home"},
        {name: "About", href:"#about"},
        {name: "Project", href:"#project"},
        {name: "Skills", href:"#skills"},
        {name: "Contact", href:"#contact"},
    ]
  return (
      <nav className="backdrop-blur-md backdrop-saturate-100 bg-slate-900/70 md:flex md:justify-around md:px-20 fixed w-full  md:items-center py-4 z-50 bg-transparent text-black">
        <div className="flex justify-between items-center px-4 py-3 md:px-8">
            <h2 className="text-2xl font-bold text-white">🧑‍💻 | Aditya Beura | Developer</h2>
             <button onClick={()=> setOpen(!open)} className="md:hidden text-white">
                {open ? <FiX size={24} /> : <FiMenu size={24}/>}
             </button>
        </div>
        <ul className={`flex flex-col md:flex-row md:items-center md:justify-end md:static gap-8 bg-black md:bg-transparent text-white w-full md:w-auto absolute left-0  ${open ? "top-16 opacity-100" : "top-[-500px] opacity-0 md:opacity-100"}`}>
            {navLinks.map((Link)=>(
                <li key={Link.name} className="text-xl text-center md:ml-6 py-4 md:py-2 hover:md:scale-110 duration-200">
                <a href={Link.href} onClick={()=> setOpen(false)} className="">{Link.name}</a>
            </li>
            ))}
            
        </ul>
        <ThemeToggle/>
      </nav>
  )
}

export default Navbar
