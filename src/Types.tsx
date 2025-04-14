import { ElementType } from 'react';


export interface LogoDimensions {
    width: number | string, 
    height: number | string, 
}

export interface LogInFormValues {
    username: string;
    password: string;
  }
  

 export interface Notification {
    created_at: string;
    id: string;
    is_read: boolean;
    message: string;
    updated_at: string;
    user_id: string;
  }

  export interface MenuItem {
    id: number;
    title: string;
    icon: ElementType;
    path: string;
  }
  export interface SidebarProps {
    menu: MenuItem[];
    onItemClick: (path: string) => void;
    isOpen: boolean;
    toggleSidebar: () => void;
  }
  
  export type TopNavbarProps = {
    userName: string;
    userPosition: string;
    language: string;
    onLanguageToggle: () => void;
  };

  export interface BeforeInstallPromptEvent extends Event {
    prompt: () => void;
    userChoice: Promise<{ outcome: string }>;
  }
export interface DropdownMenuProps {
  showInstall: boolean;
  handleInstallClick: () => void;
}
// Define types for the component props
// export interface ProjectCardProps {
//   directorate: string;
//   title: string;
//   description: string;
//   program: string;
//   projectManager: string;
//   riskLevel: string;
//   progress: number;
  
// }

export interface PROJECT {
  directorate: string;
  title: string;
  description: string;
  program: string;
  projectManager: string;
  riskLevel: string;
  progress: number;
  stage:string;
}
export interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface MenuItem {
  id: number;
  title: string;
  icon: React.ElementType;
  path: string;
}
export type Option = {
  label: string;
  value: string | number;
};
export type PhaseType = {
  Phase: string;
  Task_Description: string;
  Start_date: string;
  End_date: string;
  Weight: string;
  duration: string;
  Percentage: string;
  Status: 'Completed' | 'Overdue' | 'Pending';
};
export type PaymentType = {
  Payment_type: string;
  Payment_Description: string;
  Payment_date: string;
  Amount: number;
  Document_Title: string;
  Document_Type: string;
  Document_File: File | null; // <-- الحقل الجديد
};
