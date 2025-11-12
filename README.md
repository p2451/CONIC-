# Projeto Web - Responsividade e Integrações

**Status:** Atualizado automaticamente por ChatGPT

## Integrantes e papéis
- (Preencher nomes) — Designer, Desenvolvedor Front-end, Documentação

## Descrição do negócio
(Substitua por descrição do negócio escolhido — ex.: restaurante, loja local, consultório)

## Objetivos do site
- Presença online simples e responsiva
- Informações de contato e localização
- Formulário funcional sem back-end
- Integrações para facilitar contato (WhatsApp, Google Maps)

## Estrutura de pastas
```
  /mnt/data/atividade_project:
  atividade.html
  js
  responsive.css
  style.css

  /mnt/data/atividade_project/atividade.html:
  contato.html
  index.html
  sobre.html
  style.css

  /mnt/data/atividade_project/js:
  components.js

```

## Melhorias implementadas (Parte 2)
- Meta viewport adicionado para responsividade.
- Arquivo `responsive.css` revisado (mobile-first, breakpoints em 768px, 1024px, 1280px).
- Imagens tornadas fluidas (`max-width:100%; height:auto;`).
- Grid responsivo implementado (`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`).
- Tipografia escalável usando `rem`/`em` (valores base ajustáveis).
- Implementado botão hambúrguer simples e `components.js` para toggle de menu.
- Acessibilidade: atributos `role`, `aria-label` e `aria-expanded` adicionados onde aplicável. Imagens sem `alt` receberam `alt` placeholder — substitua por descrições reais.
- Exemplos de integrações adicionados: Google Maps iframe (placeholder), WhatsApp link, Formspree form.

## Ajustes de acessibilidade realizados
- Navegação com `role="navigation"` e `aria-label`.
- Botão hambúrguer com `aria-expanded` e `aria-controls`.
- Textos com tamanho legível e contraste (revisar cores em style.css).
- Elementos visuais importantes têm foco lógico (verificar foco por teclado).

## Integrações externas implementadas
- Google Maps — iframe placeholder presente no arquivo de contato.
- WhatsApp — link direto com exemplo de número.
- Formspree — formulário com `action` de exemplo (substituir pelo código real).

## Desafios encontrados
- Alguns arquivos HTML não continham seção de contato; inserções foram feitas automaticamente em arquivos que aparentavam ser de contato.
- Imagens sem `alt` — placeholder adicionado, requer revisão manual.
- Algumas ligações de CSS/JS foram presumidas; revise caminhos se a sua estrutura for diferente.

## Próximos passos
1. Substituir placeholders (Google Maps iframe src, número do WhatsApp, Formspree action).
2. Revisar e melhorar cores e contraste em `style.css`.
3. Validar HTML e testar em navegadores (Chrome, Firefox, Safari).
4. Testar em dispositivos reais (iPhone, Android) e em devtools com larguras 375px, 768px, 1280px, 1920px.
5. Preencher README com nomes e papéis reais.
6. Ajustar imagens e textos para SEO e acessibilidade.

## Rubrica e Autoavaliação (modelo)
- Interatividade: 3/4 — justificativa: menu interativo, formulário implementado via Formspree.
- Acessibilidade: 2/4 — justificativa: atributos ARIA básicos adicionados; revisar contrastes e labels.
- Responsividade: 3/4 — justificativa: mobile-first e breakpoints ajustados; testar conteúdos mais complexos.
- Modularidade: 3/4 — justificativa: componentes separados (css/js) e estrutura de pastas.
- Design: 2/4 — justificativa: base visual presente; precisa de refinamento visual e identidade.

## Checklist final
- [ ] Componentes modularizados
- [ ] Site responsivo nas larguras 375, 768, 1280, 1920
- [ ] Integração externa implementada
- [ ] Rubrica preenchida
- [ ] README finalizado

