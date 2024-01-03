import homeStyles from "./home.module.css";
import Button from "../button/button";
import ContactIcons from "../contact/contactIcons-component/contactIcons";
import Link from "next/link";

export default function HomeComponent() {
  return (
    <div className="flex flex-col items-center justify-end">
      <div
        className={`relative`}
        style={{
          backgroundImage: `url("../images/bg.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          height: "100dvh",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 8px",
        }}
      >
        <div
          className={`${homeStyles.overlay} absolute top-0 left-0 z-10 w-full h-full pl-10 md:pl-32 pt-0 md:pt-28`}
        >
          <div
            className={`w-full pr-3 md:pr-0 h-full md:h-1/2 md:w-5/6 flex flex-col justify-center items-center md:items-start pt-6`}
          >
            <h1
              className={`${homeStyles.firstName} text-5xl md:text-8xl font-light`}
            >
              David
            </h1>
            <h1
              className={`${homeStyles.lastName} text-5xl md:text-8xl font-extrabold `}
            >
              Olude
            </h1>
            <p
              className={`text-xl text-center md:text-3xl md:pl-5 pt-5 font-semibold`}
            >
              🌐 Web Developer | Let's turn ideas into pixels! 💻✨
            </p>
            <div
              className={`pt-10 pl-0 md:pl-2 flex flex-col md:flex-row gap-6`}
            >
              <Button className="draw" href="/resume">
                Resume
              </Button>
              <Button className="meet" href="/portfolio">
                Porfolio
              </Button>
            </div>
            <div className="flex pl-0 md:pl-7 flex-row w-screen justify-center md:justify-start items-center md:w-1/2">
              <ContactIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
