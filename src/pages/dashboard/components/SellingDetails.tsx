
import { motion } from "framer-motion";
import {DonutChart} from "./DonutChart";
import { useLayout } from "@/hooks/useLayout";


interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}


interface SalesDataPoint {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}
export const SellingDetails = () => {
  const { isDarkMode } = useLayout();

  const salesData: SalesDataPoint[] = [
    { name: "Direct", value: 38.6, color: "#1C1C1C" },
    { name: "Affiliate", value: 22.5, color: "#95A4FC" },
    { name: "Sponsored", value: 30.8, color: "#B1E3FF" },
    { name: "E-mail", value: 18.1, color: "#BAEDBD" },
  ];

  const products: Product[] = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ];

    return(   <div className="flex flex-col lg:flex-row gap-6 mb-8 ">
        <motion.div className="bg-primary-light p-6 rounded-2xl shadow-sm border flex-1 lg:basis-[70%] border-gray-100">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Top Selling Products
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`text-left text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} border-b`}>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Quantity</th>
                  <th className="pb-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {products.map((product, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className={`py-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>{product.name}</td>
                    <td className={`py-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{product.price}</td>
                    <td className={`py-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{product.quantity}</td>
                    <td className={`py-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} font-medium`}>
                      {product.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div className="bg-primary-light flex-1 lg:basis-[30%] p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>
            Total Sales
          </h3>
          <div className="flex items-center w-full  justify-center mb-6">
            
              
<DonutChart data={salesData} />
             
          </div>
          <div className="space-y-3">
            {salesData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{item.name}</span>
                </div>
                <span className={`font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  $
                  {item.name === "Direct"
                    ? "300.56"
                    : item.name === "Affiliate"
                    ? "135.18"
                    : item.name === "Sponsored"
                    ? "154.02"
                    : "48.96"}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>)
}