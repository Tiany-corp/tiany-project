"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePage() {
  return (
      <main className="bg-[#0b0b0b] text-gray-200 min-h-screen font-[Inter] overflow-hidden">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#00d1ff] to-[#b26aff] bg-clip-text text-transparent"
          >
            Bienvenue dans mon portfolio
          </motion.h1>

          <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl"
          >
            Développeur créatif — j’allie design, interactivité et code pour créer des expériences uniques.
          </motion.p>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-10 flex space-x-4"
          >
            <Link
                href="/projects"
                className="px-6 py-3 rounded-full bg-[#00d1ff] text-black font-semibold hover:bg-[#00a8cc] transition"
            >
              Voir mes projets
            </Link>
            <Link
                href="/contact"
                className="px-6 py-3 rounded-full border border-[#b26aff] text-[#b26aff] hover:bg-[#b26aff] hover:text-black transition"
            >
              Me contacter
            </Link>
          </motion.div>
        </section>

        {/* Ce que je fais */}
        <section className="py-24 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Ce que je fais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Développement Web', desc: 'Sites modernes et performants avec Next.js et Tailwind.' },
              { title: 'Design UI/UX', desc: 'Création d’interfaces harmonieuses et intuitives.' },
              { title: 'Création d’expériences', desc: 'Animations fluides et interactions dynamiques.' }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px #00d1ff55' }}
                    className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-[#00d1ff]/50 transition"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
            ))}
          </div>
        </section>

        {/* Projets */}
        <section className="py-24 px-6 bg-[#0e0e0e] text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">Mes projets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[1, 2, 3].map((p) => (
                <motion.div
                    key={p}
                    whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px #b26aff44' }}
                    className="rounded-xl overflow-hidden border border-gray-800 bg-[#111] transition"
                >
                  <div className="h-48 bg-gradient-to-br from-[#00d1ff22] to-[#b26aff22]"></div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold mb-2">Projet #{p}</h3>
                    <p className="text-gray-400 mb-3">Une brève description du projet et des technologies utilisées.</p>
                    <Link href="/projects" className="text-[#00d1ff] hover:underline">
                      Voir le projet →
                    </Link>
                  </div>
                </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Travaillons ensemble</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Tu veux collaborer sur un projet ou me parler de ton idée ? Je serais ravi d’en discuter.
          </p>
          <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#b26aff] text-black font-semibold hover:bg-[#9d55ff] transition"
          >
            Me contacter
          </Link>
        </section>
      </main>
  )
}
