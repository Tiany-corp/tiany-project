import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
    const { email, password } = await req.json();

    if (!email || !password) return new Response(JSON.stringify({ error: "Champs manquants" }), { status: 400 });

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return new Response(JSON.stringify({ error: "Utilisateur déjà existant" }), { status: 400 });

    const hash = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { email, password: hash } });

    return new Response(JSON.stringify({ message: "Utilisateur créé" }), { status: 201 });
}
