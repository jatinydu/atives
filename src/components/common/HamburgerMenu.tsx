import { Menu, X } from "lucide-react";
import Button from "../lib/Button";

export default function HamburgerMenu({className, burgerActive, onClick}:{className?: string, burgerActive?: boolean, onClick?: any}) {
  return (
    <>
    <button type="button" onClick={onClick} className={`${className}`}>
      {
        burgerActive ? <X /> : <Menu />
      }
    </button>
    {
        burgerActive && <div className="lg:hidden absolute top-25 right-5 bg-white shadow-lg rounded-lg p-4 lg:w-0 md:w-1/3 h-auto">
            <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:text-accent-800" onClick={()=>onClick("Feed")}>
                Feed
            </li>
            <li className="cursor-pointer hover:text-accent-800" onClick={()=>onClick("Job")}>
                Job
            </li>
            <li className="cursor-pointer hover:text-accent-800" onClick={()=>onClick("Explore")}>
                Explore
            </li>
              <Button variant="primary" size="md" label="Get Started" className="flex justify-center mt-10"/>
            </ul>
        </div>
    }
    </>
  )
}
