import React from "react";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";

// Dummy notification data
const notifications = [
  { id: 1, message: "New message from John" },
  { id: 2, message: "Server rebooted successfully" },
  { id: 3, message: "New user registered" },
  { id: 4, message: "Backup completed" },
  { id: 5, message: "New comment on your post" },
];

export const Notification: React.FC = () => {
  const notificationCount = notifications.length;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
          {notificationCount > 0 && (
            <Badge
              variant="red"
              className="absolute -top-1 left-4 h-4 w-4 flex items-center justify-center text-xs"
            >
              {notificationCount}
            </Badge>
          )}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 p-4" align="end">
        <div className="flex flex-col space-y-2">
          <p className="text-sm font-medium leading-none mb-2">Notifications</p>
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="text-sm text-neutral-800">
                {notification.message}
              </div>
            ))
          ) : (
            <p className="text-sm text-neutral-500">No new notifications</p>
          )}
        </div>
        <div className="mt-4 pt-4 border-t">
          <Link
            to="/notifications"
            className="text-sm text-blue-600 hover:underline px-0"
          >
            View all notifications
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
