import "./globals.css";
import Navbar from "./components/navbar"

export const metadata = {
  title: "@slow3rxq | portfolio",
  description: "Abdulrahman Emin portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
