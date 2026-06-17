"use client";

import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { antdTheme } from "@/theme/antd-theme";
import viVN from "antd/locale/vi_VN";
interface Props {
  children: React.ReactNode;
}

export default function AntdProvider({
  children,
}: Props) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme} locale={viVN}>
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}