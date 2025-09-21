
import { ChartDataPoint } from "@/types";
import { MetricCard } from "./MetricCard";
import { useLayout } from "@/hooks/useLayout";

import { motion } from "framer-motion";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export const CardsAndChart = () => {
  const { isDarkMode } = useLayout();
  
  const projectionsData: ChartDataPoint[] = [
    { month: "Jan", projected: 20, actual: 18 },
    { month: "Feb", projected: 25, actual: 22 },
    { month: "Mar", projected: 22, actual: 28 },
    { month: "Apr", projected: 28, actual: 26 },
    { month: "May", projected: 30, actual: 32 },
    { month: "Jun", projected: 35, actual: 30 },
  ];

    return( <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6 mb-8 ">
        <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <MetricCard
            title="Customers"
            value="3,781"
            change="+11.01%"
            className="bg-primary-blue"
            isPositive={true}

          />
          <MetricCard
            title="Orders"
            value="1,219"
            change="-0.03%"
            isPositive={false}
            className="bg-primary-light"
          />
          <MetricCard
            title="Revenue"
            value="$695"
            change="+15.03%"
            isPositive={true}
            className="bg-primary-light"
          />
          <MetricCard
            title="Growth"
            value="30.1%"
            change="+6.08%"
            isPositive={true}
            className="bg-primary-purple"

          />
        </div>

        <motion.div className="lg:col-span-1 bg-primary-light p-6 rounded-2xl  shadow-sm border border-gray-100">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Projections vs Actuals
          </h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height={168}>
              <BarChart data={projectionsData} barCategoryGap={20}>
                <CartesianGrid
                  strokeDasharray=""
                  horizontal={true}
                  vertical={false}
                  stroke={isDarkMode ? "#404040" : "#e5e7eb"}
                />

                <XAxis
                  dataKey="month"
                  axisLine={{ stroke: isDarkMode ? "#404040" : "#e5e7eb" }}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: isDarkMode ? "#9CA3AF" : "#1C1C1C66" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: isDarkMode ? "#9CA3AF" : "#6b7280" }}
                  tickFormatter={(v) => `${v}M`}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "8px",
                    backgroundColor: isDarkMode ? "#2A2A2A" : "#ffffff",
                    border: isDarkMode ? "1px solid #404040" : "1px solid #e5e7eb",
                    color: isDarkMode ? "#E5E5E5" : "#1C1C1C",
                  }}
                  formatter={(v) => [`${v}M`, ""]}
                />

                <Bar
                  dataKey="projected"
                  shape={(props: any) => {
                    const { x, y, width, height, payload } = props;

                    const radius = 8;

                    const actualValue = payload.actual;
                    const projectedValue = payload.projected;

                    const total = actualValue + projectedValue;
                    const actualHeight = (actualValue / total) * height;
                    const projectedHeight = (projectedValue / total) * height;

                    const isProjectedOnTop = projectedHeight > 0;

                    const renderRect = (
                      x: number,
                      y: number,
                      width: number,
                      height: number,
                      roundTop: boolean,
                      fill: string
                    ) => {
                      if (!roundTop)
                        return (
                          <rect
                            x={x}
                            y={y}
                            width={width}
                            height={height}
                            fill={fill}
                          />
                        );
                      const path = `
                      M${x},${y + height} 
                     L${x},${y + radius} 
                 Q${x},${y} ${x + radius},${y} 
                 L${x + width - radius},${y} 
                  Q${x + width},${y} ${x + width},${y + radius} 
               L${x + width},${y + height} Z
                `;
                      return <path d={path} fill={fill} />;
                    };

                    return (
                      <>
                        {/* Top segment */}
                        {isProjectedOnTop &&
                          renderRect(
                            x,
                            y,
                            width,
                            projectedHeight,
                            true,
                            "#cfe0eb"
                          )}

                        {/* Bottom segment */}
                        {actualHeight > 0 &&
                          renderRect(
                            x,
                            y + (isProjectedOnTop ? projectedHeight : 0),
                            width,
                            actualHeight,
                            !isProjectedOnTop && projectedHeight === 0, // round if only actual is present
                            "#a9c5da"
                          )}
                      </>
                    );
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>)
}