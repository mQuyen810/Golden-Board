"use client";

import QueryProvider from "./query-provider";
import AntdProvider from "./antd-provider";
import AuthProvider from "./auth-provider";

interface Props {
  children: React.ReactNode;
}

export default function AppProvider({
  children,
}: Props) {
  return (
    <QueryProvider>
      <AuthProvider>
        <AntdProvider>
          {children}
        </AntdProvider>
      </AuthProvider>
    </QueryProvider>
  );
}