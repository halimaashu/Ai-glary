"use client";
import { UpdateModalForm } from "@/components/shared/UpdateModelUser";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

export default function ProfilePage() {
  const data = authClient.useSession();
  const user = data?.data?.user;

  return (
    <div className="max-w-lg mx-auto py-20 h-screen">
      <h1 className="mb-5">This is the profile page</h1>
      <Card className="flex justify-center items-center p-8">
        <Avatar size="lg">
          <Avatar.Image
            alt={user?.name ?? "User avatar"}
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name?.charAt(0) ?? "?"}
          </Avatar.Fallback>
        </Avatar>
        <h1 className="text-2xl font-bold mt-5">{user?.name}</h1>
        <p className="text-xl text-gray-500">{user?.email}</p>


        <UpdateModalForm/>
      </Card>

    </div>
  );
}