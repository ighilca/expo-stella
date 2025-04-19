'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulation d'un appel API (à remplacer par votre véritable endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setMessage('Merci de votre inscription ! Vous recevrez bientôt nos actualités.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div className="w-full">
      <h4 className="text-2xl font-bodoni mb-4 text-white">Restez informé</h4>
      <p className="text-gray-400 mb-6">
        Inscrivez-vous à notre infolettre pour suivre nos futures expositions et événements.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse courriel"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? 'Inscription...' : "S'inscrire"}
          </button>
        </div>
        {message && (
          <p className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
} 