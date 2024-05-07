import { INavLink } from "@/types";
import { sidebarLinks } from "@/utils/constants";
import { NavLink } from "react-router-dom";
import { FaHome, FaSave } from "react-icons/fa";
import { MdViewDay } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";

const faHome = <FaHome />;
const mdViewDay = <MdViewDay />;
const bsPeopleFill = <BsPeopleFill />;
const faSave = <FaSave />;
const biImageAdd = <BiImageAdd />;

const icons = [faHome, mdViewDay, bsPeopleFill, faSave, biImageAdd];

export default function NavLinks() {
  return (
    <ul className="flex flex-col gap-4">
      {sidebarLinks.map((link: INavLink, index) => (
        <li key={link.label}>
          <NavLink
            to={link.route}
            className={({ isActive }) =>
              `leftsidebar-link flex gap-4 items-center p-2 ${
                isActive ? "bg-primary-300" : ""
              }`
            }
          >
            {icons[index]} {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
