import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Business Concepts Consulting Accounting Services | Professional Accounting & Tax Services",
  description: "Professional accounting, tax planning, and business advisory services tailored to your needs. Contact Business Concepts Consulting Accounting Services today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
} 