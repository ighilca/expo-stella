import Image from "next/image";
import Link from "next/link";
import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';
import './masonry.css';
import MasonryGrid from './MasonryGrid';

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
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-2 shadow-sm">
        <div className="max-w-6xl mx-auto px-8">
          <Image
            src="/images/logo.png"
            alt="Logo Résidence Stella"
            width={120}
            height={60}
            className="w-auto h-12"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors mb-8"
          >
            <span className="mr-2">←</span> Retour à l'accueil
          </Link>
          <h1 className="text-7xl font-serif mb-6">Galerie des œuvres</h1>
          <div className="flex items-center space-x-6">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <p className="text-xl text-gray-600">Photographies de Jean Lafleur</p>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <MasonryGrid photos={photos} />
      </main>

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
              <h4 className="text-xl font-serif mb-4">Exposition-bénéfice</h4>
              <div className="text-gray-400 space-y-2">
                <p>Vernissage : 30 mai 2024 à 14h00</p>
                <p>Une partie des profits sera versée à un organisme de bienfaisance.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 Résidence Stella - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 