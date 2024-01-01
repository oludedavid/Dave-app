import React from "react";
import Link from "next/link";
import {
  FaSuitcase,
  FaAddressCard,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareGithub,
  FaFile,
} from "react-icons/fa6";
import footerStyles from "./footer.module.scss";

const socialIcons = [
  { icon: FaLinkedin, href: "#" },
  { icon: FaSquareGithub, href: "#" },
  { icon: FaSquareInstagram, href: "#" },
  { icon: FaAddressCard, href: "/contact" },
  { icon: FaSuitcase, href: "/portfolio" },
  { icon: FaFile, href: "/resume" },
];

const Footer = () => {
  return (
    <footer className={footerStyles.footer_container}>
      <div
        className={`${footerStyles.itemWrapper} flex flex-col md:flex-row justify-start items-center md:justify-center`}
      >
        <div className={footerStyles.footerLeftContainer}>
          <p
            className="text-gray-300 text-2xl font-bold w-full md:w-auto pb-5"
            style={{
              background: "linear-gradient(to right, #7C96AB, #AB7C96)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Favorite Web Developer
          </p>
        </div>
        <div className={footerStyles.footerRightContainer}>
          <ul className={footerStyles.listMenu}>
            {socialIcons.map(({ icon: Icon, href }, index) => (
              <li key={index} className={footerStyles.listItems}>
                <Link href={href}>
                  <Icon color="#7C96AB" size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <p className={footerStyles.footerPara}>David &copy;2023</p> */}
    </footer>
  );
};

export default Footer;
