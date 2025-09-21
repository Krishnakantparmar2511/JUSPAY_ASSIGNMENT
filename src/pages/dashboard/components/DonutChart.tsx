import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { useLayout } from '@/hooks/useLayout';

interface SalesDataPoint {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: SalesDataPoint[];
  className?: string;
}

export const DonutChart: React.FC<DonutChartProps> = ({ 
  data, 
  className = "" 
}) => {
  const { isDarkMode } = useLayout();
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
    value: string;
    name: string;
  }>({
    show: false,
    x: 0,
    y: 0,
    value: '',
    name: ''
  });

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const containerRect = svgRef.current.getBoundingClientRect();
    const size = Math.min(containerRect.width, containerRect.height, 120);
    const center = size / 2;
    
    const strokeWidth = 20;
    const radius = (size - strokeWidth) / 2 - 4;
    const gapAngle = 0.15;

    const pieData = data.map(d => d.value);
    const total = d3.sum(pieData);
    
    let currentAngle = -Math.PI / 2;
    const segmentAngles = pieData.map((value, index) => {
      const segmentAngle = (value / total) * 2 * Math.PI - gapAngle;
      const startAngle = currentAngle;
      const endAngle = currentAngle + segmentAngle;
      currentAngle = endAngle + gapAngle;
      return { startAngle, endAngle, value, index };
    });

    const g = svg
      .attr("width", size)
      .attr("height", size)
      .append("g")
      .attr("transform", `translate(${center}, ${center})`);

    segmentAngles.forEach((angles, index) => {
      const { startAngle, endAngle } = angles;
      const color = data[index].color;
      const capRadius = strokeWidth / 2;
      
      const startX = Math.cos(startAngle) * radius;
      const startY = Math.sin(startAngle) * radius;
      const endX = Math.cos(endAngle) * radius;
      const endY = Math.sin(endAngle) * radius;
      
      const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
      
      const segmentGroup = g.append("g");
      
      const adjustedEndAngle = endAngle - 0.02;
      const adjustedEndX = Math.cos(adjustedEndAngle) * radius;
      const adjustedEndY = Math.sin(adjustedEndAngle) * radius;
      
      segmentGroup.append("path")
        .attr("d", `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${adjustedEndX} ${adjustedEndY}`)
        .attr("fill", "none")
        .attr("stroke", color)
        .attr("stroke-width", strokeWidth)
        .attr("stroke-linecap", "butt");
      
      if (index !== 0) {
        segmentGroup.append("circle")
          .attr("cx", startX)
          .attr("cy", startY)
          .attr("r", capRadius)
          .attr("fill", color);
      }
      
      if (index !== data.length - 1) {
        segmentGroup.append("circle")
          .attr("cx", endX)
          .attr("cy", endY)
          .attr("r", capRadius * 1)
          .attr("fill", isDarkMode ? "#2A2A2A" : "#F7F9FB")
          .attr("stroke", isDarkMode ? "#2A2A2A" : "#F7F9FB")
          .attr("stroke-width", 1);
      }
      
      segmentGroup
        .style("cursor", "pointer")
        .on("mouseenter", function(event) {
          const containerRect = containerRef.current?.getBoundingClientRect();
          
          if (containerRect) {
            const x = event.clientX - containerRect.left;
            const y = event.clientY - containerRect.top;
            
            setTooltip({
              show: true,
              x: x,
              y: y,
              value: `${data[index].value}%`,
              name: data[index].name
            });
          }
          
          const highlightIncrease = Math.max(1, strokeWidth * 0.15);
          segmentGroup.selectAll("path")
            .attr("stroke-width", strokeWidth + highlightIncrease);
          segmentGroup.selectAll("circle")
            .attr("r", capRadius + highlightIncrease/2);
          segmentGroup.style("opacity", 0.8);
        })
        .on("mousemove", function(event) {
          const containerRect = containerRef.current?.getBoundingClientRect();
          
          if (containerRect) {
            const x = event.clientX - containerRect.left;
            const y = event.clientY - containerRect.top;
            
            setTooltip(prev => ({
              ...prev,
              x: x,
              y: y
            }));
          }
        })
        .on("mouseleave", function() {
          setTooltip({
            show: false,
            x: 0,
            y: 0,
            value: '',
            name: ''
          });
          
          segmentGroup.selectAll("path")
            .attr("stroke-width", strokeWidth);
          segmentGroup.selectAll("circle")
            .attr("r", capRadius);
          segmentGroup.style("opacity", 1);
        });
    });

  }, [data]);

  return (
    <div ref={containerRef} className={`relative flex justify-center  w-full h-full ${className}`}>
      <svg 
        ref={svgRef} 
        className="w-full h-full"
        style={{ minHeight: '120px', maxWidth: '120px', maxHeight: '120px' }}
      />
      
      {tooltip.show && (
        <div 
          className={`absolute ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-800 text-white'} px-2 py-1 rounded shadow-lg text-xs font-medium pointer-events-none z-50 whitespace-nowrap`}
          style={{
            left: tooltip.x + 8,
            top: tooltip.y - 35,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="font-semibold">{tooltip.name}</div>
          <div>{tooltip.value}</div>
        </div>
      )}
    </div>
  );
};