import { useState } from 'react';
import { MenuItem } from '../Types';
import { MenuModel } from './side menu';
import { getMenuAsText } from '../Data/side menu Nav';

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
