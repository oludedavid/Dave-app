import Image from "next/image";
import aboutStyles from "./about.module.css";

export default function AboutComponent() {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 pt-14 w-screen place-items-center overflow-x-hidden`}
    >
      <div className={`pt-22 flex flex-col items-center justify-center`}>
        <h1
          className={` md:w-1/5 font-semibold text-5xl   `}
          style={{
            background: "linear-gradient(to right, #7C96AB, #AB7C96)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About
        </h1>

        <div className={` flex flex-col items-center justify-center gap-2`}>
          <p className={`text-sm text-gray-300 pt-2`}>
            odavidolumide@gmail.com
          </p>
          <p
            className={`${aboutStyles.pdescr} w-5/6 text-gray-600 my-0 mx-auto text-lg p-4 bg-gradient-to-b from-[#A0AEC0] to-[#D8D8D8] border-2 border-transparent hover:border-[#A0AEC0] leading-relaxed rounded-2xl`}
            style={{
              backgroundColor: "#A0AEC0",
            }}
          >
            Web developer with over 4 years of experience, specializing in
            Frontend and Fullstack development. Proficient in crafting seamless
            and intuitive user experiences, I leverage my skills to simplify and
            enhance people's lives. My expertise extends to working with Flask,
            a Python web framework, allowing me to design and develop robust
            solutions that align with modern web standards. Passionate about
            creating impactful digital experiences, I bring creativity and
            technical acumen to every project, ensuring it meets the highest
            standards of functionality and aesthetics.
          </p>
          <p
            className={`relative text-gray-300 text-center pb-5 text-sm before:hidden after:hidden md:before:block md:after:block md:before:content-[''] md:before:absolute before:-left-16 before:top-4 before:w-1/5 before:border-b-2 before:border-gray-600 after:content-[''] after:absolute after:-right-16 after:top-4 after:w-1/5 after:border-b-2 after:border-gray-600`}
          >
            North-Rhine-Wesfalia, Germany.
          </p>
        </div>
      </div>

      {/* image */}
      <div
        className={`relative w-screen md:w-2/3 md:relative pt-3 pl-1 md:pl-5`}
      >
        <Image
          alt="david image"
          src={`/images/daa.png`}
          layout="responsive"
          width={500}
          height={333}
          className={`rounded-lg pt-24 md:pt-0 drop-shadow-sm shadow-sm pl-20 md:pl-2 pr-5 md:pr-10`}
        />
        <div
          className={`${aboutStyles.quote} absolute top-2 pt-3  right-20  mx-auto my-0  w-2/3 text-sm md:absolute md:-top-22 md:-right-16 md:w-3/5 md:my-0 md:mx-auto md:text-md`}
        >
          <span>"</span> I design and develop experiences that make peoples
          lives <span className={`${aboutStyles.emphasis}`}>simple.</span>
          <span>"</span>
        </div>
      </div>
    </div>
  );
}
