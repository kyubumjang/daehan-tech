import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대한테크",
  description: "대한테크 홈페이지",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ko">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
