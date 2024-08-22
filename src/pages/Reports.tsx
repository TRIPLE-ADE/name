import React, { useState, useEffect } from "react";
import { Button, Input, Label } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header, Layout } from "@/components";
import { DatePickerWithRange } from "@/components/ui/DatePickerWithRange";

type Report = {
  id: number;
  date: Date;
  location: string;
  status: string;
  description: string;
};

const dummyReports: Report[] = [
  {
    id: 1,
    date: new Date("2024-08-01"),
    location: "Lagos",
    status: "Open",
    description: "Pipeline leakage reported in Lagos area.",
  },
  {
    id: 2,
    date: new Date("2024-07-29"),
    location: "Abuja",
    status: "Closed",
    description: "Routine maintenance completed in Abuja.",
  },
  {
    id: 3,
    date: new Date("2024-07-20"),
    location: "Port Harcourt",
    status: "Pending",
    description:
      "Inspection scheduled for potential corrosion in Port Harcourt.",
  },
  {
    id: 4,
    date: new Date("2024-08-05"),
    location: "Kano",
    status: "Open",
    description: "Pipeline vandalism detected in Kano region.",
  },
  {
    id: 5,
    date: new Date("2024-08-10"),
    location: "Enugu",
    status: "Closed",
    description: "Valve replacement completed in Enugu.",
  },
];

type Filters = {
  startDate: Date | null;
  endDate: Date | null;
  location: string;
  status: string;
};

const Reports: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    startDate: null,
    endDate: null,
    location: "",
    status: "",
  });

  const [reports, setReports] = useState<Report[]>(dummyReports);

  useEffect(() => {
    const fetchReports = () => {
      const filteredReports = dummyReports.filter((report) => {
        const matchesLocation = filters.location
          ? report.location.toLowerCase().includes(filters.location.toLowerCase())
          : true;
        const matchesStatus = filters.status
          ? report.status === filters.status
          : true;
        const matchesDateRange =
          (filters.startDate ? report.date >= filters.startDate : true) &&
          (filters.endDate ? report.date <= filters.endDate : true);

        return matchesLocation && matchesStatus && matchesDateRange;
      });

      setReports(filteredReports);
    };

    fetchReports();
  }, [filters]);

  const handleFilterChange = (
    field: keyof Filters,
    value: string | Date | null,
  ) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const exportReports = () => {
    console.log("Exporting reports:", reports);
  };

  return (
    <Layout>
      <Header>Reports</Header>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Reports</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="dateRange">Date Range</Label>
            <DatePickerWithRange
              onDateChange={(range: { from: Date; to: Date }) => {
                handleFilterChange("startDate", range.from);
                handleFilterChange("endDate", range.to);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              placeholder="Enter location"
              className="border p-2 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="status">Status</Label>
            <Select
              onValueChange={(value) => handleFilterChange("status", value)}
              defaultValue=""
            >
              <SelectTrigger className="w-[180px] border p-2 focus:outline-none focus-within:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <Button onClick={exportReports} className="bg-indigo-400 text-white">
            Export Reports
          </Button>
        </div>
        <div>
          {reports.length > 0 ? (
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td className="border px-4 py-2">{report.id}</td>
                    <td className="border px-4 py-2">
                      {report.date.toDateString()}
                    </td>
                    <td className="border px-4 py-2">{report.location}</td>
                    <td className="border px-4 py-2">{report.status}</td>
                    <td className="border px-4 py-2">{report.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No reports found for the selected filters.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
