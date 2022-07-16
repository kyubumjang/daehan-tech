export interface MenuContent {
  contentTitle: string;
}

export interface SubMenu {
  subtitle: string;
  subtitleIcons: string;
  content: MenuContent[];
}

export interface MenuItemProps {
  title: string;
  submenu: SubMenu[] | [];
}
