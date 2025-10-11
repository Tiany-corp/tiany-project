"use client";
import {motion} from 'framer-motion'
import Link from 'next/link'

export default function ProjectsPage() {
    const projects = [
        {
            id: 1,
            title: 'Portfolio Interactif',
            desc: 'Un site personnel avec animations fluides et transitions modernes.',
            tech: ['Next.js', 'Framer Motion', 'TailwindCSS'],
            photo:'C:\\MMI\\S5\\frontavance\\tiany_project\\public\\portfolio\\site e-commerce.png',
        },
        {
            id: 2,
            title: 'Application Festival Ojoloco',
            desc: 'Interface de gestion pour un festival de cinéma avec base de données et filtrage avancé.',
            tech: ['Vue.js', 'Node.js', 'Prisma'],
        },
        {
            id: 3,
            title: 'Dashboard d’Association',
            desc: 'Gestion d’utilisateurs et événements via une interface sécurisée et minimaliste.',
            tech: ['Next.js', 'Supabase', 'TypeScript'],
        },
        {
            id: 3,
            title: 'Site de cuisine',
            desc: 'Gestion d’utilisateurs et événements via une interface sécurisée et minimaliste.',
            tech: ['Next.js', 'Supabase', 'TypeScript'],
        },
    ]

    return (
        <main className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen font-[Inter]">
            <section className="section text-center">
                <h1 className="section-title mb-4">Mes Projets</h1>
                <p className="text-[var(--color-subtext)] max-w-2xl mx-auto">
                    Voici une sélection de mes travaux récents. Chaque projet allie design, performance et expérience
                    utilisateur.
                </p>
            </section>

            <section className="section grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((proj, i) => (
                    <motion.div
                        key={proj.id}
                        whileHover={{scale: 1.03, boxShadow: '0px 0px 25px var(--color-accent-2)33'}}
                        className="card flex flex-col justify-between"
                    >
                        <div>
                            <div
                                className="h-48 bg-gradient-to-br from-[var(--color-accent)/15] to-[var(--color-accent-2)/15] rounded-xl mb-6"></div>
                            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                            <p className="text-[var(--color-subtext)] mb-4">{proj.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {proj.tech.map((t, j) => (
                                    <span key={j}
                                          className="text-sm bg-[var(--color-bg-alt)] border border-[var(--color-accent-2)] text-[var(--color-accent-2)] px-3 py-1 rounded-full">
                    {t}
                  </span>
                                ))}
                            </div>
                        </div>
                        <Link href={`/projects/${proj.id}`} className="btn btn-outline self-start">
                            Voir le projet
                        </Link>
                    </motion.div>
                ))}
            </section>

            <section className="section text-center">
                <h2 className="section-title mb-6">Tu veux en voir plus ?</h2>
                <p className="text-[var(--color-subtext)] max-w-2xl mx-auto mb-8">
                    J’ajoute régulièrement de nouveaux projets et expérimentations. Suis-moi pour découvrir mes
                    dernières créations.
                </p>
                <Link href="/contact" className="btn btn-primary">
                    Me contacter
                </Link>
            </section>
        </main>
    )
}