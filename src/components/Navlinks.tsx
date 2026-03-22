import links from '@/utils/links';
import { NavLink } from "react-router-dom"

type NavlinksProps = {
    toggleSidebar: () => void;
}

const Navlinks = ({ toggleSidebar }: NavlinksProps) => {
    return (
        <div className="flex pt-8 flex-col">
            {links.map((link) => {
                const { text, path, id, icon } = link;
                const Icon = icon
                return (
                    <NavLink
                        to={path}
                        key={id}
                        onClick={toggleSidebar}
                        className={({ isActive }) =>
                            `flex py-4 px-0 capitalize transition items-center hover:text-gray-900 lg:pl-10 lg:hover:pl-12 lg:hover:bg-gray-50 ${isActive ? "text-gray-900" : ""
                            }`
                        }
                    >
                        <span>
                            <Icon className="text-[1.5rem] mr-4 transition-colors" />
                        </span>
                        {text}
                    </NavLink>
                )
            })}
        </div>
    )

}

export default Navlinks
