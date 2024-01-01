import Link from "next/link";
import portfolioStyles from "./portfolio.module.css";
import { Project } from "@/app/data/project-data";
import Image from "next/image";

const arrayOfPictures: string[] = [
  "p1.jpg",
  "p12.jpg",
  "p3.jpg",
  "p11.jpg",
  "p2.jpg",
  "p6.jpg",
  "p7.jpg",
  "p8.jpg",
  "p9.jpg",
  "p10.jpg",
  "p4.jpg",
  "p2.jpg",
];

export default function PortfolioComponent({
  project_data,
}: {
  project_data: Project[];
}) {
  return (
    <div
      className={`w-screen h-auto flex flex-row flex-wrap justify-center items-center gap-5 mt-24`}
    >
      {project_data.map((items, index) => (
        <ProjectCard
          key={items.id}
          projectUrl={items.projectUrl}
          projectDescription={items.projectDescription}
          background_img={arrayOfPictures}
          randNum={index % arrayOfPictures.length}
        >
          {items.projectName}
        </ProjectCard>
      ))}
    </div>
  );
}

const ProjectCard = ({
  projectUrl,
  projectDescription,
  background_img,
  children,
  randNum,
}: {
  projectUrl: string;
  projectDescription: string[];
  children: React.ReactNode;
  background_img: string[];
  randNum: number;
}) => {
  return (
    <div
      className={`relative flex flex-col items-center w-72 h-56 justify-center shadow-2xl`}
    >
      <Image
        src={`/images/${background_img[randNum]}`}
        alt={`Background Image for ${children}`}
        quality={40}
        layout="fill"
        priority
      />
      <div
        className={` absolute w-full h-full z-10`}
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))`,
        }}
      >
        <Link
          className={`${portfolioStyles.pElem} absolute text-white text-center w-full h-full top-28 pr-4 text-lg font-semibold`}
          href={projectUrl}
          target="_blank"
        >
          {children}
        </Link>
        <svg
          className={`${portfolioStyles.svgElem} w-full h-full`}
          viewBox="0 0 120 100"
        >
          <path
            className=""
            stroke="#fff"
            fill="none"
            d="M38,2 L82,2 A12,12 0 0,1 94,10 L112,44 A12,12 0 0,1 112,56 L94,90 A12,12 0 0,1 82,98 L38,98 A12,12 0 0,1 26,90 L8,56 A12,12 0 0,1 8,44 L26,10 A12,12 0 0,1 38,2"
          />
        </svg>
      </div>
    </div>
  );
};
