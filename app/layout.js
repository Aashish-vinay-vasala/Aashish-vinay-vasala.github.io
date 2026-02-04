import './globals.css'

export const metadata = {
  title: 'Aashish Vinay Vasala - Portfolio',
  description: 'AI & Machine Learning Engineer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}