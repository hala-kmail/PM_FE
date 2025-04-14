import CustomizedTables from "../pages/Project details/componant/phasestable";
import ProjectDetailsForm from "../pages/Project details/sammaryTab";
import { TabOne, TabThree, TabTwo } from "../pages/Project details/componant/tabs";
import PhaseTab from "../pages/Project details/PhaseTab";
import { TabProgress } from "../project excution/execution tabs/progressTab";
import PaymentTab from "../project excution/drawer/AddNewPaymentPage";

 export const Plainingtabs = [
    { label: "Summary", index: 1, Component: ProjectDetailsForm },
    { label: "Phases", index: 2, Component: PhaseTab },
    { label: "Supporting Documents", index: 3, Component: TabThree },
    { label: "Project Risks", index: 4, Component: TabThree },
    { label: "Stakeholders", index: 5, Component: TabThree },
    { label: "Activity Log", index: 6, Component: TabThree },
    { label: "Progress", index: 7, Component: TabProgress },
    { label: "Payments", index: 8, Component: PaymentTab},
  ];