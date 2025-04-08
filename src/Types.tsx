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
  export type SidebarProps = {
    menu: MenuItem[];
    onItemClick: (path: string) => void;
  };
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
