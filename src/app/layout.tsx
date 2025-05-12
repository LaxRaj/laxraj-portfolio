import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshya - Software Engineer",
  description: "Portfolio website of Lakshya, a Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Plaster&display=swap" rel="stylesheet" />
        <style>{`.ballet { font-family: 'Ballet', cursive; font-optical-sizing: auto; font-weight: 400; font-style: normal; } .zain { font-family: "Zain", sans-serif; font-weight: 700; font-style: normal; }`}</style>
      </head>
      <body className="zain">
        {children}
      </body>
    </html>
  );
}
