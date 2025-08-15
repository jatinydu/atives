import { useState } from "react";
import Button from "../lib/Button";
import ProfileIcon from "./ProfileIcon";
import HamburgerMenu from "./HamburgerMenu";
import { Link, useLocation, useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [burgerActive, setBurgerActive] = useState<boolean>(false);

  const burgerToggle=(e:any)=>{
     console.log('button click')
     setBurgerActive((prev)=>!prev);
  }

  return (
    <div className="h-[9vh] w-screen md:px-7xl px-xl flex items-center justify-between fixed top-0 left-0 bg-[#ffffffdd] border-b-1 border-b-secondary-100 z-50">
      <span className="font-semibold text-xl"><span className="text-accent-800">1A</span>tives</span>
      <div className="flex gap-3 items-center">
        <ul className="lg:flex items-center gap-2xl mr-5 transition duration-300 hidden">
            <Link to='/' className="cursor-pointer hover:text-accent-800">
                Feed
                {
                   location.pathname === "/" && <div className="bg-accent-800 h-[2px]"></div>
                }
            </Link>
            <Link to='/jobs' className="cursor-pointer hover:text-accent-800">
                Job
                { 
                      location.pathname === "/jobs" && <div className="bg-accent-800 h-[2px]"></div>
                }
            </Link>
            <Link to='/explore' className="cursor-pointer hover:text-accent-800">
                Explore
                {
                     location.pathname === "/explore" && <div className="bg-accent-800 h-[2px]"></div>
                }
            </Link>
        </ul>
         <Button onClick={(()=>{ navigate('/signup')})} variant="primary" size="md" label="Get Started" className="lg:flex hidden"/>
         <ProfileIcon onClick={()=>{ navigate('/profile') }}/>
         <HamburgerMenu burgerActive={burgerActive} className="lg:hidden flex" onClick={burgerToggle}/>
      </div>
    </div>
  )
}
