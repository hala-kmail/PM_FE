// Import icons
import {
  HomeIcon,
  ChartBarIcon,
  ClipboardListIcon,
  TemplateIcon,
  LocationMarkerIcon,
  CogIcon,
} from '@heroicons/react/outline';

// Menu item type
export interface MenuItem {
  id: number;
  title: string;
  icon: React.ElementType;
  path: string;
}

// Static menu items generator
export const getMenuAsText = (): MenuItem[] => [
  { id: 1, title: 'Home', icon: HomeIcon, path: '/home' },
  { id: 2, title: 'Performance Indicators', icon: ChartBarIcon, path: '/analytics' },
  { id: 3, title: 'Reports', icon: ClipboardListIcon, path: '/profile' },
  { id: 4, title: 'Projects', icon: TemplateIcon, path: '/projects' },
  { id: 5, title: 'Maps', icon: LocationMarkerIcon, path: '/maps' },
  { id: 6, title: 'Settings', icon: CogIcon, path: '/settings' },
];
// Menu model singleton class
export class MenuModel {
  private static instance: MenuModel;
  private items: MenuItem[];

  private constructor() {
    this.items = getMenuAsText();
  }

  static getInstance(): MenuModel {
    if (!MenuModel.instance) {
      MenuModel.instance = new MenuModel();
    }
    return MenuModel.instance;
  }

  getMenuItems(): MenuItem[] {
    return this.items;
  }
}
