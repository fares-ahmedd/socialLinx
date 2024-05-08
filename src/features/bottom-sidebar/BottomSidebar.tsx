import { bottombarLinks } from "@/utils/constants";
import { BiImageAdd } from "react-icons/bi";
import { FaHome, FaSave } from "react-icons/fa";
import { MdViewDay } from "react-icons/md";
import { NavLink } from "react-router-dom";

const faHome = <FaHome />;
const mdViewDay = <MdViewDay />;
const faSave = <FaSave />;
const biImageAdd = <BiImageAdd />;

const icons = [faHome, mdViewDay, faSave, biImageAdd];

function BottomSidebar() {
  return (
    <footer className="flex-wrap gap-1 bottom-bar">
      {bottombarLinks.map((link, index) => (
        <NavLink
          to={link.route}
          className={({ isActive }) =>
            `bottombar-link flex flex-col gap-4 items-center p-2 ${
              isActive ? "bg-primary-300" : ""
            } rounded-lg grow`
          }
          key={index}
        >
          {icons[index]} {link.label}
        </NavLink>
      ))}
    </footer>
  );
}

export default BottomSidebar;
