import Link from "next/link";
import { IconContext } from "react-icons";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

export default function ContactIcons() {
  return (
    <div className={`flex flex-row gap-2 justify-center pt-2 `}>
      <Link
        href="https://www.linkedin.com/in/david-olude-5585a8145/"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <FaLinkedin size={20} color="#7C96AB" />
      </Link>

      <Link
        href="https://github.com/oludedavid"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <FaSquareGithub color="#7C96AB" size={20} />
      </Link>
    </div>
  );
}
