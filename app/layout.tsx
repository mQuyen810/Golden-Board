import type { Metadata } from "next";

import AppProvider from "@/providers/app-provider";
import AppLayout from "@/components/layout/app-layout";
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Bảng Vàng",
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
        <AppProvider>
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}
