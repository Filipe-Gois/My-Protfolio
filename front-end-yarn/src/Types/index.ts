export type ProjectType = {
  IdProject: string;
  Name: string;
  ProjectTechnologies: ProjectTechnologies[];
  Description: string;
  ProjectCategory: ProjectCategory;
};

export type ProjectCategory = "Mobile" | "Web";

export type ProjectTechnologies =
  | "React"
  | "React Native"
  | "TypeScript"
  | "JavaScript"
  | "TailWind Css"
  | "SASS"
  | "HTML5"
  | "CSS3"
  | "Figma"
  | "C#"
  | ".Net"
  | "SQL Server"
  | "MongoDB"
  | "Microsoft Azure"
  | "Azure DevOps"
  | "Git"
  | "Cypress";

export type ContactType = {
  Email: string;
  NumberPhone: string;
};
