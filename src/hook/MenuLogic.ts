import { useState } from 'react';
import { MenuItem } from '../Types';
import { MenuModel, getMenuAsText } from '../constants/sideBarData';

const useMenu = () => {
  const [activeMenu] = useState<'text' | 'model'>('text');

  const getMenuItems = (): MenuItem[] => {
    switch (activeMenu) {
      case 'model':
        return MenuModel.getInstance().getMenuItems();
      case 'text':
      default:
        return getMenuAsText();
    }
  };

  return { getMenuItems };
};

export default useMenu;
