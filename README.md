# Conversa de Tasca — Blog (Astro)

Stack: Astro + MDX, Tailwind, Pagefind (search), Giscus (comments), RSS, dark mode, Plausible.

## Requisitos
- Node 18+
- Git

## Instalar
```bash
npm i
npm run dev
```

## Build
```bash
npm run build && npm run preview
```

## Categorias
- Política Nacional, Sociedade, Livros

## i18n
- PT (default) em `/` e `/pt`
- EN em `/en`

## Comentários (Giscus)
1. Cria um repositório GitHub e ativa **Discussions**.
2. Vai a https://giscus.app/ e preenche:
   - `data-repo`, `data-repo-id`, `data-category`, `data-category-id`.
3. Substitui os placeholders em `src/layouts/PostLayout.astro`.

## Newsletter (Beehiiv/Substack)
- Substitui `action` em `src/components/NewsletterForm.astro` pelo URL do teu provider.

## Plausible
- Altera o `data-domain` em `index.astro`, `pt/index.astro` e `en/index.astro`.
- (Opcional) Atualiza `site` em `astro.config.mjs`.

## Deploy (Vercel)
1. Push para GitHub.
2. Importa o repo na Vercel → **Framework: Astro**.
3. Build command: `npm run build` | Output: `dist`.

## SEO
- Substitui `public/og-default.png` por uma imagem tua (1200×630).
- Ajusta `site` em `astro.config.mjs`.

## Páginas legais
- Adiciona páginas: `/politica-de-privacidade` e `/termos` conforme necessário.
