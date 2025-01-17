import Logo from "@/assets/Logo";
import {  NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5">
      <div className="flex items-center">
        <Logo />
        
      </div>
   <div className="font-serif text-xl ">
   <NavLink className="pr-8" to="/">Home</NavLink>
   <NavLink className="pr-8" to="/tasks">Tasks</NavLink>
   <NavLink to="/users">Users</NavLink>
   </div>
    </nav>
  );
}
