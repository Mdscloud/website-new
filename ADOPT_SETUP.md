# Configuração do Adopt - Cookie Consent LGPD

## O que é o Adopt?

O Adopt é uma ferramenta de consentimento de cookies que ajuda a sua empresa a estar em conformidade com a LGPD (Lei Geral de Proteção de Dados).

## Como configurar

1. **Criar conta no Adopt**
   - Acesse https://goadopt.io/
   - Crie uma conta gratuita
   - Crie um novo projeto/site

2. **Obter o Site ID**
   - Após criar o projeto, você receberá um **Site ID** único
   - Este ID será usado para identificar seu site no Adopt

3. **Configurar no código**
   - Abra o arquivo `src/components/CookieConsent.tsx`
   - Substitua `YOUR_SITE_ID` pelo seu Site ID real do Adopt
   - Exemplo: `script.setAttribute("data-site-id", "abc123xyz");`

4. **Personalizar o banner (opcional)**
   - Acesse o painel do Adopt
   - Personalize as cores, textos e posição do banner
   - Configure os tipos de cookies que você usa (essenciais, analytics, marketing, etc.)

## Estrutura do código

O componente `CookieConsent` foi adicionado ao `App.tsx` e carrega automaticamente o script do Adopt em todas as páginas do site.

## Verificação

Após configurar o Site ID:
1. Limpe o cache do navegador
2. Recarregue a página
3. O banner de cookies do Adopt deve aparecer na parte inferior da tela

## Suporte

Para mais informações, consulte a documentação oficial do Adopt: https://docs.goadopt.io/
