# Next.js Boilerplate com TailwindCSS

## 🚀 Visão Geral
Boilerplate construído com Next.js e TailwindCSS, incluindo autenticação, Docker e GitHub Actions e shadcn/ui.

## 📋 Funcionalidades
- Autenticação integrada
- Gerador automático de componentes e páginas
- Docker pronto para uso
- GitHub Actions configurado
- Estrutura de testes preparada
- TailwindCSS para estilização

## 🛠️ Páginas Disponíveis
- `/` - Home (protegida por autenticação)
- `/login` - Página de login
- `/cadastro` - Página de cadastro de usuário

## 🚦 Começando

### Pré-requisitos
- Node.js 18+

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Gerar novo componente/página
npm run generate

# Executar testes
npm run test
```

## 🐳 Docker
```bash
# Construir imagem
docker build -t nextjs-boilerplate .

# Executar container
docker run -p 3000:3000 nextjs-boilerplate
```

## 📦 Estrutura do Projeto
```
/
├─📁 .devcontainer          ->  Configurações do devcontainer
├─📁 .vscode                ->  Definições de ambiente para o VSCode
├─📁 docs                   ->  Artefatos para documentação do repo
├─📁 src                    ->  Entrypoint da aplicação
│    ...
|
├─📄 .gitignore
├─📄 Makefile               ->  Automações para o ambiente
├─📄 package.json           ->  Definições para o projeto
├─📄 README.md
```

