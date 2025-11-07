# 📝 Iniciando um projeto React com Vite

- [ ]  Criar o diretório do projeto.
- [ ]  Inicializar o projeto com Vite:
    
    ```bash
    npm create vite@latest .
    ```
    
    ⚠️ **Não instale as dependências ainda.** Entre na pasta, mas só rode `npm install` depois de configurar o ESLint.
    
- [ ]  Atualizar o `package.json`, alterando o script `dev` para abrir o navegador automaticamente:
    
    ```json
    "scripts": {
      "dev": "vite --open",
      "build": "vite build"
    },
    ```
    

### 🧹 Limpar configuração padrão

- [ ]  Excluir o arquivo criado automaticamente pelo Vite:
    
    ```bash
    rm .eslintrc.cjs
    ```
    

### 🔧 Remover dependências antigas (criadas pelo template do Vite)

- [ ]  Remover pacotes antigos de lint:
    
    ```bash
    npm remove @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks eslint-plugin-react-refresh
    ```
    

### 📦 Instalar ESLint e o pacote de regras Airbnb

- [ ]  Instalar ESLint e dependências recomendadas do Airbnb:
    
    ```bash
    npx install-peerdeps --dev eslint-config-airbnb
    npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```
    
- [ ]  remover eslint.config.js

### 🧩 Criar o arquivo de configuração do ESLint

- [ ]  Criar o arquivo `.eslintrc.json` na raiz do projeto
    
    ```bash
    cat > .eslintrc.json << 'EOF'
    {
      "extends": [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint"],
      "env": {
        "browser": true,
        "es2021": true
      },
      "rules": {
        "react/jsx-filename-extension": [
          1,
          { "extensions": [".jsx", ".tsx"] }
        ],
        "import/no-extraneous-dependencies": [
          "error",
          { "devDependencies": true }
        ],
        "react/react-in-jsx-scope": "off"
      },
      "settings": {
        "react": {
          "version": "detect"
        }
      }
    }
    EOF
    ```
    
- [ ]  Criar o arquivo `.eslintignore` na **raiz do projeto** com exatamente esse conteúdo:
    
    ```bash
    cat > .eslintignore << 'EOF'
    node_modules
    dist
    build
    *.config.js
    *.config.ts
    coverage
    .vscode
    .idea
    vite.config.ts
    EOF
    ```
    
- [ ]  Atualize o script no `package.json`
    
    ```json
    "scripts": {
      "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
    }
    ```
    
- [ ]  Rode o lint:
    
    ```bash
    npm run lint
    ```
    

### 🧠 Configurar o VS Code

- [ ]  Criar o arquivo `.vscode/settings.json`:
    
    ```bash
    mkdir -p .vscode && cat > .vscode/settings.json << 'EOF'
    {
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit",
        "source.fixAll.stylelint": "explicit"
      },
      "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
      "extensions.ignoreRecommendations": false,
      "cSpell.words": [
        // "Lista de palavras aceitas pelo corretor ortográfico",
        // "youtube"
      ]
    }
    EOF
    ```
    

### 🚀 Finalizar configuração e rodar o projeto

- [ ]  **Instalar as dependências do projeto:**
    
    ```bash
    npm install
    ```
    
- [ ]  **Rodar o servidor de desenvolvimento:**
    
    ```bash
    npm run dev
    ```
    

---

# CSS Resset

```bash
#!/bin/bash

# Criar a pasta CSS dentro de src
mkdir -p src/CSS

# Criar reset.css em uma única linha
cat > src/CSS/reset.css << 'EOF'
@charset "utf-8";:where(:not(html,iframe,canvas,img,svg,video,audio):not(svg *,symbol *)){all:unset;display:revert}*,::after,::before{box-sizing:border-box}a,button{cursor:revert}menu,ol,ul{list-style:none}img{max-inline-size:100%;max-block-size:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;appearance:revert}:where(pre){all:revert}::placeholder{color:unset}::marker{content:initial}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable=false])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto}:where([draggable=true]){-webkit-user-drag:element}:where(dialog:modal){all:revert}
EOF

# Criar index.css com o conteúdo atualizado
cat > src/CSS/index.css << 'EOF'
@import url('https://fonts.googleapis.com/css2?family=Kalnia:wght@700&family=Lato:wght@300;400;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap');

:root {
  --font-title-primary: 'Kalnia', serif;
  --color-title-primary: #f7c130;
  --color-dark: #030c1a;
  --color-light-gray : #ffffffb3;
  --color-medium-gray: #4B4B4B;
  --color-hard-gray: #353535;

  width: 100vw;
  max-width: 100%;
}

html {
  font-size: 62.5%;
  font-family: "Titillium Web", sans-serif;
  color: var(--primary_color);
  font-weight: 300;
  line-height: 1.7;
}

body {
  background-color: var(--color-hard-gray);
  color: var(--color-light-gray );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
}

body::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.title {
  font-family: var(--font-title-primary);
  font-size: 6vw;
  color: var(--color-title-primary);
  text-align: center;
  line-height: 1;
  margin-bottom: 2rem;
  width: 100%;
}

.subtitle {
  text-align: center;
}

.menu_social {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.menu_social a {
  position: relative;
  display: block;
  overflow: hidden;
  width: 40px;
  height: 40px;
  color: var(--color-light-gray);
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s ease;
}

.menu_social span {
  position: absolute;
  text-indent: -200px;
}

.menu_social a:hover {
  color: var(--color-title-primary);
}

@media only screen and (min-width: 1024px) {
  .app_title {
    font-size: 5vw;
  }
}
EOF

# Remover arquivos index.css e App.css antigos
rm -f src/index.css src/App.css

# Criar novo App.tsx com o conteúdo solicitado
cat > src/App.tsx << 'EOF'
function App() {
  return (
    <>
      <h1 className="title">Vite + React</h1>
      <h2 className="subtitle">
        Configurado usando o modelo desenvolvido por Marco Severo
      </h2>
      <footer>
        <nav aria-label="Redes sociais">
          <ul className="menu_social">
            <li>
              <a
                className="social_linkedin"
                href="https://www.linkedin.com/in/severidade/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Marco Severo"
                title="Abrir perfil no LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5834 33.9999V15.1075H5.36747V33.9999L11.5834 33.9999ZM8.47609 12.529C10.643 12.529 11.9929 11.0771 11.9929 9.26416C11.9519 7.41095 10.643 6 8.51673 6C6.39007 6.00006 5 7.41101 5 9.26422C5 11.0771 6.3491 12.5291 8.43517 12.5291L8.47609 12.529ZM15.0237 33.9999C15.0237 33.9999 15.1052 16.8801 15.0237 15.1076H21.2406V17.8474H21.1993C22.0168 16.5581 23.4895 14.6639 26.8427 14.6639C30.9337 14.6639 34 17.3641 34 23.1672V34H27.7841V23.8931C27.7841 21.3535 26.8847 19.6206 24.6346 19.6206C22.9176 19.6206 21.8944 20.7889 21.445 21.9182C21.2806 22.3201 21.2406 22.8847 21.2406 23.4494V33.9999H15.0237Z"
                  />
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                className="social_github"
                href="https://github.com/severidade"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Marco Severo"
                title="Abrir repositórios no GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M25.5417 21.7801C26.1517 21.7801 26.6669 22.0783 27.1143 22.6884C27.5481 23.2984 27.7921 24.0305 27.7921 24.9117C27.7921 25.7929 27.5616 26.5385 27.1143 27.135C26.6669 27.745 26.1653 28.0433 25.5417 28.0433C24.9045 28.0433 24.3487 27.745 23.9149 27.135C23.4811 26.5385 23.237 25.7929 23.237 24.9117C23.237 24.0305 23.4675 23.2849 23.9149 22.6884C24.3487 22.0783 24.9045 21.7801 25.5417 21.7801ZM33.4046 13.646C35.1128 15.5033 35.9804 17.7402 35.9804 20.3973C35.9804 22.1054 35.7906 23.6509 35.3839 25.0201C34.9772 26.3894 34.4891 27.501 33.8927 28.3551C33.2826 29.2092 32.5505 29.9683 31.6693 30.6191C30.7882 31.2698 29.9747 31.7443 29.2291 32.0425C28.4835 32.3408 27.643 32.5712 26.694 32.7475C25.745 32.9102 25.0401 33.0051 24.5385 33.0322C24.0504 33.0457 23.5353 33.0593 22.9659 33.0593C22.8439 33.0593 22.4101 33.0728 21.7187 33.1C21.0273 33.1271 20.4443 33.1406 19.9834 33.1406C19.5225 33.1406 18.926 33.1406 18.2482 33.1C17.5568 33.0728 17.1229 33.0593 17.0009 33.0593C16.4451 33.0593 15.9299 33.0457 15.4283 33.0322C14.9267 33.0051 14.2218 32.9102 13.2728 32.7475C12.3103 32.5848 11.4833 32.3543 10.7377 32.0425C9.99209 31.7443 9.17868 31.2698 8.31105 30.6191C7.42986 29.9683 6.68424 29.2227 6.08774 28.3551C5.49124 27.501 4.98964 26.3894 4.5965 25.0201C4.20335 23.6509 4 22.1054 4 20.3973C4 17.7537 4.86763 15.5033 6.57578 13.646C6.38599 13.5511 6.38599 12.6293 6.56223 10.8669C6.71135 9.1045 7.07738 7.47769 7.70099 6C9.82941 6.23046 12.473 7.43702 15.6317 9.61965C16.6891 9.34852 18.1533 9.19939 20.0105 9.19939C21.9627 9.19939 23.4133 9.34852 24.3894 9.61965C25.8264 8.64357 27.1956 7.85728 28.5106 7.26078C29.8392 6.66428 30.8153 6.31181 31.4118 6.21691L32.3201 6.01356C32.9301 7.49124 33.3097 9.11805 33.4588 10.8804C33.5944 12.6293 33.5944 13.5511 33.4046 13.646ZM20.0512 31.5138C23.9149 31.5138 26.8025 31.0529 28.7818 30.131C30.7339 29.2092 31.7371 27.2977 31.7371 24.4236C31.7371 22.7561 31.1135 21.3598 29.8663 20.2482C29.2291 19.6517 28.4699 19.2721 27.6023 19.1365C26.7482 19.0009 25.4332 19.0009 23.6709 19.1365C21.9085 19.2721 20.7019 19.3398 20.0512 19.3398C19.17 19.3398 18.221 19.2992 17.0416 19.2043C15.8486 19.1094 14.9132 19.0552 14.2489 19.028C13.5711 19.0145 12.8526 19.0958 12.0527 19.2721C11.2664 19.4619 10.6157 19.7872 10.1005 20.2482C8.90755 21.3191 8.29749 22.7155 8.29749 24.4236C8.29749 27.2977 9.27358 29.2092 11.2258 30.131C13.1644 31.0529 16.052 31.5138 19.9156 31.5138H20.0512ZM14.4929 21.7801C15.103 21.7801 15.6181 22.0783 16.052 22.6884C16.4858 23.2984 16.7298 24.0305 16.7298 24.9117C16.7298 25.7929 16.4993 26.5385 16.052 27.135C15.6181 27.745 15.103 28.0433 14.4929 28.0433C13.8558 28.0433 13.2999 27.745 12.8526 27.135C12.4187 26.5385 12.1747 25.7929 12.1747 24.9117C12.1747 24.0305 12.4052 23.2849 12.8526 22.6884C13.2864 22.0783 13.8422 21.7801 14.4929 21.7801Z"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                className="social_behance"
                href="https://www.behance.net/severidade"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance de Marco Severo"
                title="Abrir portfólio no Behance"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M31.2979 13.3125C41.3385 13.3125 39.9326 24.0801 39.9326 24.0801H27.0791C27.0793 28.6888 31.4443 28.3965 31.4443 28.3965C35.5673 28.3964 35.4219 25.7285 35.4219 25.7285H39.7871C39.7871 32.7843 31.3625 32.3297 31.2988 32.3262C21.1393 32.3262 21.7633 22.8911 21.7666 22.8428C21.7666 22.8428 21.7584 13.3126 31.2979 13.3125ZM12.9082 7C16.8312 7 19.9276 9.16559 19.9277 13.6045C19.9277 18.0205 16.1833 18.3221 16.1436 18.3252C21.1323 18.3254 20.7881 24.4854 20.7881 24.4854C20.788 32.0562 12.9082 31.8066 12.9082 31.8066H0V7H12.9082ZM5.6875 27.3984H12.5752C13.6107 27.3696 15.5234 27.0446 15.5234 24.1758C15.5234 20.7354 12.9082 20.7686 12.9082 20.7686H5.6875V27.3984ZM31.3945 16.9453C27.5758 16.9456 27.0329 20.7429 27.0293 20.7686H35.1787C35.179 20.7376 35.2114 16.9449 31.3945 16.9453ZM5.6875 16.9453H12.4609C13.6308 16.9453 14.6631 16.571 14.6631 13.9902C14.6631 11.4095 12.9082 11.4092 12.9082 11.4092H5.6875V16.9453ZM36.1973 11.5166H25.9619V8.46094H36.1973V11.5166Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Behance</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
EOF

# Substituir importação de index.css por reset.css e index.css em main.tsx
sed -i "s|import './index.css'|import './CSS/reset.css';\nimport './CSS/index.css';|" src/main.tsx

# Remover a linha que importa App.css em App.tsx (caso ainda exista)
sed -i "/import '.\/App.css';/d" src/App.tsx

```