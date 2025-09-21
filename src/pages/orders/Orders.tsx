import React from "react";
import {
  Filter,
  ArrowUpDown,
  Plus,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { SearchBar } from "@/components/ui/SearchInput";
import { useLayout } from "@/hooks/useLayout";
import { useOrders } from "@/hooks/useOrders";
import { getStatusDot } from "./mockData";

export const Orders: React.FC = () => {
  const { isDarkMode } = useLayout();
  const {
    searchTerm,
    setSearchTerm,
    selectedStatus,
    setSelectedStatus,
    currentPage,
    setCurrentPage,
    selectedOrders,
    showFilters,
    setShowFilters,
    filteredOrders,
    totalPages,
    paginatedOrders,
    toggleOrderSelection,
    toggleAllOrders,
  } = useOrders();

  return (
    <div className={`min-h-screen ${isDarkMode ? "" : "bg-white"}`}>
      <div className="mx-auto">
        <div className="mb-8">
          <h1
            className={`text-2xl font-semibold ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            } mb-6`}
          >
            Order List
          </h1>
          <div
            className={`flex p-2 items-center justify-between rounded-lg mb-6 ${
              isDarkMode ? "bg-[#3a3a3a]" : "bg-primary-light"
            }`}
          >
            <div className="flex items-center gap-x-2">
              <button
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-[#4a4a4a] hover:text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Plus className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-[#4a4a4a] hover:text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Filter className="w-4 h-4" />
              </button>

              <button
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-[#4a4a4a] hover:text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <ArrowUpDown className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                showShortcut={false}
              />
            </div>
          </div>

          {showFilters && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                isDarkMode ? "bg-[#3a3a3a]" : "bg-primary-light"
              }`}
            >
              <div className="flex items-center gap-4">
                <label
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Status:
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className={`px-3 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDarkMode
                      ? "bg-[#4a4a4a] border-gray-600 text-gray-200"
                      : "bg-white border-gray-300 text-gray-900"
                  }`}
                >
                  <option value="all">All Status</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Complete">Complete</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead
                className={`border-b ${
                  isDarkMode ? "border-gray-700" : "border-[#1C1C1C0D]"
                }`}
              >
                <tr>
                  <th className="w-12 px-6 py-3">
                    <input
                      type="checkbox"
                      checked={
                        selectedOrders.size === paginatedOrders.length &&
                        paginatedOrders.length > 0
                      }
                      onChange={toggleAllOrders}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Order ID
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    User
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Project
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Address
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Date
                  </th>
                  <th
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Status
                  </th>
                  <th className="w-12 px-6 py-3"></th>
                </tr>
              </thead>
              <tbody
                className={`divide-y ${
                  isDarkMode ? " divide-gray-600" : "bg-white divide-gray-200"
                }`}
              >
                {paginatedOrders.map((order) => (
                  <tr
                    key={order.id}
                    className={`transition-colors ${
                      selectedOrders.has(order.id)
                        ? isDarkMode
                          ? "bg-blue-900/20"
                          : "bg-blue-50"
                        : isDarkMode
                        ? "hover:bg-[#4a4a4a]"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedOrders.has(order.id)}
                        onChange={() => toggleOrderSelection(order.id)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-sm font-medium ${
                          isDarkMode ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        #{order.id}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium mr-3">
                          {order.user.name.charAt(0)}
                        </div>
                        <span
                          className={`text-sm font-medium overflow-ellipsis ${
                            isDarkMode ? "text-gray-200" : "text-gray-900"
                          }`}
                        >
                          {order.user.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-gray-300" : "text-gray-900"
                        }`}
                      >
                        {order.project}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-sm overflow-ellipsis ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {order.address}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className={`flex items-center text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {order.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${getStatusDot(
                            order.status
                          )}`}
                        ></div>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className={`p-1 transition-colors ${
                          isDarkMode
                            ? "text-gray-500 hover:text-gray-300"
                            : "text-gray-400 hover:text-gray-600"
                        }`}
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className={`px-6 py-4 border-t flex items-center justify-end ${
              isDarkMode ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDarkMode
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                        currentPage === pageNum
                          ? isDarkMode
                            ? "bg-[#4a4a4a] text-gray-200"
                            : "bg-[#1C1C1C0D] text-black"
                          : isDarkMode
                          ? "text-gray-400 hover:bg-[#4a4a4a] hover:text-gray-200"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDarkMode
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty state */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div
              className={`mb-4 ${
                isDarkMode ? "text-gray-600" : "text-gray-400"
              }`}
            >
              <Filter className="w-12 h-12 mx-auto" />
            </div>
            <h3
              className={`text-lg font-medium mb-2 ${
                isDarkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              No orders found
            </h3>
            <p className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
              {searchTerm || selectedStatus !== "all"
                ? "Try adjusting your search or filter criteria."
                : "No orders have been created yet."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
