import "./globals.css";

export const metadata = {
  title: "Aashish Vinay Vasala - AI Engineer Portfolio",
  description: "AI Engineer specializing in Machine Learning, NLP, and Reinforcement Learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}