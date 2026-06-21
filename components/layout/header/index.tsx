"use client";

import { Avatar, Button, Select, Tooltip, Badge } from "antd";
import {
  UserOutlined,
} from "@ant-design/icons";
import { Moon, Sun, RotateCcw, Bell } from "lucide-react";
import { useThemeStore } from "@/store/theme-store";

import styles from "./styles.module.scss";

export default function AppHeader() {
  const { mode, toggleTheme } = useThemeStore();

  return (
    <div className={styles.containerHeader}>
      <div className={styles.headerLeft}>
        <span className={styles.label}>Dự án:</span>
        <Select
          defaultValue="all"
          style={{ width: 220 }}
          options={[
            {
              value: "all",
              label: "Tất cả",
            },
            {
              value: "vtf-4.0",
              label: "VTF-4.0",
            },
            {
              value: "vtf-4.0-1",
              label: "VTF-4.0-1",
            },
            {
              value: "vtf-4.0-2",
              label: "VTF-4.0-2",
            },
          ]}
        />
      </div>

      <div className={styles.headerRight}>
        <Tooltip title="Làm mới dữ liệu">
          <Button
            type="text"
            icon={<RotateCcw size={17} />}
          />
        </Tooltip>
        <Tooltip title="Thông báo">
          <Badge count={3} size="small">
            <Button
              type="text"
              icon={<Bell size={17} />}
            />
          </Badge>
        </Tooltip>
        <Tooltip title="Giao diện">
          <Button
            type="text"
            onClick={toggleTheme}
            icon={mode === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          />
        </Tooltip>

        <Avatar
          size={34}
          icon={<UserOutlined />}
        />
      </div>
    </div>
  );
}