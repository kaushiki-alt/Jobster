import { useUser } from "@/context/UserContext";
import Logo from "./Logo"
import { Button } from "./ui/button"
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useState } from "react";
import { LucidePanelLeft } from "lucide-react";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)

  const { user, clearUser, toggleSidebar } = useUser();
  return (
    <nav className="bg-white shadow-2 h-nav flex items-center justify-center">
      <div className="w-fluid flex items-center justify-between lg:w-[90%]">

        {/* left */}
        <div className="flex items-center gap-3">
          <Logo classname="hidden lg:block" />
          <Button variant='ghost' className="cursor-pointer" onClick={toggleSidebar}>
            <LucidePanelLeft className="size-6" />
          </Button>
        </div>

        {/* center */}
        <div>
          <Logo classname="flex items-center w-25 lg:hidden" />
          <h3 className="hidden m-0 lg:block">Dashboard</h3>
        </div>

        {/* right */}
        <div className="relative">
          <Button className="bg-primary-600 text-white" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </Button>
          <div className={`absolute top-10 left-0 w-full bg-primary-100 shadow-2 text-center rounded-md invisible ${showLogout ? 'visible' : ''}`}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={clearUser}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
