"use client";
import resumeStyles from "./resume.module.css";
import { Experience } from "@/app/data/experience-data";
import { Project } from "@/app/data/project-data";
import SkillProgressBar from "../skill-progress-bar/progress";
import { SkillData, LanguageDataType } from "@/app/resume/page";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import ExperienceComponent from "../experience-component/experience";

export default function ResumeComponent({
  skillsData,
  experienceData,
  projectData,
  languageData,
}: {
  skillsData: SkillData[];
  experienceData: Experience[];
  projectData: Project[];
  languageData: LanguageDataType[];
}) {
  return (
    <div
      className={`w-screen flex flex-col items-center justify-center pl-10    md:pl-36`}
    >
      <div className={`w-full grid grid-cols-1 md:grid-cols-2 gap-7`}>
        <div
          className={`flex flex-col justify-center items-center w-screen md:w-5/6`}
        >
          <div className={`w-full`}>
            <h1
              className={`uppercase text-3xl font-semibold `}
              style={{
                background: "linear-gradient(to right, #7C96AB, #AB7C96)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Software Skills
            </h1>
            <div className={`grid grid-cols-2 gap-6 pr-20 md:pr-1 `}>
              {skillsData.map((items, index) => {
                return (
                  <SkillProgressBar
                    key={index}
                    skillLevel={items.percentage}
                    skillType={items.skill}
                    class_name={items.skill}
                  />
                );
              })}
            </div>
          </div>
          <div className={`pt-20 w-full`}>
            <h1
              className={`uppercase text-3xl font-semibold`}
              style={{
                background: "linear-gradient(to right, #7C96AB, #AB7C96)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Languages
            </h1>
            <div className={`grid grid-cols-2 gap-6 pr-20 md:pr-1 `}>
              {languageData.map((items, index) => {
                return (
                  <ProgressBar
                    key={index}
                    color="gray"
                    skillPercentage={items.percentage}
                  >
                    {items.language}
                  </ProgressBar>
                );
              })}
            </div>
          </div>
          <div className={`pt-16 w-full pr-20 md:pr-1`}>
            <h1
              className={`uppercase text-3xl font-semibold pb-5`}
              style={{
                background: "linear-gradient(to right, #7C96AB, #AB7C96)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Personal Skills
            </h1>
            <div className={`grid grid-cols-2 w-full gap-8 pt-4`}>
              <p className={`text-xl font-bold`}>Creativity: 🎨✨</p>
              <p className={`text-xl font-bold`}>Team Work: 🤝👥</p>
              <p className={`text-xl font-bold`}>Organisation: 🗃️📊</p>
              <p className={`text-xl font-bold`}>Leadership: 🏆👨‍💼</p>
            </div>
          </div>
        </div>
        <div className={`w-screen md:w-4/5 pt-10`}>
          <div className={`w-full pr-20 md:pr-1 `}>
            <h1
              className={`uppercase text-3xl font-semibold `}
              style={{
                background: "linear-gradient(to right, #7C96AB, #AB7C96)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What Can I do?
            </h1>
            <div className={`grid grid-cols-2 w-full gap-8 pt-4`}>
              <p className={`text-xl font-bold`}>Web Development: 👩‍💻🌐</p>
              <p className={`text-xl font-bold`}>Project Management: 📊👨‍💼</p>
              <p className={`text-xl font-bold`}>Strategy: 🎯🤔</p>
              <p className={`text-xl font-bold`}>UI/UX Design: 🎨💻</p>
            </div>
          </div>
          <div className={`pt-16 w-full pr-20 md:pr-1  `}>
            <h1
              className={`uppercase text-3xl font-semibold `}
              style={{
                background: "linear-gradient(to right, #7C96AB, #AB7C96)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Design Skills
            </h1>
            <div className={`grid grid-cols-2 w-full gap-8 pt-4`}>
              <p className={`text-xl font-bold`}>Creativity: 🎨✨</p>
              <p className={`text-xl font-bold`}>Planning and Strategy: 📅🤔</p>
              <p className={`text-xl font-bold`}>Layout: 📐🖌️</p>
              <p className={`text-xl font-bold`}>Color Sense: 🎨🌈</p>
            </div>
          </div>
          <div className={`pt-10 w-full pr-16 md:pr-1`}>
            <h1
              className={`uppercase text-3xl font-semibold `}
              style={{
                background: "linear-gradient(to right, #7C96AB, #AB7C96)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hobbies and Interest
            </h1>
            <div className={`grid grid-cols-2 w-full gap-8 pt-4`}>
              <div
                className={`flex flex-row items-center justify-center  gap-10 text-xl md:text-3xl font-medium md:font-bold`}
              >
                <PiAirplaneTiltFill color="white" className=" w-5 md:w-8 " />
                <span className="pt-1"> Travel</span>
              </div>
              <div
                className={`flex flex-row items-center justify-center gap-10 text-xl md:text-3xl font-medium md:font-bold`}
              >
                <FaBook color="white" className=" w-5 md:w-8 " />
                <span className="pt-1 pr-6 md:pr-1"> Reading</span>
              </div>
              <div
                className={`flex flex-row items-center justify-center gap-10 text-xl md:text-3xl font-medium md:font-bold`}
              >
                <IoGameController color="white" className=" w-5 md:w-8 " />
                <span className="pt-1"> Gaming</span>
              </div>
              <div
                className={`flex flex-row items-center justify-center gap-10 text-xl md:text-3xl font-medium md:font-bold`}
              >
                <BiSolidMoviePlay color="white" className=" w-5 md:w-8 " />
                <span className="pt-1 pr-10 md:pr-1"> Movie</span>
              </div>
            </div>
          </div>
          <div className={`pt-8 w-full pr-7 md:pr-1`}>
            <h1
              className={`uppercase text-3xl font-semibold `}
              style={{
                background: "linear-gradient(to right, #7C96AB, #AB7C96)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
            </h1>
            <div className={`grid grid-cols-1 w-full gap-4 pt-8`}>
              <div className={` pt-4`}>
                <span className={`text-lg font-bold pr-4 md:pr-1`}>
                  Bachelor Degree In Agricultural Economics
                </span>
                ,<span className={`text-gray-600 italic`}> Nigeria</span>
                <div
                  className={` font-semibold`}
                  style={{
                    color: "#7C96AB",
                  }}
                >
                  Landmark University
                </div>
                <div className={`text-gray-600`}>2012 - 2017</div>
              </div>
              <div className={` pt-4`}>
                <span className={`text-lg font-bold`}>
                  Bachelor Degree In Business Administration with Informatics
                </span>
                , <span className={`text-gray-600 italic`}>Germany</span>
                <div
                  className={` font-semibold`}
                  style={{
                    color: "#7C96AB",
                  }}
                >
                  University of Applied Science Southwesfalia
                </div>
                <div className={`text-gray-600`}>2020 - 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-screen md:col-span-2 bottom grid grid-cols-1 place-items-center place-content-center pt-20 pr-14 md:pr-1`}
      >
        <h1
          className={`uppercase text-3xl font-semibold w-full text-center`}
          style={{
            background: "linear-gradient(to right, #7C96AB, #AB7C96)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experiences
        </h1>
        <ExperienceComponent experienceData={experienceData} />
      </div>
    </div>
  );
}

function ProgressBar({
  children,
  skillPercentage,
  color,
}: {
  children: React.ReactNode;
  skillPercentage: number;
  color: string;
}) {
  return (
    <div className={`flex flex-col justify-center gap-3 pt-8`}>
      <p className="skillType uppercase text-gray-300">{children}</p>
      <div
        className={`container `}
        style={{
          width: "100%",
          height: "8px",
          backgroundColor: "#ddd",
        }}
      >
        <div
          className={` ${String(children).toLowerCase()}`}
          style={{
            textAlign: "right",
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "0.6rem",
            width: `${skillPercentage}%`,
            height: "100%",
            backgroundColor: `${color}`,
          }}
        ></div>
      </div>
    </div>
  );
}
