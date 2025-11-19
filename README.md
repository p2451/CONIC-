# Projeto Web - Responsividade e Integrações



## Integrantes e papéis
- Pedro Dias Ferreira — Designer, Desenvolvedor Front-end
- Diego Alves - Documentação

## Descrição do negócio
Sebo de Discos - CONIC

## Modelo FIGMA ##
https://www.figma.com/design/w5FkqOInr84cKjNIyjbMin/trabalho-front_?node-id=1-171&t=4ElJ5Af2b7A3M546-1

## Objetivos do site
- Presença online simples e responsiva
- Informações de contato e localização
- Formulário funcional sem back-end
- Integrações para facilitar contato (WhatsApp, Google Maps)

## Estrutura de pastas
```
  /CONIC!
  atividade.html
  js
  responsive.css
  style.css

  /CONIC!/componentes:
    footer.html
    header.html
    

  /CONIC!/js:
    components.js
    menu_hamburguer.js

  /CONIC!/css:
    style.css
    responsive.css

  /CONIC!/docs:
    rubricaDFE.pdf
    /CONIC!/docs/testes-navegadores:
       teste-chrome.png
       teste-edge.png
       teste-mozilla.png
    /CONIC!/docs/testes-responsividade:
        teste.png


  /CONIC!/img:
    contato.png
    disco01.jpg
    disco02.jpg
    disco03.jpg
    discoteca01.jpg
    kurtcobain.png
    localizacao.jpeg

  README.md


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

## Melhorias implementadas (Parte 3)
- Organização das pastas.
- Exclusão de pastas e arquivos desnecessários.

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

## GitPAGES
GitPAGES
https://p2451.github.io/CONIC-/

image: 
<img width="805" height="166" alt="image" src="https://github.com/user-attachments/assets/9310510b-7840-4616-85f2-6a89c91d3957" />


