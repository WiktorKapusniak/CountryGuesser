import "./globals.css";

export const metadata = {
  title: "CountryGuesser.js",
  description: "Aplikacja quizowa o krajach świata",
  icons: {
    icon: "/globe.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
