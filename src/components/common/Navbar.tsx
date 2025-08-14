import { useState } from "react";
import Button from "../lib/Button";
import ProfileIcon from "./ProfileIcon";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [active, setActive] = useState<string>("Feed");
  const [burgerActive, setBurgerActive] = useState<boolean>(false);

  const burgerToggle=(e:any)=>{
     console.log('button click')
     setBurgerActive((prev)=>!prev);
  }

  return (
    <div className="h-[10vh] flex items-center justify-between sticky top-0 left-0 bg-[#ffffff8e] border-b-1 border-b-secondary-100">
      <span className="font-semibold text-xl"><span className="text-accent-800">1A</span>tives</span>
      <div className="flex gap-3 items-center">
        <ul className="lg:flex items-center gap-2xl mr-5 transition duration-300 hidden">
            <li className="cursor-pointer hover:text-accent-800" onClick={()=>setActive("Feed")}>
                Feed
                {
                   active === "Feed" && <div className="bg-accent-800 h-[2px]"></div>
                }
            </li>
            <li className="cursor-pointer hover:text-accent-800" onClick={()=>setActive("Job")}>
                Job
                { 
                     active === "Job" && <div className="bg-accent-800 h-[2px]"></div>
                }
            </li>
            <li className="cursor-pointer hover:text-accent-800" onClick={()=>setActive("Explore")}>
                Explore
                {
                    active === "Explore" && <div className="bg-accent-800 h-[2px]"></div>
                }
            </li>
        </ul>
         <Button variant="primary" size="md" label="Get Started" className="lg:flex hidden"/>
         <ProfileIcon/>
         <HamburgerMenu burgerActive={burgerActive} className="lg:hidden flex" onClick={burgerToggle}/>
      </div>
    </div>
  )
}
