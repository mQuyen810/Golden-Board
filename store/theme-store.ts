import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ThemeStore {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>(
  (set) => ({
    mode: "light",

    toggleTheme: () =>
      set((state) => ({
        mode:
          state.mode === "light"
            ? "dark"
            : "light",
      })),
  })
);