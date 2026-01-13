"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        setConnected(!!localStorage.getItem("token"));
    }, []);

    const loginUser = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                setConnected(true);
                setMessage("✅ Connexion réussie !");
                router.push("/profil");
            } else {
                setMessage(data.error || "Erreur connexion");
            }
        } catch (err) {
            console.error(err);
            setMessage("Erreur serveur");
        }
    };

    return (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-4 text-center">Connexion</h1>
            <form className="flex flex-col gap-3" onSubmit={loginUser}>
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
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Se connecter
                </button>
            </form>
            {message && <p className="mt-2 text-center">{message}</p>}
            <p className="mt-2 text-center">
                {connected ? "✅ Vous êtes connecté" : "❌ Vous n’êtes pas connecté"}
            </p>
        </div>
    );
}
