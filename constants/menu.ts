import {
  DashboardOutlined,
  TrophyOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

export const MENU_ITEMS = [
  {
    key: "/dashboard",
    icon: DashboardOutlined,
    label: "Tổng quan",
  },
  {
    key: "/ranking",
    icon: TrophyOutlined,
    label: "Bảng xếp hạng",
    children: [
      {
        key: "/ranking/task",
        icon: BarChartOutlined,
        label: "BXH slsx/ulnl",
      },
      {
        key: "/ranking/bug",
        icon: BarChartOutlined,
        label: "BXH bug",
      },
    ],
  },
  {
    key: "/personal",
    icon: TeamOutlined,
    label: "Cá nhân",
    children: [
      {
        key: "/personal/task",
        icon: BarChartOutlined,
        label: "Thống kê task",
      },
      {
        key: "/personal/bug",
        icon: BarChartOutlined,
        label: "Thống kê bug",
      },
    ],
  },
];