"use client";

import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { antdTheme } from "@/theme/antd-theme";
import viVN from "antd/locale/vi_VN";
import {useThemeStore} from "@/store/theme-store";
import { useEffect } from "react";
interface Props {
  children: React.ReactNode;
}

export default function AntdProvider({
  children,
}: Props) {
  const { mode } = useThemeStore();
  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={viVN}
        theme={{
          ...antdTheme,
          algorithm:
            mode === "dark"
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}