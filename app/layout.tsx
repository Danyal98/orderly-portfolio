import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orderly — Restaurant operations, in one conversation",
  description:
    "Orderly gives restaurant teams one calm place to manage orders, customers, inventory, promotions, and WhatsApp conversations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
