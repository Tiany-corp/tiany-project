"use client";
import {motion} from 'framer-motion'
import Link from 'next/link'
import Project from "../component/Project";


export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: 'Site e-commerce',
            desc: 'Une boutique e-commerce de basket pleines de surprises',
            tech: ['PHP', 'HTML', 'CSS'],
            photo: "/img/ecomsite.png",
        },
        {
            id: 2,
            title: 'Application Festival Ojoloco',
            desc: 'Interface de gestion pour un festival de cinéma avec base de données et filtrage avancé.',
            tech: ['Vue.js', 'Node.js', 'Maria DB'],
            photo: "/img/Ojolocco.png",

        },
        {
            id: 3,
            title: 'Dashboard d’Association',
            desc: 'Gestion d’utilisateurs et événements via une interface sécurisée et minimaliste.',
            tech: ['Softr', 'Airtable'],
            photo: "/img/Fds.png",

        },
        {
            id: 4,
            title: 'Site de musique',
            desc: 'Générateur d’accords de musique téléchargable avec preset, filtrage et édition d’un clavier',
            tech: ['React', 'Next', 'TypeScript'],
        },
    ]

    return (
        <main className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen font-[Inter]">
            <section className="section text-center">
                <motion.div >
                    <Link
                        href="../login"
                    >
                        Voir mes projets
                    </Link>
                </motion.div>

                <h1 className="section-title mb-4">Mes Projets</h1>
                <p className="text-[var(--color-subtext)] max-w-2xl mx-auto">
                    Voici une sélection de mes travaux récents. Chaque projet allie design, performance et expérience
                    utilisateur.
                </p>
            </section>

            <section className="section text-center">
                <h2 className="section-title mb-6">Tu veux en voir plus ?</h2>
                <p className="text-[var(--color-subtext)] max-w-2xl mx-auto mb-8">
                    J’ajoute régulièrement de nouveaux projets et expérimentations. Suis-moi pour découvrir mes
                    dernières créations.
                </p>
                <Link href="./contact" className="btn btn-primary">
                    Me contacter
                </Link>
            </section>
        </main>
    )
}