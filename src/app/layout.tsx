import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dolores PVD",
  description: "Dolores PVD restaurant, 100 Hope St, Providence, RI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
