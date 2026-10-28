import path from "node:path";
const nextConfig = { reactStrictMode: true, webpack(config) { config.resolve.alias = { ...config.resolve.alias, "react-router-dom": path.resolve(process.cwd(), "src/lib/router-compat.jsx") }; return config; } };
export default nextConfig;
