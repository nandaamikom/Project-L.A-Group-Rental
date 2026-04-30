"use client";

import React from "react";
import DashboardLayout from "@/layout/DashboardLayout";
import StatsCardGrid from "@/features/dashboard/StatsCardGrid";
import PerformanceChart from "@/features/dashboard/PerformanceChart";
import RecentBookingsList from "@/features/dashboard/RecentBookingsList";
import {
  dashboardStats,
  weeklyChartData,
  monthlyChartData,
  recentBookings,
} from "@/features/dashboard/services/data";

export default function DashboardPage() {
  return (
    <DashboardLayout
      breadcrumbs={[
        { label: "Dashboard" },
        { label: "Dashboard" },
      ]}
    >
      {/* Stats Cards */}
      <div className="mb-6">
        <StatsCardGrid stats={dashboardStats} />
      </div>

      {/* Performance Overview Chart */}
      <div className="mb-6">
        <PerformanceChart
          weeklyData={weeklyChartData}
          monthlyData={monthlyChartData}
        />
      </div>

      {/* Recent Bookings */}
      <div>
        <RecentBookingsList bookings={recentBookings} />
      </div>
    </DashboardLayout>
  );
}
