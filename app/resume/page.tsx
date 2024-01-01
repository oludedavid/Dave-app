"use client";
import ResumeComponent from "../components/resume-component/resumeComponent";
import { useEffect, useState } from "react";
import experienceData from "../data/experience-data";
import { Experience } from "../data/experience-data";
import { Project } from "../data/project-data";
import projectData from "../data/project-data";
import axios from "axios";

// Define the type
export type SkillData = {
  skill: string;
  percentage: number;
};

export type ProjectDataType = {
  id: number;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
};

export type LanguageDataType = {
  language: string;
  percentage: number;
};

const languageData = [
  {
    language: "English",
    percentage: 100,
  },

  {
    language: "German",
    percentage: 70,
  },

  {
    language: "Yoruba",
    percentage: 100,
  },
];

const skillsData = [
  {
    skill: "html",
    percentage: 90,
  },
  {
    skill: "css",
    percentage: 80,
  },
  {
    skill: "bootstrap",
    percentage: 80,
  },
  {
    skill: "tailwindcss",
    percentage: 70,
  },
  {
    skill: "javascript",
    percentage: 70,
  },
  {
    skill: "reactjs",
    percentage: 70,
  },
  {
    skill: "nextjs",
    percentage: 70,
  },
  {
    skill: "typescript",
    percentage: 60,
  },
  {
    skill: "sass",
    percentage: 60,
  },
  {
    skill: "wordpress",
    percentage: 80,
  },
  {
    skill: "figma",
    percentage: 70,
  },
  {
    skill: "flask",
    percentage: 60,
  },
];

export default function Resume() {
  const experience_data: Experience[] = experienceData;
  const project_data: Project[] = projectData;

  return (
    <div>
      <ResumeComponent
        projectData={projectData}
        experienceData={experienceData}
        languageData={languageData}
        skillsData={skillsData}
      />
    </div>
  );
}
