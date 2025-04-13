// Import icons

import { MenuItem } from '../Types';
import { getMenuAsText } from '../Data/side menu Nav';

// Menu item type

// Static menu items generator

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
