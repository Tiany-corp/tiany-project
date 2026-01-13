"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (res.ok) {
                setMessage("✅ Inscription réussie !");
                router.push("/login");
            } else {
                setMessage(data.error || "Erreur inscription");
            }
        } catch (err) {
            console.error(err);
            setMessage("Erreur serveur");
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-4 text-center">Inscription</h1>
            <form className="flex flex-col gap-3" onSubmit={registerUser}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                >
                    S’inscrire
                </button>
            </form>
            {message && <p className="mt-2 text-center">{message}</p>}


        </div>

    );
}
