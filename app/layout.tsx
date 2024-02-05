import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ConvexClientProvider } from "@/providers/convex-client-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoFloww",
  description:
    "Elevate your team's workflow with CoFloww, a collaborative workflow for Lively Teams. CoFloww empowers teams to visualize, plan, and execute their work in one vibrant space. Create dedicated rooms, invite team members, and unleash your creative potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
