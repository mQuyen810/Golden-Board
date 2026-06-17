import type { Metadata } from "next";

import AppProvider from "@/providers/app-provider";

// import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Bảng Vàng JIRA",
  description: "Dashboard Bảng Vàng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
