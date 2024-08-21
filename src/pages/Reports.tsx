import React, { useState } from "react";
import { Button, Input, Label } from "@/components/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Header, Layout } from "@/components";

// Uncomment or replace with the actual DatePicker component if available
// import { DatePicker } from '@/components/DatePicker';

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

  const handleFilterChange = (
    field: keyof Filters,
    value: string | Date | null,
  ) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

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

  const exportReports = () => {
    console.log("Exporting reports:", reports);
    // Implement export logic here
  };

  return (
    <Layout>
      <Header>Reports</Header>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Reports</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col">
            <Label htmlFor="startDate">Start Date</Label>
            {/* Uncomment or replace with the actual DatePicker component */}
            {/* <DatePicker
                            id="startDate"
                            selected={filters.startDate}
                            onChange={(date) => handleFilterChange('startDate', date)}
                            placeholderText="Select start date"
                            className="border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        /> */}
          </div>
          <div className="flex flex-col">
            <Label htmlFor="endDate">End Date</Label>
            {/* Uncomment or replace with the actual DatePicker component */}
            {/* <DatePicker
                            id="endDate"
                            selected={filters.endDate}
                            onChange={(date) => handleFilterChange('endDate', date)}
                            placeholderText="Select end date"
                            className="border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        /> */}
          </div>
          <div className="flex flex-col">
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
          <div className="flex flex-col">
            <Label htmlFor="status">Status</Label>
            <Select
              onValueChange={(value) => handleFilterChange("status", value)}
              defaultValue=""
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <Button onClick={fetchReports} className="bg-indigo-400">
            Fetch Reports
          </Button>
          <Button onClick={exportReports} className="bg-green-500">
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
