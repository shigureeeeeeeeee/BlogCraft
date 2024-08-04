"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";

export default function ProfileButton({ user }) {
  const router = useRouter();

  function handleClick() {
    router.push("/profile");
  }

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="p-0"
    >
      <Avatar className="h-8 w-8">
        {user ? (
          <AvatarImage src={user.image} alt={user.name} />
        ) : (
          <AvatarFallback>
            <UserIcon className="h-4 w-4" />
          </AvatarFallback>
        )}
      </Avatar>
    </Button>
  );
}