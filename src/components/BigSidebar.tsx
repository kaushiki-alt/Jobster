import { useUser } from "@/context/UserContext";
import Navlinks from "./Navlinks";

const BigSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUser();

  return (
    <aside className="hidden lg:block lg:shadow-[1px_0_0_0_rgba(0,0,0,0.1)]">
      <div
        className={`bg-white min-h-screen h-full w-62.5 transition-all duration-300 ${isSidebarOpen ? "ml-0" : "-ml-62.5"
          }`}
      >
        <div className="sticky top-0">
                    <Navlinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </aside>
  );
};

export default BigSidebar;
