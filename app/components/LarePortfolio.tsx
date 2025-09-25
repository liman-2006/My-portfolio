"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Portfolio component (single-file React + Tailwind-ready)
// Default export a React component. Put this file in src/components or src/pages (Next.js)

export default function LarePortfolio() {
  const projects = [
    {
      title: "Togo Vibes",
      description:
        "Application d'information, de formation et d'événements pour les Togolais. (En cours — développement par LARE).",
      tech: ["Product design", "No-code / prototype", "Frontend"],
      live: "#",
    },
    {
      title: "SOLUTECH - Site e-commerce",
      description: "Site e-commerce réalisé pour l'entreprise SOLUTECH Informatique & Services.",
      tech: ["HTML", "CSS", "JS"],
      live: "https://site-e-commerce-de-solutech-ln4f.vercel.app/",
    },
    {
      title: "Projet futur — Livraison de sang & médicaments",
      description: "Application prévue pour la livraison urgente de sang et médicaments à domicile.",
      tech: ["Health-tech", "Logistique"],
      live: "#",
    },
    {
      title: "Lauren's IA (futur)",
      description: "IA basée sur l'API Gemini — agent assistif pour creators et petites entreprises.",
      tech: ["AI (Gemini)", "API"],
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900 text-slate-100 antialiased">
      {/* NAVBAR */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-black/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-bold">L</div>
            <div>
              <div className="font-semibold text-lg">LARE Liman Laurentia</div>
              <div className="text-xs text-slate-300">Étudiante • Data Science • Design • No-code</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-slate-200">
            <a href="/propos" className="hover:text-orange-400">À propos</a>
            <a href="#projects" className="hover:text-orange-400">Projets</a>
            <a href="#skills" className="hover:text-orange-400">Compétences</a>
            <a href="#contact" className="hover:text-orange-400">Contact</a>
          </nav>

          <div className="md:hidden">
            <button className="px-3 py-2 rounded bg-orange-500 text-white font-semibold">Menu</button>
          </div>
        </div>
      </header>

      <main className="pt-28">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Salut, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">LARE</span>
                <br /> Liman Laurentia
              </h1>
              <p className="mt-4 text-slate-300 max-w-xl">
                19 ans — Étudiante en 2ème année à l&apos;IAI Togo. Passionnée par la <strong>Data Science</strong>, le
                <strong> Design</strong>, le <strong>No-Code</strong> et la <strong>création de contenu</strong>.
                Toujours curieuse, toujours en train d&apos;apprendre.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#projects"
                  className="inline-block px-5 py-3 rounded-2xl bg-orange-500 font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                  Voir mes projets
                </a>
                <a
                  href="#contact"
                  className="inline-block px-5 py-3 rounded-2xl border border-slate-600 text-slate-200 hover:border-orange-400 transition"
                >
                  Me contacter
                </a>
              </div>

              <div className="mt-8 text-sm text-slate-400">
                <strong>Soft skills :</strong> Danse • Cuisine • Curiosité • Et d&apos;autres à découvrir ✨
              </div>
            </motion.div>

            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="w-full max-w-md rounded-2xl p-6 bg-white/5 backdrop-blur-md shadow-2xl">
                <Image
                  src="/leman.jpg"
                  alt="Portrait"
                  width={300}
                  height={300}
                  className="w-full rounded-xl object-cover h-64"
                />
                <div className="mt-4">
                  <div className="font-semibold text-lg">LARE Liman Laurentia</div>
                  <div className="text-sm text-slate-300">Étudiante • Créative • Data enthusiast</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-white/5 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold">À propos</h2>
                <p className="mt-4 text-slate-300">
                  Je suis LARE Liman Laurentia, étudiante en deuxième année à l&apos;IAI Togo. J&apos;aime explorer la
                  Data Science, concevoir des expériences utilisateurs, utiliser des outils no-code pour prototyper
                  rapidement et créer du contenu qui résonne.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="p-3 rounded-xl bg-slate-800/40">🎯 Data Science</li>
                  <li className="p-3 rounded-xl bg-slate-800/40">🎨 Design & UI</li>
                  <li className="p-3 rounded-xl bg-slate-800/40">🛠 No-Code</li>
                  <li className="p-3 rounded-xl bg-slate-800/40">📸 Création de contenu</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-800/40 to-indigo-900/30 shadow-lg">
                <h3 className="font-semibold">En bref</h3>
                <p className="mt-2 text-sm text-slate-300">19 ans • Étudiante • Curieuse • Toujours en apprentissage</p>

                <div className="mt-4">
                  <a href="#projects" className="text-orange-400 font-medium hover:underline">Voir mes projets →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Compétences</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Python", level: 80 },
                { name: "Pandas", level: 75 },
                { name: "SQL", level: 70 },
                { name: "Figma", level: 70 },
              ].map((s) => (
                <div key={s.name} className="p-4 rounded-2xl bg-slate-800/40">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{s.name}</div>
                    <div className="text-sm text-slate-300">{s.level}%</div>
                  </div>
                  <div className="mt-3 bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div className="h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-white/5 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Projets</h2>
            <p className="text-slate-300 mt-2">Sélection de projets personnels et professionnels.</p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <motion.article
                  key={p.title}
                  whileHover={{ y: -6 }}
                  className="p-5 rounded-2xl bg-slate-800/40 shadow-lg"
                >
                  <div className="h-40 w-full rounded-lg overflow-hidden bg-slate-700 flex items-center justify-center">
                    <span className="text-slate-400">Image / mockup</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-2 text-xs text-slate-300">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-slate-700/60">{t}</span>
                      ))}
                    </div>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-lg bg-orange-500 text-white font-medium"
                    >
                      Voir
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="text-slate-300 mt-2">Tu veux collaborer ? Discutons-en.</p>

            <div className="mt-6 bg-slate-800/40 p-6 rounded-2xl shadow-lg">
              <form className="grid gap-4">
                <input className="p-3 rounded-lg bg-slate-900/40" placeholder="Ton nom" />
                <input className="p-3 rounded-lg bg-slate-900/40" placeholder="Ton email" />
                <textarea className="p-3 rounded-lg bg-slate-900/40" rows={4} placeholder="Ton message" />
                <div className="flex justify-between items-center">
                  <div className="text-sm text-slate-400">Ou envoie un mail : <span className="text-orange-400">lare@example.com</span></div>
                  <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 font-semibold">Envoyer</button>
                </div>
              </form>
            </div>
          </div>
        </section>

  <footer className="mt-16 py-8 text-center text-sm text-slate-400">© 2025 LARE Liman Laurentia — IAI Togo • Tous droits réservés</footer>
      </main>
    </div>
  );
}
