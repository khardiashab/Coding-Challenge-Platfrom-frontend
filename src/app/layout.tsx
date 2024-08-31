"use client";
import "../styles/globals.css";

import { RecoilRoot } from "recoil";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// export const metadata = {
//   title: "Leet Code",
//   description: "This is simple code competion platform for learning purpose.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>{children}</RecoilRoot>
        <ToastContainer />
      </body>
    </html>
  );
}
