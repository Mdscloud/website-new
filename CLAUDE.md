# MDS Cloud — Site Institucional

## Cliente

**MDS Cloud Solutions** — empresa brasileira de cloud corporativa de alta performance. Fundada em 2012, +1.200 clientes ativos nos segmentos de hotelaria, agronegócio, automotivo, industrial e saúde.

## Projeto

Site institucional desenvolvido e mantido pela agência 97 Sites. Apresenta soluções de cloud, blog com matérias de imprensa, formulários de contato e de solicitações LGPD.

## Stack

| Tecnologia | Uso |
|---|---|
| React 18 + TypeScript + Vite | Base do projeto |
| Tailwind CSS + shadcn/ui | Estilização e componentes |
| Framer Motion | Animações |
| i18n próprio (PT/EN/ES) | Internacionalização — arquivo central: `src/lib/i18n.tsx` |
| Express.js (`server.js`) | Servidor em produção — serve `dist/` + expõe `/api/send-email` |
| Nodemailer | Envio de e-mail via SMTP Umbler (`smtp.umbler.com:587`) |

## Repositório e Hospedagem

- **GitHub:** https://github.com/Mdscloud/cloud-elevation-project
- **Produção:** https://mdscloud.com.br
- **Hospedagem:** Digital Ocean
- **Deploy:** `npm run build` → `npm start` (inicia `server.js`)

> O arquivo `netlify.toml` está no repositório mas **não é utilizado** — a hospedagem é Digital Ocean.

## Estrutura de pastas relevante

```
src/
├── pages/          — páginas do site (Contact.tsx, PoliticasPrivacidade.tsx, etc.)
├── components/     — componentes reutilizáveis
├── assets/         — imagens (artigo1.jpg … artigoN para o blog)
├── data/
│   └── blogPosts.ts  — fonte única de dados do blog (posts + body completo)
└── lib/
    └── i18n.tsx    — todas as traduções PT/EN/ES
server.js           — servidor Express (produção e dev paralelo)
```

## Variáveis de ambiente

Configurar na **Digital Ocean → App Platform → Settings → Environment Variables**:

| Variável | Valor |
|---|---|
| `SMTP_HOST` | `smtp.umbler.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `backup@mdstech.com.br` |
| `SMTP_PASS` | senha do e-mail |
| `PORT` | injetado automaticamente pela DO |

Para desenvolvimento local: criar `.env` na raiz com as mesmas variáveis e rodar `node server.js` em paralelo com `npm run dev`.

## Como adicionar uma matéria no blog

1. Baixar a imagem do Drive (`gdrive:clientes/MDS Cloud/Resources/`) → salvar em `src/assets/`
2. Abrir `src/data/blogPosts.ts`
3. Importar a imagem no topo do arquivo
4. Adicionar o objeto no **início** do array `blogPosts` (posts mais recentes primeiro)
5. Validar: `npm run build`
6. Commit + push

## Regras obrigatórias ao finalizar qualquer atualização

### 1. Atualizar o changelog do cliente

Arquivo: `/root/Projetos/clientes/MDS Cloud/log/changelog.md`

Formato de entrada:
```
## DD/MM/AAAA

### Título da atualização
- `arquivo`: descrição do que foi feito
```

### 2. Sincronizar a pasta do cliente no Google Drive

```bash
rclone sync "/root/Projetos/clientes/MDS Cloud" "gdrive:clientes/MDS Cloud" --update
```

Executar sempre após atualizar o changelog ou adicionar arquivos à pasta do cliente.

## Organização de pastas — Método PARA (Tiago Forte)

A pasta do cliente em `/root/Projetos/clientes/MDS Cloud/` segue o método PARA:

| Pasta | Descrição |
|---|---|
| `Projects/` | Entregas ativas com prazo definido (ex: nova landing page, campanha) |
| `Areas/` | Responsabilidades contínuas (manutenção do site, blog, SEO) |
| `Resources/` | Referências permanentes (imagens para blog, brand guide, assets) |
| `Archives/` | Itens finalizados ou inativos |
| `log/` | Histórico completo de todas as alterações no site |
