import "@/styles/globals.css";
import Navbar from "@/sections/Navbar";

export const metadata = {
  title: "Manas Paliwal — Data Analyst",
  description:
    "Data Analyst | Product & Business Analytics | Portfolio of Manas Paliwal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Adding a custom class to body for global consistency */}
      <body className="antialiased selection:bg-blue-500/30">
        <Navbar />
        {/* The children (Home) will now be properly spaced under the fixed navbar */}
        {children}
      </body>
    </html>
  );
}
