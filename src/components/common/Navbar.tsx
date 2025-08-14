import { useState } from "react";
import Button from "../lib/Button";
import ProfileIcon from "./ProfileIcon";

export default function Navbar() {
  const [active, setActive] = useState<string>("Feed");
  return (
    <div className="h-[10vh] flex items-center justify-between">
      {/* Logo */}
      <span className="font-semibold text-xl"><span className="text-accent-800">1A</span>tives</span>
      {/* Button */}
      {/* Profile */}
      <div className="flex gap-3 items-center">
        <ul className="flex items-center gap-2xl mr-5 transition duration-300">
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
         <Button variant="primary" size="md" label="Get Started"/>
         <ProfileIcon/>
      </div>
    </div>
  )
}
