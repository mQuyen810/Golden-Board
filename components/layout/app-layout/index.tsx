"use client";

import { useState } from "react";
import { Layout } from "antd";

import Sidebar from "../sidebar";
import AppHeader from "../header";
import AppBreadcrumb from "../breadcrumb";
import styles from "./styles.module.scss";

const { Sider, Header, Content } = Layout;

export default function AppLayout({
  children,
}: React.PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        width={248}
        collapsedWidth={90}
        collapsed={collapsed}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      </Sider>

      <Layout>
        <Header className={styles.header}>
          <AppHeader />
        </Header>

        <Content className={styles.content}>
          <AppBreadcrumb />
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}