import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import { CircleUser } from "lucide-react";
import { useAuthContext } from "@/providers/authUtils";

export function Profile() {
  const { userLogout, user } = useAuthContext();

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-8 w-8 rounded-full"
        >
          <CircleUser className="h-10 w-10" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-56 p-4" align="end">
        <div className="flex flex-col space-y-1 mb-4">
          <p className="text-sm font-medium leading-none">
            {user?.user.username}
          </p>
          <p className="text-xs leading-none text-muted-foreground">
            {user?.user.email}
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <Link
            to="/profile"
            className="flex items-center text-sm text-green-600 hover:underline"
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="flex items-center text-sm text-green-600 hover:underline"
          >
            Settings
          </Link>
        </div>
        <div className="mt-4 pt-4 border-t">
          <Button
            onClick={userLogout}
            variant="ghost"
            size="sm"
            className="text-sm text-red-600 hover:underline px-0"
          >
            Logout
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
