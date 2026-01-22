import React from 'react';
import './globals.css'


export const metadata = {
    title: "Tiany project",
    description: "Site tiany project",
};


export default function RootLayout({ children }: { children: React.ReactNode }) { // problème entre children est ce qu'il y a vraiment dedans // C'est le global CSS Le problème !!!!!
    return (
        <html lang="fr">
            <body className="bg-gray-100 flex items-center justify-center">
                {/* <Navbar/> */}
                <main>
                    {children}

                </main>
            </body>
        </html>
    )
}

// Je passe une props (object) à ma fonction RootLayout qui est renvoyé dans le return et qui afficher quoi ? Je sais pas Il appelle rien c'est une variable qui contient quoi dans mon cas ?
