import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-poppins fade-in">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-2 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Image
            src="/images/logo.png"
            alt="Logo Résidence Stella"
            width={160}
            height={80}
            className="w-auto h-16"
          />
          <Link
            href="/gallery"
            className="bg-red-500 text-white px-8 py-2.5 rounded-full hover:bg-red-600 transition-colors"
          >
            Commander
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-8">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 md:sticky md:top-32">
            <span className="text-red-500 font-medium mb-8 block text-lg">Exposition-bénéfice</span>
            <h2 className="text-8xl font-bodoni mb-12">
              Galerie<br/>d'Art
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl mb-12">
              <p className="text-2xl mb-3">Vernissage</p>
              <p className="text-3xl font-bodoni mb-4">30 mai 2024 à 14h00</p>
              <p className="text-gray-600 text-lg">Résidence Stella, Laval</p>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              La Résidence Stella est fière de présenter une exposition-bénéfice 
              mettant en vedette les œuvres photographiques de Jean Lafleur. Une partie des 
              profits sera versée à un organisme de bienfaisance.
            </p>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <div className="aspect-[3/4] relative">
              <Image
                src="/images/expo/P1040622-scaled-e1717313476102.jpeg"
                alt="Œuvre de Jean Lafleur"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Details */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 relative aspect-[3/4]">
            <Image
                src="/images/expo/P1040820-2-scaled.jpeg"
                alt="Résidence Stella"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="md:col-span-5 md:pl-8 md:sticky md:top-32">
              <h3 className="text-5xl font-bodoni mb-8">L'exposition</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Découvrez une collection exceptionnelle de photographies dans le corridor principal 
                de la Résidence Stella, transformé en espace d'exposition. Les œuvres créent 
                une expérience immersive unique.
              </p>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl">
                  <h4 className="font-bodoni text-2xl mb-3">Lieu de l'exposition</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Corridor principal de la Résidence Stella<br />
                    35 mètres d'espace d'exposition
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl">
                  <h4 className="font-bodoni text-2xl mb-3">Vente des œuvres</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Toutes les œuvres exposées sont disponibles à l'achat.<br />
                    Une partie des profits sera versée à un organisme de bienfaisance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section className="py-24 px-8">
        <div className="max-w-[1000px] mx-auto text-right">
          <h2 className="text-6xl font-bodoni mb-8">Jean Lafleur</h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl ml-auto">
            Découvrez les œuvres photographiques de Jean Lafleur, spécialement sélectionnées 
            pour cette exposition-bénéfice. Une occasion unique d'acquérir une œuvre tout en 
            soutenant une cause charitable.
          </p>
          <Link 
            href="/gallery"
            className="bg-red-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors inline-flex items-center"
          >
            Voir les œuvres <span className="ml-3">→</span>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl font-bodoni mb-16 text-center">Une plus-value pour nos résidents</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Culture */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bodoni mb-4">Enrichissement culturel</h3>
              <p className="text-gray-600 leading-relaxed">
                Une exposition qui transforme nos espaces communs en galerie d'art, 
                apportant la culture directement chez vous.
              </p>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bodoni mb-4">Rencontres enrichissantes</h3>
              <p className="text-gray-600 leading-relaxed">
                Une occasion unique de partager des moments privilégiés avec 
                l'artiste et les autres résidents passionnés d'art.
              </p>
            </div>

            {/* Environment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bodoni mb-4">Cadre de vie amélioré</h3>
              <p className="text-gray-600 leading-relaxed">
                Des œuvres d'art qui embellissent votre environnement quotidien 
                et créent une atmosphère inspirante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 md:sticky md:top-32">
              <svg className="text-red-500 w-16 h-16 mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
              <h3 className="text-6xl font-bodoni mb-8">Le mot de la directrice</h3>
              <p className="text-xl text-gray-600 mb-8 italic leading-relaxed">
                "C'est avec une grande fierté que la Résidence Stella ouvre ses portes à l'art 
                et à la culture. Cette exposition-bénéfice est une occasion unique de créer des 
                liens entre nos résidents, leurs familles et la communauté artistique, tout en 
                soutenant une noble cause."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre corridor principal se transforme en un espace d'exposition 
                exceptionnel, permettant à nos résidents et visiteurs de découvrir les œuvres 
                remarquables de Jean Lafleur dans un cadre unique et accessible.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="relative">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/directrice.png"
                    alt="Anne-Julie Nadon, Directrice générale"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-lg max-w-[80%]">
                  <p className="font-bodoni text-2xl mb-2">Anne-Julie Nadon</p>
                  <p className="text-gray-600 text-lg">Directrice générale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Info */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-5xl font-bodoni mb-6">Informations pratiques</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bodoni text-2xl mb-2">Accès</h4>
                  <p className="text-gray-600">
                    L'exposition est accessible aux résidents et visiteurs.<br />
                    Située près du centre de santé, de la pharmacie et des autres services.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bodoni text-2xl mb-2">Contact</h4>
                  <p className="text-gray-600">
                    Pour toute information sur l'acquisition des œuvres :<br />
                    450 687-3300<br />
                    locationstella@cogir.net
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
          <Image
                src="/images/expo/P1040565.Soufflerie-3.jpg"
                alt="Œuvre de Jean Lafleur"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Stella */}
      <section className="py-24 px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <h3 className="text-6xl font-bodoni mb-8">Résidence Stella</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                La Résidence Stella est bien plus qu'un simple lieu de vie. C'est un espace où le confort rencontre 
                l'élégance, où chaque détail a été pensé pour offrir une expérience de vie exceptionnelle.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Située au cœur de Laval, notre résidence offre un environnement sophistiqué et chaleureux, 
                alliant services haut de gamme et atmosphère conviviale. Nos espaces communs spacieux, 
                dont ce magnifique corridor d'exposition, témoignent de notre engagement à créer un lieu 
                de vie dynamique et culturellement enrichissant.
              </p>
              <Link 
                href="https://residencescogir.com/residence-aine-laval/stella/"
          target="_blank"
                className="inline-block bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors w-full"
              >
                <h4 className="font-bodoni text-2xl mb-3">Découvrir tous nos services</h4>
                <p className="text-gray-600 leading-relaxed">
                  Visitez notre site web pour explorer l'ensemble de nos installations et services
                </p>
                <span className="text-red-500 mt-4 inline-flex items-center">
                  En savoir plus <span className="ml-2">→</span>
                </span>
              </Link>
            </div>
            <div className="md:col-span-7 md:pl-8 flex items-center">
              <div className="aspect-[16/9] relative w-full">
          <Image
                  src="/images/résidence.webp"
                  alt="Résidence Stella - Vue extérieure"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
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
                <p>450 687-3300</p>
                <p>locationstella@cogir.net</p>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bodoni mb-4">Exposition-bénéfice</h4>
              <div className="text-gray-400 space-y-2">
                <p>Vernissage : 30 mai 2024 à 14h00</p>
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
            <p>© 2024 Résidence Stella - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
