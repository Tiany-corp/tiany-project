import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "CHANGE-MOI";

export async function POST(req) {
    const { email, password } = await req.json();

    if (!email || !password) return new Response(JSON.stringify({ error: "Champs manquants" }), { status: 400 });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return new Response(JSON.stringify({ error: "Utilisateur introuvable" }), { status: 401 });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return new Response(JSON.stringify({ error: "Mot de passe incorrect" }), { status: 401 });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

    return new Response(JSON.stringify({ message: "Connexion réussie", token }), { status: 200 });
}
