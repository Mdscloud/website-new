import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.umbler.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
});

app.post("/api/send-email", async (req, res) => {
  const { tipo, nome, email, telefone, empresa, mensagem, solicitacoes } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e e-mail são obrigatórios" });
  }

  const destinatario = "rodrigo@97sites.com.br";
  const remetente = process.env.SMTP_USER;

  const assunto =
    tipo === "privacidade"
      ? `[MDS Cloud] Nova solicitação LGPD — ${nome}`
      : `[MDS Cloud] Novo contato via site — ${nome}`;

  const linhas = [
    ["Nome", nome],
    ["E-mail", email],
    telefone && ["Telefone", telefone],
    empresa && ["Empresa", empresa],
    solicitacoes && ["Solicitações", solicitacoes],
    mensagem && ["Mensagem", mensagem],
  ]
    .filter(Boolean)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 8px;color:#888;white-space:nowrap;">${k}</td><td style="padding:4px 8px;">${v}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0ea5e9;">${assunto}</h2>
      <table style="border-collapse:collapse;width:100%;">${linhas}</table>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"Site MDS Cloud" <${remetente}>`,
      to: destinatario,
      replyTo: email,
      subject: assunto,
      html,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err.message);
    res.status(500).json({ error: "Falha no envio do e-mail" });
  }
});

// Serve o frontend em produção
app.use(express.static(join(__dirname, "dist")));
app.get("*", (_req, res) => res.sendFile(join(__dirname, "dist", "index.html")));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
