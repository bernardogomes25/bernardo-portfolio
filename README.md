# 🏷️ Portfolio Pessoal - Bernardo 👨‍💻

> [!NOTE]
> Website de portfólio pessoal moderno e responsivo, desenvolvido para apresentar projetos e trajetória profissional. 

<table>
<tr>
<td width="800px">
<div align="justify">
Este projeto consiste em um <b>portfólio pessoal</b> desenvolvido durante o Laboratório de Desenvolvimento de Software. Utilizando uma estética baseada em wireframes personalizados, a aplicação apresenta uma interface <i>dark mode</i> com detalhes em verde, garantindo <i>legibilidade</i> e <i>profissionalismo</i>. A documentação abaixo serve como guia para execução local, entendimento da arquitetura dos componentes e futuras expansões, promovendo <b>documentação de qualidade</b> e <i>reprodutibilidade</i>.
</div>
</td>
<td>
<div>
<img src="https://joaopauloaramuni.github.io/image/logo_ES_vertical.png" alt="Logo do Projeto" width="120px"/>
</div>
</td>
</tr>
</table>

---

## 🖼️ Wireframes
<div align="center">
  <b>Figma: https://www.figma.com/design/igj4cgTh034DM4c3wRSSeI/Lab01---DesenvSoft?node-id=0-1&t=z3NV72J8YuT2g4mX-1</b>

---
  
<img width="512" height="287" alt="image" src="https://github.com/user-attachments/assets/9d883e22-64b0-4c52-82e1-363f0161bb22" />

<img width="512" height="287" alt="image" src="https://github.com/user-attachments/assets/afd8692a-ca98-4cc2-af3e-1fa3263de92a" />

<img width="512" height="287" alt="image" src="https://github.com/user-attachments/assets/b4aff6dc-e75f-45c1-8da6-da95ac365522" />

<img width="512" height="287" alt="image" src="https://github.com/user-attachments/assets/5831168c-37cf-4e37-a3df-f825ebe11b2f" />
</div>

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

* **Framework:** React v19
* **Build Tool:** Vite v6
* **Estilização:** Tailwind CSS v4 (Alpha/Latest)
* **Ícones:** Lucide React
* **Linguagem:** JavaScript ES6+

---

## 🏗 Arquitetura

A aplicação segue uma arquitetura de **Single Page Application (SPA)** focada em componentes funcionais e hooks do React.

* **Layout:** Estrutura baseada em Grid e Flexbox do Tailwind para garantir responsividade pixel-perfect.
* **Componentização:** Divisão lógica entre Header (Navbar), Hero (About), Projects, Experience (Timeline) e Contact.

---

## 🔧 Instalação e Execução

### Pré-requisitos

* **Node.js:** Versão **22.x (LTS)** ou superior (Necessário para compatibilidade com Vite 6 e Tailwind v4)
* **Gerenciador de Pacotes:** npm (v10 ou superior)

### 📦 Instalação de Dependências

```bash
# Clone o repositório
git clone <URL_DO_SEU_REPOSITÓRIO>
cd meu-portfolio

# Instale as dependências
npm install

```

### ⚡ Como Executar a Aplicação

```bash
# Terminal: Inicie o servidor de desenvolvimento
npm run dev

```

🎨 *O Front-end estará disponível em **http://localhost:5173**.*

---

## 📂 Estrutura de Pastas

```
.
├── src/
│   ├── assets/          # 🖼️ Imagens e ícones.
│   ├── components/      # 🧱 Componentes (Navbar, Card, Timeline).
│   ├── App.jsx          # 📘 Componente principal e estrutura de seções.
│   ├── index.css        # 🎨 Configuração do Tailwind v4 e variáveis de tema.
│   └── main.jsx         # 🔌 Ponto de entrada do React.
├── vite.config.js       # ⚙️ Configuração do Vite com plugin Tailwind.
└── package.json         # 📦 Scripts e dependências.

```

---

## 👥 Autores

| 👤 Nome | :octocat: GitHub | 💼 LinkedIn |
| --- | --- | --- |
| Bernardo Gomes| [GitHub](https://www.google.com/search?q=https://github.com/bernardogomes25) | [LinkedIn](https://www.google.com/search?q=https://linkedin.com/in/bernardogomespereira) |

---

## 🙏 Agradecimentos

* **[Prof. Dr. João Paulo Aramuni](https://github.com/joaopauloaramuni)** - Pelos templates e guias de documentação.
* **Comunidade Open Source** - Pelas bibliotecas Lucide e Tailwind CSS.
