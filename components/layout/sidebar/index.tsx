"use client";

import { Button, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";

import { MENU_ITEMS } from "@/constants/menu";
import { GiftIcon } from "@/components/icons";
import { Avatar } from "antd";
import {UserOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import { ChevronsUpDown, PanelLeftClose, PanelLeftOpen } from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function Sidebar({
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className={`${styles.containerSidebar} ${collapsed ? styles.collapsed : ''}`}>
      {/* Header - Workspace */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerLeft}>
            <GiftIcon width={34} height={34} />
            {!collapsed && (
              <div className={`${styles.workspaceName} ${collapsed ? styles.hidden : ""}`}>
                <h3>Bảng vàng</h3>
                <p>Vinh danh nhân sự</p>
              </div>
            )}
          </div>
          <Button type="text" onClick={toggleCollapsed} icon={collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />} size="medium"/>
              
        </div>
      </div>

      {/* Menu */}
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        items={MENU_ITEMS.map((item) => ({
          ...item,
          icon: <item.icon style={{ fontSize: 15 }} />,
          children: item.children?.map((child) => ({
            ...child,
            icon: child.icon ? (
              <child.icon style={{ fontSize: 15 }} />
            ) : undefined,
          })),
        }))}
        className={styles.menu}
        inlineCollapsed={collapsed}
        onClick={({ key }) => router.push(key)}
      />

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <Avatar size={32} icon={<UserOutlined />} />

          {!collapsed && (
            <div className={styles.userInfo}>
              <p className={styles.userName}>Q</p>
              <p className={styles.userRole}>Member</p>
            </div>
          )}
        </div>

        {!collapsed && (
          <ChevronsUpDown size={14} color="#94a3b8" />
        )}
      </div>
    </div>
  );
}