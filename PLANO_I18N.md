# Plano de Tradução i18n — MDS Cloud

## Resumo do progresso

| Fase | Descrição | Status |
|------|-----------|--------|
| A | Componentes da home (Footer, FloatingContact, CTASection, DifferentialsSection, MetricsSection, HeroSection, Header, MegaMenu, TeamSection) | ✅ Concluída |
| B | Páginas de soluções (Cloud, Backup, Database, Security, DBA Time) | ✅ Concluída |
| D | Páginas de segmentos (Agronegócio, Automotivo, Hotelaria, Industrial) | ✅ Concluída (feita junto com B) |
| C | Páginas institucionais + utilidade | 🔄 Em andamento — C1 e C2 concluídas |

---

## Fase C — dividida em 3 etapas

### Etapa C1 — Home + Institucionais principais ✅ Concluída
Páginas de maior visibilidade e tráfego.

| Arquivo | Linhas | O que traduzir | Status |
|---------|--------|---------------|--------|
| `Index.tsx` | 114 | Badge "Tecnologias", h2 e parágrafo da seção de tecnologias (3 strings hardcoded) | ✅ |
| `QuemSomos.tsx` | 733 | Página completa "Quem Somos" — hero, história, valores, equipe, CTA | ✅ |
| `OQueFazemos.tsx` | 337 | Página "O Que Fazemos" — hero, serviços, benefícios, CTA | ✅ |
| `ComoFazemos.tsx` | 275 | Página "Como Fazemos" — hero, processo, metodologia, CTA | ✅ |

---

### Etapa C2 — Relacionamento e engajamento ✅ Concluída
Páginas de contato, parceiros e depoimentos.

| Arquivo | Linhas | O que traduzir | Status |
|---------|--------|---------------|--------|
| `Contact.tsx` | 311 | Formulário de contato, labels, placeholders, textos de apoio | ✅ |
| `Parceiros.tsx` | 859 | Página de parceiros — hero, benefícios, como virar parceiro, CTA | ✅ |
| `Depoimentos.tsx` | 270 | Página de depoimentos escritos — título, subtítulo, filtros | ✅ |
| `DepoimentosVideo.tsx` | 211 | Página de depoimentos em vídeo — título, subtítulo, labels | ✅ |

---

### Etapa C3 — Conteúdo e utilidade
Páginas secundárias de conteúdo e legais.

| Arquivo | Linhas | O que traduzir |
|---------|--------|---------------|
| `Blog.tsx` | 130 | Listagem do blog — título, subtítulo, labels de data/autor |
| `BlogPost.tsx` | 166 | Post individual — labels de data, autor, voltar, categorias |
| `About.tsx` | 687 | Página sobre a empresa (variante) — verificar sobreposição com QuemSomos |
| `PoliticasPrivacidade.tsx` | 1393 | Política de privacidade — título, subtítulo; o corpo legal pode ficar em PT-BR por padrão ou ser traduzido separadamente |
| `NotFound.tsx` | 24 | Página 404 — 2 strings ("Oops! Page not found" e "Return to Home") — já está em inglês, adicionar suporte para PT e ES |

---

## Histórico de execução

### 16 de abril de 2026

**Etapas C1 e C2 executadas na íntegra.**

#### C1 — Arquivos atualizados
| Arquivo | Chaves criadas | Observações |
|---------|---------------|-------------|
| `src/lib/i18n.tsx` | `index.tech.*` (3 chaves) | Seção de tecnologias da Home |
| `src/pages/Index.tsx` | — | Substituídas 3 strings hardcoded |
| `src/pages/QuemSomos.tsx` | `quemsomos.*` (~50 chaves) | Página completa; sócios via `quemsomos.socio.*.title/bio` |
| `src/pages/OQueFazemos.tsx` | `oquefazemos.*` (~30 chaves) | Subtítulo hero dividido em 5 partes para `<strong>` |
| `src/pages/ComoFazemos.tsx` | `comofazemos.*` (~25 chaves) | Array `diferenciais` movido para dentro do componente |

**Chaves reutilizadas (sem duplicata):** `hero.cta.primary`, `common.talk.expert`, `metrics.clients.label`, `metrics.servers.label`, `footer.link.privacy`

#### C2 — Arquivos atualizados
| Arquivo | Chaves criadas | Observações |
|---------|---------------|-------------|
| `src/lib/i18n.tsx` | `contact.*` (15), `depoimentos.*` (4), `depvideo.*` (6), `parceiros.*` (~60) | Todas as chaves adicionadas antes de atualizar os componentes |
| `src/pages/Contact.tsx` | — | Hero, form labels/placeholders, consentimentos LGPD, alertas, info de contato |
| `src/pages/Depoimentos.tsx` | — | Badge, h1 split, subtítulo, floating badges |
| `src/pages/DepoimentosVideo.tsx` | — | Idem + array `videos` com `t()` |
| `src/pages/Parceiros.tsx` | — | 5 arrays de dados + todos os cabeçalhos de seção |

**Nota Parceiros:** features de Level 2 e Level 3 compartilham as chaves `parceiros.level.shared.f1–f5` (textos idênticos entre os dois níveis).

---

## Padrão de implementação

Todos os arquivos seguem o mesmo padrão já estabelecido:

1. Adicionar `import { useI18n } from "@/lib/i18n"` nos imports
2. Adicionar `const { t } = useI18n()` dentro do componente
3. Substituir strings hardcoded por `t("chave")`
4. Adicionar as chaves novas no objeto `translations` em `src/lib/i18n.tsx` com os três idiomas: `pt`, `en`, `es`

---

## Observações

- `PoliticasPrivacidade.tsx` tem 1.393 linhas. O corpo do texto legal pode ser mantido em PT-BR e apenas o título/subtítulo traduzido, ou o cliente pode fornecer versões traduzidas do texto legal.
- `About.tsx` pode ter sobreposição com `QuemSomos.tsx` — verificar antes de criar chaves duplicadas.
- O arquivo central de traduções está em `src/lib/i18n.tsx`.
