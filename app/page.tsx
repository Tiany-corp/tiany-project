"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ProjectCards from "@/app/component/ProjectCards";
import { useState } from "react";
import { cn } from '@/lib/utils';

interface Project {
    id: number;
    title: string;
    desc: string;
    tech: string[];
    photo: string;
}

export default function HomePage() {
    const projects: Project[] = [
        {
            id: 1,
            title: 'Site e-commerce fictif',
            desc: 'Une boutique e-commerce de basket pleines de surprises. Fait en php et html et CSS',
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
            title: "Dashboard dAssociation",
            desc: "Gestion d'utilisateurs et événements via une interface sécurisée et minimaliste.",
            tech: ['Softr', 'Airtable'],
            photo: "/img/Fds.png",
        },
        {
            id: 4,
            title: 'Site de musique',
            desc: "Générateur d'accords de musique téléchargable avec preset, filtrage et édition d'un clavier",
            tech: ['React', 'Next', 'TypeScript'],
            photo: "/img/Fds.png",
        },
    ];

    const [projectIsShow, setprojectIsShow] = useState<boolean>(false)


    return (
        <main className="bg-[#0b0b0b] text-gray-200 font-[Inter] overflow-hidden halo">

            <motion.p
                className="absolute w-50 right-2 bottom-18/20 -translate-y-1/2 fixed" // fixed permet de de fixer la position au viewport -translate-y-1/2 => le 1/2 fait quoi ?
                initial={{ opacity: 0, y: 20 }} // modifier l'animation ? Peut être plus tard
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                style={{ originX: -1 }}
            >
                By Tiany Rafanomezana

            </motion.p>


            <motion.section
                className="h-screen w-screen relative flex items-center justify-center" // Paralax sur le halo un jour
            >

                {/* Ligne gauche */}
                <motion.div
                    className="absolute left-5 top-[48%] md:top-1/2 -translate-y-1/2 h-[2px] bg-white/30 w-[13%]" // Si je met du scroll, j'enlève les absolute ? A voir après
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    style={{ originX: 0 }}
                />

                {/* Ligne droite */}
                <motion.div
                    className="absolute right-5 top-[48%] md:top-1/2 -translate-y-1/2 h-[2px] bg-white/30 w-[13%]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    style={{ originX: 1 }}
                />

                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#00d1ff] to-[#b26aff] bg-clip-text text-transparent"
                    >
                        PORTFOLIO
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Penser, Coder, Créer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="mt-10 flex space-x-4 justify-center"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <button className="btn btn-primary" onClick={() => setprojectIsShow(prev => !prev)}>
                                Voir mes projets
                            </button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Link href="./about" className="btn btn-outline">
                                Me contacter
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {projectIsShow && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-10 left-0 w-full flex flex-wrap justify-center gap-6 px-4 z-20"
                    >
                        {projects.slice(0, 3).map((project) => (
                            <div key={project.id} className="w-full md:w-[400px] h-full bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105">
                                <ProjectCards
                                    title={project.title}
                                    desc={project.desc}
                                    image={project.photo}
                                />
                            </div>
                        ))}
                    </motion.div>
                )}


            </motion.section>


        </main>
    );
}
