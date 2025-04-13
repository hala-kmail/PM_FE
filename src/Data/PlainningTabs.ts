import ProjectDetailsForm from "../pages/Project details/componant/ProjectDetailsForm";
import { TabOne, TabThree, TabTwo } from "../pages/Project details/componant/tabs";

 export const Plainingtabs = [
    { label: "Summary", index: 1, Component: ProjectDetailsForm },
    { label: "Phases", index: 2, Component: TabTwo },
    { label: "Supporting Documents", index: 3, Component: TabThree },
    { label: "Project Risks", index: 3, Component: TabThree },
    { label: "Stakeholders", index: 3, Component: TabThree },
    { label: "Activity Log", index: 3, Component: TabThree },
  ];