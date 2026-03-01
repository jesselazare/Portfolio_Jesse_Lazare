import { NextResponse } from "next/server";
import { Resend } from 'resend';

export async function POST(request: Request) {
  // L'initialisation se fait ICI pour éviter les erreurs lors du déploiement (build)
  // car process.env n'est parfois pas accessible durant la phase de compilation statique.
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 1. Récupération des données du formulaire
    const { name, email, message } = await request.json();

    // 2. Validation simple pour s'assurer que les champs ne sont pas vides
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Tous les champs (nom, email, message) sont requis." },
        { status: 400 }
      );
    }

    // 3. Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'lazaretsobgny@gmail.com', // Ton adresse de réception
      subject: `Nouveau message de ${name}`,
      replyTo: email, // Permet de répondre directement au mail du visiteur
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #007bff;">Nouveau message de ton Portfolio</h2>
          <p><strong>Expéditeur :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    // 4. Gestion d'erreur spécifique à l'API Resend
    if (error) {
      console.error("Erreur API Resend:", error);
      return NextResponse.json(
        { message: "L'envoi a échoué via Resend.", error },
        { status: 500 }
      );
    }

    // 5. Réponse de succès
    return NextResponse.json({
      message: "Message envoyé avec succès !",
      id: data?.id,
    });

  } catch (error) {
    // Gestion des erreurs inattendues (ex: JSON mal formé)
    console.error("Erreur serveur :", error);
    return NextResponse.json(
      { message: "Une erreur interne est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}