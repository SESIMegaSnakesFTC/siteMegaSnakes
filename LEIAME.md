# Site da Equipe de Robótica — Guia de Manutenção

Este guia explica como editar e manter o site. Não é necessário conhecimento avançado de programação!

---

## Estrutura de Pastas

```
site/
├── index.html          → Página inicial
├── sobre.html          → História + galeria + redes sociais
├── equipe.html         → Gerações / temporadas da equipe
├── projetos.html       → Metodologia STEAM + materiais para download
├── patrocinadores.html → Cards dos patrocinadores
├── robotica.html       → Missão, FIRST e campeonatos
├── contato.html        → Formulário de patrocínio + redes sociais
│
├── css/
│   ├── style.css       → Todo o visual do site (cores, layout, fontes)
│   └── animacoes.css   → Animações de entrada ao rolar a página
│
├── js/
│   └── script.js       → Menu mobile e animações
│
├── fotos/
│   ├── hero-banner.jpg         → Foto de fundo da página inicial
│   ├── equipe-principal.jpg    → Foto na seção "Quem somos"
│   ├── galeria-01.jpg          → Fotos da galeria (sobre.html)
│   ├── galeria-02.jpg
│   ├── ...
│   ├── robos/                  → Fotos dos robôs (equipe.html)
│   │   ├── robo-fll-2022.jpg
│   │   └── robo-ftc-2023.jpg
│   └── patrocinadores/         → Logos dos patrocinadores
│       ├── empresa1.png
│       └── empresa2.png
│
└── materiais/
    ├── material-didatico-1.pdf
    └── material-didatico-2.pdf
```

---

## Como Editar Textos

Abra o arquivo `.html` correspondente em qualquer editor de texto (Notepad, VSCode, etc.).
Procure pelos comentários em HTML que começam com `<!--` e terminam com `-->`.
Eles indicam exatamente onde substituir o conteúdo.

**Exemplo:**
```html
<!-- Substitua pelo texto de apresentação da equipe -->
A [Nome da Equipe] foi fundada em [ano]...
```
Basta trocar o texto entre as tags `<p>` pelo conteúdo real.

---

## Como Trocar o Nome da Equipe

O nome aparece no **header** e no **footer** de todas as páginas.
Procure por `Nome da Equipe` (aparece em todos os arquivos .html) e substitua pelo nome real.

---

## Como Adicionar a Logo

1. Salve a logo em `fotos/logo.png`
2. Em cada arquivo `.html`, no header, localize o bloco:
```html
<!-- Substitua pelo caminho da sua logo:
     <img src="fotos/logo.png" alt="Logo da equipe" />
-->
<div class="logo-placeholder">R</div>
```
3. Apague o `<div class="logo-placeholder">R</div>`
4. Descomente a tag `<img>` removendo o `<!--` e `-->`

---

## Como Adicionar Fotos

### Foto do hero (banner da página inicial)
1. Salve a foto em `fotos/hero-banner.jpg`
2. Abra `css/style.css`
3. Procure por `.hero {`
4. A linha `url('../fotos/hero-banner.jpg')` já aponta para esse arquivo

### Fotos da galeria (sobre.html)
Procure no arquivo por blocos assim:
```html
<div class="galeria-item animar">
  <div class="galeria-placeholder">...</div>
</div>
```
Substitua o `galeria-placeholder` pela tag de imagem:
```html
<div class="galeria-item animar">
  <img src="fotos/galeria-01.jpg" alt="Descrição da foto" />
</div>
```

---

## Como Adicionar um Patrocinador

Em `patrocinadores.html` (ou `index.html`), copie este bloco e cole dentro da `<div class="patrocinadores-grid">`:
```html
<div class="card-patrocinador animar">
  <img src="fotos/patrocinadores/logo-empresa.png" alt="Nome da Empresa" />
  <h3>Nome da Empresa</h3>
  <p>O que a empresa faz.</p>
</div>
```

---

## Como Adicionar uma Temporada (equipe.html)

Copie o bloco `card-temporada` e cole dentro da `<div class="timeline-lista">`.
- Para FLL: use `<span class="temporada-badge fll">FLL</span>`
- Para FTC: use `<span class="temporada-badge ftc">FTC</span>`

---

## Como Adicionar um Material para Download (projetos.html)

1. Salve o arquivo PDF em `materiais/nome-do-arquivo.pdf`
2. Copie um bloco `card-material` e troque o título, descrição e o `href` do botão:
```html
<a href="materiais/nome-do-arquivo.pdf" class="btn btn-verde" download>
  Baixar PDF
</a>
```

---

## Como Alterar o Link do Formulário de Contato (contato.html)

Procure por `#LINK-DO-FORMULARIO` e troque pelo link real do seu formulário:
```html
href="https://forms.gle/xxxxxxxxxxxxxxxx"
```

---

## Como Atualizar Links das Redes Sociais

Procure por `href="#"` dentro dos blocos de redes sociais e troque pelos links reais.
Isso deve ser feito em: `sobre.html`, `contato.html`, e nas seções de footer em todos os arquivos.

---

## Cores do Site

As cores estão definidas em `css/style.css` no início do arquivo:
```css
:root {
  --verde: #31A901;
  --bege: #EDEDED;
  ...
}
```
Para alterar uma cor, basta trocar o valor hexadecimal.

---

## Dúvidas?

Qualquer dúvida, consulte os comentários dentro dos próprios arquivos HTML e CSS.
Todos os trechos editáveis estão indicados com comentários explicativos.
