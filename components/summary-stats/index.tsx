"use client";

import { Card } from "antd";
import CountUp from "react-countup";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import styles from "./styles.module.scss";

export type StatsCardVariant =
  | "success"
  | "danger"
  | "purple";

type StatsCardProps = {
  title: string;
  value: number;
  suffix?: string;
  growth: number;
  previousValue: string;
  icon: React.ReactNode;
  variant: StatsCardVariant;
};

export default function StatsCard({
  title,
  value,
  suffix,
  growth,
  previousValue,
  icon,
  variant,
}: StatsCardProps) {
  const isPositive = growth > 0;
  const isNegative = growth < 0;

  const getTrendIcon = () => {
    if (isPositive) {
      return <TrendingUp size={12} />;
    }

    if (isNegative) {
      return <TrendingDown size={12} />;
    }

    return <Minus size={12} />;
  };

  return (
    <Card
      className={`${styles.card} ${styles[variant]}`}
      variant="borderless"
    >
      <div className={styles.header}>
        <div className={styles.left}>
          <div
            className={`${styles.iconWrapper} ${styles[`${variant}Icon`]}`}
          >
            {icon}
          </div>

          <span className={styles.title}>{title}</span>
        </div>

        <div
          className={`${styles.badge} ${styles[`${variant}Badge`]}`}
        >
          {getTrendIcon()}
          <span>
            {growth > 0 ? "+" : ""}
            {growth}%
          </span>
        </div>
      </div>

      <div className={styles.value}>
        <CountUp
          end={value}
          duration={1.5}
          separator=","
        />
        {suffix && (
          <span className={styles.suffix}>
            {suffix}
          </span>
        )}
      </div>

      <div className={styles.divider} />

      <div className={styles.footer}>
        {getTrendIcon()}

        <span>
          {isPositive
            ? "up from"
            : isNegative
            ? "down from"
            : "holding around"}

          <strong>{previousValue}</strong>

          last week
        </span>
      </div>
    </Card>
  );
}