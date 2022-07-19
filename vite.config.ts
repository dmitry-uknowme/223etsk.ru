import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { defineConfig, loadEnv, UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react(), ssr()],
};

export default config;

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), "");
//   return {
//     // vite config
//     define: {
//       API_URL: env.API_URL,
//     },
//     plugins: [react(), ssr()],
//   };
// });
