import { FaTimes } from "react-icons/fa"
import { Button } from "./ui/button"
import Logo from "./Logo"
import { useUser } from "@/context/UserContext"
import Navlinks from "./Navlinks"


const SmallSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUser();
  return (
    <aside className="lg:hidden">
      <div className={`fixed z-[-1] inset-0 bg-primary-100 flex justify-center items-center opacity-0 ${isSidebarOpen ? 'z-[99] opacity-100' : ''}`}>
        <div className="bg-white h-[95vh] px-16 py-8 w-fluid rounded-md relative flex items-center flex-col">
          <Button onClick={toggleSidebar} className="absolute top-2.5 right-2.5 cursor-pointer">
            <FaTimes />
          </Button>
          <header>
            <Logo />
          </header>

          <Navlinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </aside>
  )
}

export default SmallSidebar
