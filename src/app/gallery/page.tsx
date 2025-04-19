import Image from "next/image";
import Link from "next/link";
import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';
import './masonry.css';
import MasonryGrid from './MasonryGrid';
import TestimonialsSlider from "@/components/TestimonialsSlider";

async function getPhotos() {
  const photosDirectory = path.join(process.cwd(), 'public/images/expo');
  const photoFiles = await fs.readdir(photosDirectory);
  
  const photosWithDimensions = await Promise.all(
    photoFiles.map(async (file) => {
      const filePath = path.join(photosDirectory, file);
      const metadata = await sharp(filePath).metadata();
      return {
        src: `/images/expo/${file}`,
        alt: `Photo de l'exposition - ${file.split('.')[0]}`,
        width: metadata.width || 0,
        height: metadata.height || 0,
      };
    })
  );

  return photosWithDimensions;
}

export default async function Gallery() {
  const photos = await getPhotos();

  return (
    <div className="min-h-screen bg-white font-poppins fade-in">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-2 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo Résidence Stella"
              width={160}
              height={80}
              className="w-auto h-16"
            />
          </Link>
        </div>
      </nav>

      {/* Artist Bio */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-[1000px] mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors mb-12"
          >
            <span className="mr-2">←</span> Retour à l'accueil
          </Link>
          <h1 className="text-6xl font-bodoni mb-12 text-center">Jean Lafleur</h1>
          <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
            <p className="leading-relaxed">
              Des sentiers boisés du Québec aux ruelles de Montréal, le photographe Jean Lafleur 
              aura arpenté chaque coin de son pays et même au-delà, immortalisant de son appareil 
              photo des perspectives banales qui deviennent de vraies œuvres d'art grâce à son œil affûté.
            </p>
            <p className="leading-relaxed">
              Il manipule son objectif comme le ferait un peintre avec son pinceau. À ce titre, 
              ses photographies peuvent être considérées comme des tableaux. Un peintre cherche 
              à vous transmettre une émotion ou à susciter une réaction lorsqu'il vous présente 
              son travail, il en est de même chez Jean Lafleur.
            </p>
            <p className="leading-relaxed">
              Jean parcourt son temps pour poser son regard sur les paysages de terroire ou 
              l'architecture des grandes villes ; il aime figer des instants étonnants, des 
              perspectives, des couleurs, des ombres, des reflets, des mouvements ; il s'intéresse 
              aussi au détail des matières.
            </p>
            <p className="leading-relaxed">
              Sa photographie se distingue par son caractère esthétique. C'est ce point essentiel 
              qui permet de saisir l'attention du public. Elle fait appel à l'imagination et à la 
              créativité du pour capturer un moment, une scène avec une touche stylistique très personnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <MasonryGrid photos={photos} />
      </main>

      {/* Testimonials Section */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-5xl font-bodoni mb-12 text-center">Ce qu'ils en disent</h3>
          <TestimonialsSlider
            testimonials={[
              {
                auteur: "Marie Tremblay",
                texte: "« Jean Lafleur a le don de capturer l'âme des paysages. Ses photographies révèlent une beauté cachée qui émeut et inspire. »"
              },
              {
                auteur: "Alexandre Dupuis",
                texte: "« Avec Jean, chaque photo est une œuvre d'art. Son regard unique transforme le banal en extraordinaire. »"
              },
              {
                auteur: "Sophie Martin",
                texte: "« Jean Lafleur sait voir ce que les autres ne voient pas. Son travail est un mélange parfait de technique et d'émotion. »"
              }
            ]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6">Intéressé par une œuvre ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour plus d'informations sur les œuvres exposées et leur acquisition.
          </p>
          <div className="inline-flex items-center space-x-4 text-lg">
            <span className="text-gray-600">450 687-3300</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-600">locationstella@cogir.net</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/logo.png"
                alt="Logo Résidence Stella"
                width={160}
                height={80}
                className="w-auto h-16 brightness-0 invert mb-6"
              />
              <div className="text-gray-400 space-y-2">
                <p>3300, boul. le Carrefour</p>
                <p>Laval, Québec, H7T 0A1</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bodoni mb-4">Exposition-bénéfice</h4>
              <div className="text-gray-400 space-y-2">
                <p>Vernissage : 30 mai 2025 à 14h00</p>
                <p>Une partie des profits sera versée à un organisme de bienfaisance.</p>
              </div>
            </div>
          </div>

          {/* Partners Logos */}
          <div className="border-t border-gray-800 mt-12 pt-12 flex justify-center items-center gap-16">
            <div className="h-12 relative">
              <Image
                src="/images/LOGO_COGIR_Residences_Noir_SansIcone-1.png"
                alt="Logo Cogir Résidences"
                width={200}
                height={60}
                className="w-auto h-full object-contain brightness-0 invert"
              />
            </div>
            <div className="h-12 relative">
              <Image
                src="/images/logo-lafleur.png"
                alt="Logo Jean Lafleur"
                width={160}
                height={60}
                className="w-auto h-full object-contain brightness-0 invert"
              />
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Résidence Stella - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 