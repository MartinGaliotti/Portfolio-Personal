import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./ui/footer/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martín Galiotti Martinez",
  description:
    "Portfolio Personal Este repositorio contiene el código fuente de mi portfolio personal, donde muestro mis proyectos, habilidades y experiencia. ¡Explora mi trabajo y conoce más sobre mí aquí!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Footer />
        {children}
      </body>
    </html>
  );
}
