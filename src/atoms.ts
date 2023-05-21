import { atom } from "recoil";

export const isDarkState = atom({
  key: "isDark",
  default: false,
});

export const sidebarState = atom({
  key: "isSidebar",
  default: false,
});
