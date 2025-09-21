import { LayoutContext } from "@/context/LayoutContext";
import { useContext } from "react";

export const useLayout = () => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error("useLayout must be used within LayoutProvider");
  return ctx;
};