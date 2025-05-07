"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { SidebarMenuButton, SidebarMenuItem } from "~/components/ui/sidebar";
import { Switch } from "~/components/ui/switch";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (isDarkModeEnabled: boolean) => {
    setTheme(isDarkModeEnabled ? "dark" : "light");
  };

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <div className="flex">
          {theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}

          <span className="grow">Dark mode</span>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={handleThemeChange}
          />
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
