
import { LocationData } from "@/types";
import { motion } from "framer-motion";
import { useLayout } from "@/hooks/useLayout";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import {WorldMapComponent} from "./WorldMap";
import { ProgressBar } from "./ProgressBar";

interface ChartDataPoint {
  month: string;
  projected?: number;
  actual?: number;
  current?: number;
  previous?: number;
}
interface LocationDataNEW {
  id: number;
  name: string;
  coordinates: [number, number];
  value: string;
  color?: string;
}


export const LineChartAndRevenueMap=()=>{
  const { isDarkMode } = useLayout();
  
  const revenueData: ChartDataPoint[] = [
    { month: "Jan", current: 10, previous: 15 },
    { month: "Feb", current: 15, previous: 12 },
    { month: "Mar", current: 8, previous: 18 },
    { month: "Apr", current: 12, previous: 8 },
    { month: "May", current: 18, previous: 14 },
    { month: "Jun", current: 22, previous: 20 },
  ];
   const locations: LocationData[] = [
      { city: "New York", value: "72K" },
      { city: "San Francisco", value: "39K" },
      { city: "Sydney", value: "25K" },
      { city: "Singapore", value: "61K" },
    ];

    const formatYAxisTick = (value: any) => {
      if (value === 0) return "0";
      return `${value}M`;
    };
    
    return( <div className="flex flex-col lg:flex-row gap-6 mb-8">
      <motion.div className="bg-primary-light p-6 rounded-2xl shadow-sm flex-1 lg:basis-[70%] flex flex-col">
  <div className="flex items-center mb-6">
    <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} border-r pr-4 ${isDarkMode ? 'border-gray-600' : 'border-[#1C1C1C33]'}`}>Revenue</h3>
    <div className="flex items-center gap-4 text-sm pl-4">
      <div className="flex items-center gap-2">
        <div className={`w-[6px] h-[6px] ${isDarkMode ? 'bg-white' : 'bg-black'} rounded-full`}></div>
        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Current Week</span>
        <span className={`font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>$58,211</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[6px] h-[6px] bg-[#A8C5DA] rounded-full"></div>
        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Previous Week</span>
        <span className={`font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>$68,768</span>
      </div>
    </div>
  </div>
  <div className="flex-1 min-h-64">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={revenueData}>
        <CartesianGrid
          strokeDasharray="0"
          stroke={isDarkMode ? "#404040" : "#1C1C1C0D"}
          horizontal={true}
          vertical={false}
        />
        <XAxis
          dataKey="month"
          axisLine={{ stroke: isDarkMode ? "#404040" : "#e5e7eb" }}
          tickLine={false}
          tick={{
            fontSize: 12,
            fill: isDarkMode ? "#9CA3AF" : "#1C1C1C66",
            fontWeight: 400,
          }}
          tickMargin={15}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 12,
            fill: isDarkMode ? "#9CA3AF" : "#9ca3af",
            fontWeight: 400,
          }}
          tickFormatter={formatYAxisTick}
          tickMargin={10}
          domain={[0, 30]}
          ticks={[0, 10, 20, 30]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: isDarkMode ? "#2A2A2A" : "#fff",
            border: isDarkMode ? "1px solid #404040" : "1px solid #e5e7eb",
            borderRadius: "8px",
            color: isDarkMode ? "#E5E5E5" : "#1C1C1C",
          }}
          formatter={(v, name) => [
            `${v}M`,
            name === "current" ? "Current Week" : "Previous Week",
          ]}
        />

        <Line
          type="monotone"
          dataKey="previous"
          stroke="#7dd3fc"
          strokeWidth={3}
          dot={false}
          activeDot={{
            r: 4,
            stroke: "#7dd3fc",
            strokeWidth: 2,
            fill: "white",
          }}
        />

        <Line
          type="monotone"
          dataKey="current"
          stroke="#000000"
          strokeWidth={3}
          strokeDasharray="8 4"
          dot={false}
          activeDot={{
            r: 4,
            stroke: "#000000",
            strokeWidth: 2,
            fill: "white",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</motion.div>

        <motion.div className="bg-primary-light p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 lg:basis-[30%]">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Revenue by Location
          </h3>
                    <WorldMapComponent  />
          <div className="space-y-4  mt-4 mb-6">
            {locations.map((location) => (
              <div className="flex flex-col" key={location.city}>
                <div
                
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">

                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{location.city}</span>
                </div>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  {location.value}
                </span>
              </div>
               <ProgressBar value={75} height="h-1" />
              </div>
            ))}
          </div>

        </motion.div>
      </div>)
}