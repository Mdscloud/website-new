# Site MDS Cloud

Site institucional da MDS Cloud — cloud corporativa de alta performance.

## Tecnologias

- **Vite** — build e servidor de desenvolvimento
- **React 18** + **TypeScript**
- **Tailwind CSS** — estilos
- **shadcn/ui** (Radix UI) — componentes de interface
- **React Router** — rotas
- **Framer Motion** — animações
- **GSAP** — animações avançadas e efeitos
- **Lucide React** — ícones
- **React Hook Form** + **Zod** — formulários e validação
- **TanStack Query** — gerenciamento de estado assíncrono

## Pré-requisitos

- **Node.js** (recomendado LTS) e **npm**

Para instalar o Node.js via nvm: [nvm — instalação](https://github.com/nvm-sh/nvm#installing-and-updating).

## Instalação e execução

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Entre na pasta do site
cd site

# 3. Instale as dependências
npm i

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O site ficará disponível em `http://localhost:5173` (ou na porta indicada no terminal).

## Scripts disponíveis

| Comando        | Descrição |
|----------------|-----------|
| `npm run dev`  | Sobe o servidor de desenvolvimento com recarregamento automático. |
| `npm run build` | Gera a build de produção na pasta `dist`. |
| `npm run build:dev` | Gera a build em modo desenvolvimento. |
| `npm run preview` | Serve a pasta `dist` localmente para testar a build. |
| `npm run lint` | Executa o ESLint no código. |

## Estrutura do projeto

```
src/
├── App.tsx           # Rotas e providers da aplicação
├── main.tsx          # Ponto de entrada
├── index.css         # Estilos globais e variáveis CSS
├── pages/            # Páginas (uma por rota)
├── components/       # Componentes reutilizáveis
│   └── ui/           # Componentes de interface (shadcn/ui e customizados)
├── data/             # Dados estáticos (ex.: posts do blog)
├── lib/              # Utilitários e configurações (i18n, utils)
├── hooks/            # Hooks customizados
└── assets/           # Imagens e arquivos estáticos
```

## Deploy

O projeto usa **apenas npm** (`package-lock.json`). Para evitar o erro "multiple lock files detected" em plataformas como Digital Ocean, não faça commit de `bun.lockb`, `yarn.lock` ou `pnpm-lock.yaml` — eles estão no `.gitignore`. Use sempre `npm install` e `npm run build` no ambiente de deploy.

A build de produção é gerada com:

```bash
npm run build
```

O conteúdo da pasta `dist` pode ser publicado em qualquer hospedagem estática (Vercel, Netlify, AWS S3, etc.). O projeto é uma SPA: configure o servidor ou CDN para redirecionar todas as rotas para `index.html` quando necessário.

## Licença

Projeto de uso interno da MDS Cloud.
