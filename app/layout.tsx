import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Xtreme Digitonix – Amazon & TikTok Shop Management",
  description:
    "E-commerce account management for Amazon Private Label, Amazon Wholesale, and TikTok Shop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Main content */}
        {children}

        {/* Footer always visible at bottom */}
        <Footer />
      </body>
    </html>
  );
}
