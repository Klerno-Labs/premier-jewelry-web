"use client";

import { Bell, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("h-16 border-b bg-white", className)}>
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Search - Desktop only */}
        <div className="hidden md:flex flex-1 max-w-lg items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search projects, tasks..."
              className="pl-9 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <Button variant="default" className="hidden sm:inline-flex">
            + New Project
          </Button>
        </div>
      </div>
    </header>
  );
}