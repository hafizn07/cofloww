"use client";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="flex items-center p-5 bg-green-500 gap-x-4">
      <div className="hidden bg-yellow-500 lg:flex lg:flex-1">Search</div>
      <UserButton />
    </div>
  );
};
