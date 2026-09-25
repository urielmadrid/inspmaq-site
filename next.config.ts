import type { NextConfig } from "next";
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Link", value: '</llms.txt>; rel="describedby"' },
];
const nextConfig: NextConfig = {
  async headers() { return [{ source: "/:path*", headers: securityHeaders }]; },
  async redirects() { return [
    { source: "/orcamento", destination: "/contato", permanent: true },
    { source: "/whatsapp", destination: "https://wa.me/5553981018934", permanent: false },
  ]; },
};
export default nextConfig;
