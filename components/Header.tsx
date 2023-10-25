import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav
        className="flex flex-col p-5 items-center sm:flex-row pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto
      "
      >
        <Logo />
        <div className="flex-1 items-center flex justify-end space-x-4">
          {/* language */}
          {/* session && ... */}
          {/* DarkModeToggle */}

          <DarkModeToggle />
          <UserButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
