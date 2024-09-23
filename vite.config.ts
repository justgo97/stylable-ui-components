import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "demo", // Set the root directory to 'demo'
  plugins: [react()],
});
