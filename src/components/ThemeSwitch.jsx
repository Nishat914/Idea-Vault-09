"use client";

import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

import { GoMoon } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";


export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({isSelected}) => (
        <>
          <Switch.Control
            className={`h-7.75 w-12.75 bg-mauve-600 ${isSelected ? "bg-mauve-400 shadow-mauve-600 " : ""}`}
          >
            <Switch.Thumb
              className={`size-6.75 bg-white shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <IoSunnyOutline className="size-4 text-mauve-600" />
                ) : (
                  <GoMoon className="size-4 text-mauve-600" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}