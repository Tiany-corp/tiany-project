import './globals.css'
import Navbar from "./component/Navbar";

export const metadata = {
    title: "Tiany project",
    description: "Site tiany project",
};



export default function RootLayout({children}) {
    return (
        <html lang="fr">
        <body className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Navbar/>
        <main>
            {children}
        </main>
        </body>
        </html>
    )
}
