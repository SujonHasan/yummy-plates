import HeaderPage from "@/components/landing/Header";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import AuthProvider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yummy Plates",
  description: "Yummy Plates",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}

      </head>

      <body className={inter.className}>
        <ToastContainer autoClose={2000} />
        <AuthProvider>
          <HeaderPage />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
