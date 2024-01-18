export type Menu = {
  id: string;
  title: string;
  path: string;
  submenu?: Menu[];
};
