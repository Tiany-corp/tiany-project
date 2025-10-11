"use client"

import { motion } from "framer-motion"

export default function APropos() {
    return (
        <main className="min-h-screen bg-bgPrimary text-textPrimary px-6 md:px-16 py-20 flex flex-col items-center">
            {/* --- Section Intro --- */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
                    À propos de moi
                </h1>
                <p className="text-textSecondary text-lg leading-relaxed">
                    Passionné par la création et la technologie, j’aime concevoir des
                    expériences numériques qui allient **élégance visuelle** et
                    **simplicité d’usage**.
                    Mon parcours m’a amené à travailler sur des projets variés : du
                    développement web à la conception d’interfaces immersives.
                </p>
            </motion.section>

            {/* --- Photo --- */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-12"
            >
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accent shadow-lg">
                    <img
                        src="/images/profile.jpg"
                        alt="Photo de profil"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>

            {/* --- Section compétences / valeurs --- */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-5xl mt-16 grid md:grid-cols-2 gap-10"
            >
                <div className="bg-bgSecondary border border-borderColor rounded-2xl p-6 shadow-sm hover:shadow-accent/10 transition-all">
                    <h2 className="text-2xl font-semibold mb-3 text-accent">
                        Mes compétences
                    </h2>
                    <ul className="text-textSecondary space-y-2">
                        <li>💻 Développement web (Vue.js, Next.js, Tailwind)</li>
                        <li>🎨 Design UI / UX & identité visuelle</li>
                        <li>🧠 Systèmes d’apprentissage & workflow créatif</li>
                        <li>🚀 Gestion de projets & travail en équipe</li>
                    </ul>
                </div>

                <div className="bg-bgSecondary border border-borderColor rounded-2xl p-6 shadow-sm hover:shadow-accent/10 transition-all">
                    <h2 className="text-2xl font-semibold mb-3 text-accent">
                        Ma vision
                    </h2>
                    <p className="text-textSecondary leading-relaxed">
                        Je crois en un web **plus humain**, où chaque interface raconte une
                        histoire.
                        Mon objectif est de créer des projets **qui ont du sens**, et qui
                        connectent les gens à travers la technologie, l’art et la foi.
                    </p>
                </div>
            </motion.section>
        </main>
    )
}
