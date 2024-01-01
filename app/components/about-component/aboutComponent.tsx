import Image from "next/image";
import aboutStyles from "./about.module.css";

export default function AboutComponent() {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 pt-14 px-3 w-screen place-items-center overflow-x-hidden`}
    >
      <div className={`pt-22`}>
        <h1
          className={` md:w-1/5 font-semibold text-5xl ml-10 md:ml-14  `}
          style={{
            background: "linear-gradient(to right, #7C96AB, #AB7C96)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About
        </h1>

        <div className={`flex flex-col justify-between gap-10  `}>
          <p className={`w-5/6  text-xl  pl-12 pt-2`}>
            odavidolumide@gmail.com
          </p>
          <p
            className={`w-5/6 text-gray-900 my-0 mx-auto text-xl shadow-2xl p-6  leading-relaxed rounded-2xl border border-transparent`}
            style={{
              backgroundColor: "#7C96AB",
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
            className={`relative text-center pb-5 text-xl before:hidden after:hidden md:before:block md:after:block md:before:content-[''] md:before:absolute before:left-0 before:top-4 before:w-1/5 before:border-b-2 before:border-gray-600 after:content-[''] after:absolute after:right-0 after:top-4 after:w-1/5 after:border-b-2 after:border-gray-600`}
          >
            North-Rhine-Wesfalia, Germany.
          </p>
        </div>
      </div>

      {/* image */}
      <div className={`relative w-screen md:w-2/3 md:relative pt-3`}>
        <Image
          alt="david image"
          src={`/images/daa.png`}
          layout="responsive"
          width={500}
          height={333}
          className={`rounded-lg pt-24 md:pt-0 drop-shadow-md pl-10 md:pl-2 pr-5 md:pr-2`}
        />
        <div
          className={`${aboutStyles.quote} absolute top-2 pt-3  right-20  mx-auto my-0  w-2/3 text-md md:absolute md:-top-10 md:-right-16 md:w-3/5 md:my-0 md:mx-auto md:text-xl`}
        >
          <span>"</span> I design and develop experiences that make peoples
          lives <span className={`${aboutStyles.emphasis}`}>simple.</span>
          <span>"</span>
        </div>
      </div>
    </div>
  );
}
