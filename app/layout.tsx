import "./globals.css";
import { Yeseva_One } from "next/font/google";

// Load the font
const yesevaOne = Yeseva_One({
  weight: "400", // Specify weight if needed
  subsets: ["latin"],
});

export const metadata = {
  title: "Gumbo",
  description: "Solana Wallet Checker.",
  icons: {
    icon: "/gumboG.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script src="scripts.js"></script>
      <body>{children}</body>
    </html>
  );
}
