import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#E61B35",
    colorText: "#1E293B",
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
  },
  components: {
    Layout: {
      siderBg: "var(--bg-card)",
      headerBg: "var(--bg-card)",
    },
  },
};