import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#E61B35",

    colorText: "#1E293B",

    colorBgContainer: "#FFFFFF",

    borderRadius: 12,

    fontSize: 14,

    fontFamily: "Inter, sans-serif",
  },
  components: {
    Layout: {
      headerBg: "#FFFFFF",
      siderBg: "#FFFFFF",
    },

    Menu: {
      itemSelectedBg: "#FFF1F0",
      itemSelectedColor: "#E61B35",
    },

    Card: {
      borderRadiusLG: 12,
    },

    Table: {
      borderRadius: 12,
    },
  },
};