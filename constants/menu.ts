import {
  DashboardOutlined,
  TrophyOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

export const MENU_ITEMS = [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: "Tổng quan",
  },
  {
    key: "/ranking",
    icon: <TrophyOutlined />,
    label: "Bảng xếp hạng",
  },
  {
    key: "/employee",
    icon: <TeamOutlined />,
    label: "Nhân sự",
  },
  {
    key: "/report",
    icon: <BarChartOutlined />,
    label: "Báo cáo",
  },
];