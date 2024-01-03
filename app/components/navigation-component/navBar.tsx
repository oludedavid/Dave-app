import React from "react";
import ContactIcons from "../contact/contactIcons-component/contactIcons";
import { usePathname } from "next/navigation";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillProfile } from "react-icons/ai";
import { FaSuitcase } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { useState, useEffect, ReactComponentElement } from "react";
import Link from "next/link";
import navStyles from "./navBar.module.css";
import ThemeChanger from "../theme-changer/themeChanger";

export default function NavigationMenu() {
  const pathname = usePathname();
  const isCurrentRoute = (path: string) => pathname === path;
  const [isMobileNavOpened, setMobileNavOpened] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 z-20 w-full transition-all ease-in delay-300  ${
        isMobileNavOpened ? `h-screen` : `h-16 md:h-16`
      } md:h-28   backdrop-filter backdrop-blur-lg  bg-opacity-30 `}
    >
      <div className={`sm:hidden  px-4 py-2 flex flex-row justify-between `}>
        <h1
          className={`font-bold text-3xl`}
          style={{
            background: "linear-gradient(to right, #7C96AB, #AB7C96)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dave.
        </h1>

        <button
          onClick={() => setMobileNavOpened(!isMobileNavOpened)}
          className={`pr-5`}
        >
          {isMobileNavOpened ? (
            <IoMdClose size={40} color="gray" />
          ) : (
            <IoMdMenu size={40} color="gray" />
          )}
        </button>
      </div>

      <div className={`w-full h-full`}>
        <ul
          className={`h-full -translate-x-full sm:translate-x-0 flex flex-col items-center justify-center md:flex-row transition-transform ease-in py-14 ${
            isMobileNavOpened ? `translate-x-0 delay-500` : `delay-300`
          }`}
        >
          <NavItems
            isCurrentRoute={isCurrentRoute}
            text={"Home"}
            pathName={"/"}
            icon={<FaHome size={30} />}
          />
          <NavItems
            isCurrentRoute={isCurrentRoute}
            text={"About"}
            pathName={"/about"}
            icon={<IoPersonSharp size={30} />}
          />
          <NavItems
            isCurrentRoute={isCurrentRoute}
            text={"Resume"}
            pathName={"/resume"}
            icon={<AiFillProfile size={30} />}
          />
          <NavItems
            isCurrentRoute={isCurrentRoute}
            text={"Portfolio"}
            pathName={"/portfolio"}
            icon={<FaSuitcase size={30} />}
          />
          <NavItems
            isCurrentRoute={isCurrentRoute}
            text={"Contact"}
            pathName={"/contact"}
            icon={<MdContactPhone size={30} />}
          />
          <a
            href="/david-resume.pdf"
            download="cv"
            className="text-xl border-2 rounded-xl p-2 border-red-100 text-gray-600 ml-0 md:ml-20"
            style={{
              background: "linear-gradient(to right, #7C96AB, #AB7C96)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Download CV
          </a>
          <div className="pt-10 absolute top-0 right-50 md:-top-2 md:right-10 ">
            <ThemeChanger></ThemeChanger>
          </div>
        </ul>
      </div>
    </nav>
  );
}

function NavItems({
  text,
  pathName,
  isCurrentRoute,
  icon,
}: {
  text: string;
  pathName: string;
  isCurrentRoute: (path: string) => boolean;
  icon?: React.ReactElement;
}) {
  return (
    <li
      className={`p-10 text-red-100 flex flex-row justify-center items-center gap-3 py-4 transition-all ease-in delay-500`}
    >
      <Link href={pathName}>
        {isCurrentRoute(pathName) ? (
          <div className="flex flex-row justify-center items-center gap-3 px-4 py-2 text-gray-600 border rounded-3xl bg-gray-300">
            <i className=""> {icon}</i>
            <span className="text-lg font-semibold">{text}</span>
          </div>
        ) : (
          <div> {icon}</div>
        )}
      </Link>
    </li>
  );
}
