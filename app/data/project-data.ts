export type Project = {
  id: number;
  projectName: string;
  projectDescription: string[];
  projectUrl: string;
};

const projectData: Project[] = [
  {
    id: 1,
    projectName: "Rigle UG",
    projectDescription: ["NextJS", "tailwindCSS", "Typescript"],
    projectUrl: "https://rigle.co/",
  },
  {
    id: 2,
    projectName: "Portfolio App",
    projectDescription: ["HTML", "CSS", "Bootstrap", "Javascript"],
    projectUrl: "https://pensive-liskov-de27cd.netlify.app",
  },
  {
    id: 3,
    projectName: "Comfy App",
    projectDescription: ["ReactJS", "React-router"],
    projectUrl: "https://nervous-goldstine-ea996b.netlify.app/",
  },
  {
    id: 4,
    projectName: "TinDog App",
    projectDescription: ["Bootstrap", "HTML", "CSS"],
    projectUrl: "https://oludedavid.github.io/TinDog/",
  },
  {
    id: 5,
    projectName: "Dad Jokes App ",
    projectDescription: ["Javascript", "HTML", "CSS"],
    projectUrl: "https://wonderful-dubinsky-7bb3fa.netlify.app/",
  },

  {
    id: 6,
    projectName: "Counter App ",
    projectDescription: ["Javascript", "DOM", "HTML", "CSS"],
    projectUrl: "https://oludedavid.github.io/Counter/",
  },

  {
    id: 7,
    projectName: "Simon Game ",
    projectDescription: ["Javascript", "HTML", "CSS"],
    projectUrl: "https://oludedavid.github.io/Simon-Game/",
  },

  {
    id: 8,
    projectName: "Choice Prioritizer App ",
    projectDescription: ["Javascript", "HTML", "CSS"],

    projectUrl: "https://ecstatic-davinci-fe0588.netlify.app/",
  },
];

export default projectData;
