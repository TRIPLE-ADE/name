import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Layout from "./Layout";

// Dummy data for notifications
const notifications = [
  { id: 1, message: "New message from John", timestamp: "2024-08-20 14:22" },
  {
    id: 2,
    message: "Server rebooted successfully",
    timestamp: "2024-08-19 09:15",
  },
  { id: 3, message: "New user registered", timestamp: "2024-08-18 17:30" },
  { id: 4, message: "Backup completed", timestamp: "2024-08-17 11:05" },
  { id: 5, message: "New comment on your post", timestamp: "2024-08-16 08:45" },
];

const AllNotifications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header>Dashboard</Header>
      <div className="max-w-3xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">All Notifications</h1>
          <Button variant="ghost" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li key={notification.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {notification.message}
                  </p>
                  <p className="text-sm text-gray-500">
                    {notification.timestamp}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AllNotifications;
