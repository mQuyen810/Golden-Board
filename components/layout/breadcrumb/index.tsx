"use client";

import { Breadcrumb } from "antd";
import Link from "next/link";
import type { BreadcrumbProps } from "antd";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { House } from "lucide-react";
import styles from "./styles.module.scss";

const routeMap: Record<string, string> = {
  "/ranking": "Bảng xếp hạng",
  "/ranking/task": "BXH slsx/ulnl",
  "/ranking/bug": "BXH bug",

  "/personal": "Cá nhân",
  "/personal/task": "Thống kê task",
  "/personal/bug": "Thống kê bug",
};

export default function AppBreadcrumb() {
  const pathname = usePathname();

  const pathSnippets = pathname.split("/").filter(Boolean);

  const items: BreadcrumbProps['items'] = [
    {
      title: (
        <Link href="/dashboard" className={styles.homeLink}>
            <House
              size={14}
              strokeWidth={2}
              className={styles.homeIcon}
              style={{
                position: "relative",
                top: "4px",
              }}
            />
        </Link>
      ),
    },
  ];

  pathSnippets.forEach((_, index) => {
    const url =
      "/" + pathSnippets.slice(0, index + 1).join("/");

    if (url === "/dashboard") return;

    items.push({
      title: routeMap[url] || pathSnippets[index],
    });
  });

  return (
    <Breadcrumb
        separator={<ChevronRight size={14} strokeWidth={2}/>}
      items={items}
      className={styles.breadcrumb}
    />
  );
}