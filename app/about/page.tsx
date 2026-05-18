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
                <div className="text-textSecondary text-lg leading-relaxed max-w-3xl mx-auto flex flex-col gap-4 text-center">
                    <p>
                        À l’heure où l’IA s’apprête à faire disparaître des milliers d’emplois, je prends l’initiative de l’utiliser pour concevoir des projets qui nous rendent plus intentionnels, alignés et performants dans notre quotidien. C’est cette vision que j’applique concrètement, notamment à travers le développement de mon application de gestion de pensées et d’autres outils conçus pour booster notre progression.
                    </p>
                    <p>
                        Piloter ce genre d’écosystèmes dans un cadre bienveillant et stimulant est précisément ce qui m’anime dans le métier de Chef de Projet IA. Pour incarner cette ambition et accélérer des innovations à impact, je recherche activement une alternance pour septembre 2026.
                    </p>
                </div>
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
                        src="/img/pp.JPG"
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
                <div
                    className="bg-bgSecondary border border-borderColor rounded-2xl p-8 shadow-sm hover:shadow-accent/10 transition-all flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-accent border-b border-borderColor pb-2">
                        Mes compétences
                    </h2>
                    <ul className="text-textSecondary space-y-4 text-sm leading-relaxed">
                        <li className="flex gap-3 items-start">
                            <svg className="w-5 h-5 text-[#00d1ff] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <div>
                                <strong className="text-white block font-medium">Pilotage Opérationnel</strong>
                                Direction de projet, du cadrage des besoins jusqu’au déploiement final.
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <svg className="w-5 h-5 text-[#b26aff] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <div>
                                <strong className="text-white block font-medium">Automatisation & IA</strong>
                                Conception de workflows automatisés propulsés par l’IA pour fluidifier les opérations et accélérer la prise de décision.
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <svg className="w-5 h-5 text-[#ec4899] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <div>
                                <strong className="text-white block font-medium">Design & UX</strong>
                                Réflexion et design d’interfaces claires, intuitives et centrées sur l’utilisateur pour faciliter l’adoption des outils.
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <svg className="w-5 h-5 text-[#f59e0b] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div>
                                <strong className="text-white block font-medium">Prototypage Rapide</strong>
                                Conception agile de prototypes fonctionnels à forte valeur ajoutée.
                            </div>
                        </li>
                    </ul>
                </div>

                <div
                    className="bg-bgSecondary border border-borderColor rounded-2xl p-8 shadow-sm hover:shadow-accent/10 transition-all flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-accent border-b border-borderColor pb-2">
                        Ma vision
                    </h2>

                    <div className="space-y-6">
                        {/* Vision block 1 */}
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white leading-snug">
                                L’IA pour accélérer la technique. <span className="text-accent">L’humain pour habiter le projet.</span>
                            </h3>
                            <p className="text-textSecondary text-sm leading-relaxed">
                                L’intelligence artificielle est mon meilleur multiplicateur de productivité du moment. Je la mets au service de ma vision et du prototypage dans un objectif clair : libérer du temps et de l’espace pour ce que je ne veux pas robotiser : la vision produit.
                            </p>
                        </div>

                        {/* Vision block 2 */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold text-white leading-snug">
                                Faire du projet une <span className="text-accent-2">expérience collective mémorable.</span>
                            </h3>
                            <div className="space-y-2 text-textSecondary text-sm leading-relaxed">
                                <p>
                                    Je suis convaincu que la performance naît là où les personnes se sentent à leur juste place. Mon rôle en gestion de projet est de concevoir un cadre de communication bienveillant et stimulant, où chaque profil comprend son rôle et ose exprimer son plein potentiel.
                                </p>
                                <p>
                                    Ma méthode de travail fait de chaque erreur un pas de plus vers l’objectif. Mon but ? Que la fluidité et le plaisir de collaborer se ressentent tout au long de l’aventure, depuis nos échanges quotidiens jusqu’à l’excellence du livrable final.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
            {/*<div className="flex  bg-green w-full h-50">*/}
            {/*    <div className="border-white bg-green border-1 w-200">*/}
            {/*        <h1>Gauche</h1>*/}
            {/*    </div>*/}
            {/*    <div className="border-1 bg-green w-full p-5 overflow-scroll">*/}
            {/*            <div className="w-auto h-20 bg-white"></div>*/}
            {/*            <div className="w-auto h-20 bg-white"></div>*/}
            {/*            <div className="w-auto h-20 bg-white"></div>*/}
            {/*            <div className="w-auto h-20 bg-white"></div>*/}
            {/*            <div className="w-auto h-20 bg-white"></div>*/}

            {/*    </div>*/}

            {/*</div>*/}
        </main>
    )
}
