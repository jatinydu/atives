import { Menu, X } from "lucide-react";
import Button from "../lib/Button";
import { Link } from "react-router";

export default function HamburgerMenu({className, burgerActive, onClick}:{className?: string, burgerActive?: boolean, onClick?: any}) {
  return (
    <>
    <button type="button" onClick={onClick} className={`${className}`}>
      {
        burgerActive ? <X /> : <Menu />
      }
    </button>
    {
        burgerActive && <div className="lg:hidden fixed top-25 right-5 bg-white shadow-lg rounded-lg p-4 lg:w-0 md:w-1/3 h-auto z-50">
            <ul className="flex flex-col gap-2">
            <Link to='/' className="cursor-pointer hover:text-accent-800" onClick={()=>onClick("Feed")}>
                Feed
            </Link>
            <Link to='/jobs' className="cursor-pointer hover:text-accent-800" onClick={()=>onClick("Job")}>
                Job
            </Link>
            <Link to='/explore' className="cursor-pointer hover:text-accent-800" onClick={()=>onClick("Explore")}>
                Explore
            </Link>
              <Button variant="primary" size="md" label="Get Started" className="flex justify-center mt-10"/>
            </ul>
        </div>
    }
    </>
  )
}
