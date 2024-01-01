export type Experience = {
  id: number;
  companyName: string;
  companyDescription: string;
  companyUrl: string;
  companyRole: string;
  companyDuration: string;
  companyLocation: string;
  companyResponsibilities: string[];
};

const experienceData: Experience[] = [
  {
    id: 1,
    companyName: "Testia an Airbus Company",
    companyDescription:
      "Specialized in Aerostructure Inspections and Non-Destructive Testing (NDT).",
    companyUrl:
      "https://www.testia.com/?utm_source=linkedin&utm_medium=social&utm_campaign=custombutton",
    companyRole: "Web Developer",
    companyDuration: "March 2023 - February 2024",
    companyLocation: "Bremen, Germany",
    companyResponsibilities: [
      "Optimized website performance.",
      "Developed and maintained the company's website.",
      "Improved the company's website SEO.",
      "Created reports and visualizations for data analysis.",
      "Blocked Spams and Bots from the company's website.",
    ],
  },
  {
    id: 2,
    companyName: "Candidate select GmbH",
    companyDescription:
      "Revolutionizes recruitment process with standardized data on grade distributions.",
    companyUrl: "candidate-select.de/",
    companyRole: "Fullstack Developer",
    companyDuration: "April 2022 - October 2022",
    companyLocation: "Cologne, Germany",
    companyResponsibilities: [
      "Front End development with HTML, CSS, Bootstrap5, and JavaScript.",
      "Back End development with Flask, Python, SQLAlchemy, and SQLite3.",
      "Project Management using Jira and Trello.",
      "Maintained and enhanced functionality of existing applications.",
      "Collaborated to develop new products and features.",
      "Created and implemented RESTful APIs for improved functionality.",
      "Developed and maintained documentation of all processes.",
    ],
  },
  {
    id: 3,
    companyName: "Fedger.io",
    companyDescription:
      "Fast-growing tech company in Cologne, Germany. Focus on extraction and delivery of structured information.",
    companyUrl: "https://fedger.io",
    companyRole: "Data Quality Assurance",
    companyDuration: "June 2019 - August 2019",
    companyLocation: "Cologne, Germany",
    companyResponsibilities: [
      "Extracted data using custom-built tools.",
      "Evaluated and analyzed results from AI models for accuracy.",
      "Digitized data, ensuring consistency and completeness.",
      "Performed continuous quality control, providing feedback for process improvement.",
    ],
  },
];

export default experienceData;
