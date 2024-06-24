import { FaHouseUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const navData = [
  { name: "Whill who?", url: "#hero", icon: <FaHouseUser /> },
  { name: "Showcase", url: "#work", icon: <FaStar /> },
  { name: "Whill who?", url: "#skills", icon: <IoMoon /> },
  { name: "Whill who?", url: "#contact", icon: <FaPhoneAlt /> },
  {
    name: "Whill who?",
    url: "https://github.com/Whillian-Sousa",
    icon: <FaGithubAlt className="text-yellow-400" />,
  },
  // {
  //   name: "Whill who?",
  //   url: "https://www.linkedin.com/in/whillian-sousa/",
  //   icon: <FaLinkedin className="text-2xl text-blue-400" />,
  // },
];

const NavBottom = () => {
  const pathname = useLocation();
  return (
    <nav className="md:hidden flex flex-col items-center fixed h-max bottom-0 mt-auto z-50 top-0 w-full">
      <div className="flex w-full items-center justify-between px-[10vw] h-[60px] sm:h-[70px] bg-n-8/10 backdrop-blur-xl text-2xl sm:text-3xl">
        {navData.map((link, index) => {
          return (
            <a
              className={`${link.url === pathname.hash && "text-color-1"} relative items-center group`}
              key={index}
              href={link.url}
            >
              <div>{link.icon}</div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBottom;
