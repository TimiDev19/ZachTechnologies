"use client";
import { useState } from "react";

interface Transaction {
  id: string;
  date: string;
  time: string;
  amount: string;
  status: "Success" | "Failed";
}

const sampleData: Transaction[] = [
  { id: "#5719191", date: "28/09/2023", time: "12:30 AM", amount: "4 Mins", status: "Success" },
  { id: "#5719192", date: "28/09/2023", time: "12:40 AM", amount: "2 Mins", status: "Failed" },
  { id: "#5719193", date: "28/09/2023", time: "01:00 AM", amount: "5 Mins", status: "Success" },
  { id: "#5719194", date: "28/09/2023", time: "01:20 AM", amount: "3 Mins", status: "Success" },
  { id: "#5719195", date: "28/09/2023", time: "01:40 AM", amount: "1 Min", status: "Success" },
  { id: "#5719196", date: "28/09/2023", time: "02:00 AM", amount: "6 Mins", status: "Failed" },
  { id: "#5719197", date: "28/09/2023", time: "02:20 AM", amount: "4 Mins", status: "Success" },
  { id: "#5719198", date: "28/09/2023", time: "02:40 AM", amount: "8 Mins", status: "Success" },
  { id: "#5719199", date: "28/09/2023", time: "03:00 AM", amount: "10 Mins", status: "Success" },
  { id: "#5719200", date: "28/09/2023", time: "03:20 AM", amount: "12 Mins", status: "Failed" },
  { id: "#5719191", date: "28/09/2023", time: "12:30 AM", amount: "4 Mins", status: "Success" },
  { id: "#5719192", date: "28/09/2023", time: "12:40 AM", amount: "2 Mins", status: "Failed" },
  { id: "#5719193", date: "28/09/2023", time: "01:00 AM", amount: "5 Mins", status: "Success" },
  { id: "#5719194", date: "28/09/2023", time: "01:20 AM", amount: "3 Mins", status: "Success" },
  { id: "#5719195", date: "28/09/2023", time: "01:40 AM", amount: "1 Min", status: "Success" },
  { id: "#5719196", date: "28/09/2023", time: "02:00 AM", amount: "6 Mins", status: "Failed" },
  { id: "#5719197", date: "28/09/2023", time: "02:20 AM", amount: "4 Mins", status: "Success" },
  { id: "#5719198", date: "28/09/2023", time: "02:40 AM", amount: "8 Mins", status: "Success" },
  { id: "#5719199", date: "28/09/2023", time: "03:00 AM", amount: "10 Mins", status: "Success" },
  { id: "#5719200", date: "28/09/2023", time: "03:20 AM", amount: "12 Mins", status: "Failed" },
];

export default function TransactionHistory() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(sampleData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const data = sampleData.slice(startIndex, endIndex);

  console.log("Current page:", page, "Showing IDs:", data.map(d => d.id));

  return (
    <div className="bg-[#f6f6f6] p-4 rounded-2xl shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Transaction History</h2>
        <span className="material-symbols-outlined text-gray-500">calendar_today</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-white">
            <tr className="text-sm text-gray-600">
              <th className="p-3 font-medium">ID</th>
              <th className="p-3 font-medium">Date</th>
              <th className="p-3 font-medium">Transaction Time</th>
              <th className="p-3 font-medium">Amount</th>
              <th className="p-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((tx, index) => (
              <tr key={`${tx.id}-${startIndex + index}`} className="border-t text-sm">
                <td className="p-3">{tx.id}</td>
                <td className="p-3">{tx.date}</td>
                <td className="p-3">{tx.time}</td>
                <td className="p-3">{tx.amount}</td>
                <td
                  className={`p-3 font-medium ${
                    tx.status === "Success" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4 z-10">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className=" cursor-pointer z-[20] px-2 py-1 text-gray-500 disabled:opacity-30"
        >
          «
        </button>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className=" cursor-pointer z-[20] px-2 py-1 text-gray-500 disabled:opacity-30"
        >
          ‹
        </button>

        <span className="px-4 py-1 rounded-full border font-medium bg-white">
          {page} / {totalPages}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className=" cursor-pointer z-[20] px-2 py-1 text-gray-500 disabled:opacity-30"
        >
          ›
        </button>
        <button
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
          className=" cursor-pointer z-[20] px-2 py-1 text-gray-500 disabled:opacity-30"
        >
          »
        </button>
      </div>
    </div>
  );
}
