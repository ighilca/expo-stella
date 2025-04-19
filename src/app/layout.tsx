import type { Metadata } from "next";
import { DM_Serif_Display, Poppins, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
});

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
});

export const metadata: Metadata = {
  title: "Galerie des Arts Stella - Exposition Jean Lafleur",
  description: "Découvrez l'exposition photographique de Jean Lafleur à la Résidence Stella. Vernissage le 30 mai 2024 à 14h00.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSerif.variable} ${poppins.variable} ${bodoni.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
}
