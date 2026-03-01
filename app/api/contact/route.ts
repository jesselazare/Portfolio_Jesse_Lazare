import { NextResponse } from "next/server";
import { Resend } from 'resend';

// Initialisation sécurisée via la variable d'environnement
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. Validation de sécurité
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // 2. Envoi de l'email vers ta messagerie
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'lazaretsobgny@gmail.com', // <--- Ton adresse de réception
      subject: `Nouveau message de ${name}`,
      replyTo: email, // Permet de lui répondre en un clic
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2>Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #007bff;">
            <p><strong>Message :</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // 3. Gestion d'erreur de Resend
    if (error) {
      console.error("Erreur API Resend:", error);
      return NextResponse.json({ message: "Échec de l'envoi" }, { status: 500 });
    }

    // 4. Succès
    return NextResponse.json({
      message: "Message envoyé avec succès !",
      id: data?.id
    });

  } catch (err) {
    console.error("Erreur serveur:", err);
    return NextResponse.json(
      { message: "Une erreur interne est survenue" },
      { status: 500 }
    );
  }
}