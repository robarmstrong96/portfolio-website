"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export function ThemeSwitchHandler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
    //<ThemeSwitchToggleButton />;
  );
}

export function ThemeSwitchToggleButton() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      as="button"
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-8 w-20 items-center rounded-full`}
    >
      <span className="sr-only">Night Mode</span>
      <span
        className={`${
          enabled ? "translate-x-14 relative right-1" : "translate-x-1"
        } inline-block h-6 w-6 transform rounded-full bg-white transition`}
      >
        {enabled ? (
          <MoonIcon className="rounded-lg bg-blue-600 antialiased" />
        ) : (
          <SunIcon className="rounded-lg bg-gray-200  antialiased" />
        )}
      </span>
    </Switch>
  );
}
