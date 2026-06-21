"use client";
import styles from "./styles.module.scss";
import {
  Bug,
  Users,
  CircleCheckBig,
} from "lucide-react";
import { Row, Col } from "antd";
import StatsCard from "@/components/summary-stats";
import {TypeAnimation} from "react-type-animation";

export default function DashboardPage() {
const stats = [
  {
    title: "Tổng số nhân sự",
    value: 24,
    suffix: "",
    growth: 0,
    previousValue: "24",
    variant: "purple",
    icon: <Users size={18} />,
  },
  {
    title: "Tổng task hoàn thành",
    value: 4080,
    suffix: "K",
    growth: -7,
    previousValue: "4.39K",
    variant: "success",
    icon: <CircleCheckBig size={18} />,
  },
  {
    title: "Bug xử lý",
    value: 842,
    suffix: "",
    growth: -12,
    previousValue: "835",
    variant: "danger",
    icon: <Bug size={18} />,
  },

] as const;
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardContent}>
        <h1>Chào mừng, <span>Q</span></h1>
        <TypeAnimation
      sequence={[
        "        Chào mừng bạn đến với Bảng Vàng – nơi những nỗ lực được ghi nhận, thành tích được tôn vinh và giá trị được lan tỏa. Theo dõi các chỉ số hiệu suất, khám phá bảng xếp hạng nổi bật và cùng xây dựng môi trường làm việc tích cực, minh bạch và đầy cảm hứng để chinh phục những mục tiêu mới.",
      ]}
      speed={80}
      cursor={true}
      repeat={0}
    />
      </div>
      <Row gutter={[16, 16]}>
        {stats.map((item) => (
          <Col
            key={item.title}
            xs={24}
            sm={12}
            lg={12}
            xl={8}
          >
            <StatsCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}