Sistema de Certificação de Habilidades 📋
Descrição
Sistema de Certificação de Habilidades é uma API RESTful para gestão de certificações de habilidades. O sistema permite criar usuários, cadastrar habilidades e suas respectivas provas de certificação. Cada prova consiste em perguntas com múltiplas opções de resposta, e os usuários têm uma única tentativa para realizar cada certificação.
🚀 Funcionalidades

Gerenciamento de Usuários: Criação, autenticação e gestão de perfis de usuários
Cadastro de Habilidades: Criação e gerenciamento de habilidades certificáveis
Provas de Certificação: Criação de provas com perguntas e respostas para cada habilidade
Realização de Provas: Interface para usuários realizarem provas de certificação

🔧 Tecnologias
<div align="center">
  <img src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white" alt="Bun" />
  <img src="https://img.shields.io/badge/Elysia-%23E91E63.svg?style=for-the-badge&logo=elysia&logoColor=white" alt="Elysia" />
  <img src="https://img.shields.io/badge/PostgreSQL-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Prisma-%232D3748.svg?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
</div>
⚙️ Instalação e Configuração
Pré-requisitos

Bun
PostgreSQL
Docker (opcional)

Instalação

Clone o repositório:

bashgit clone https://github.com/tarrciodev/certification-test.git
cd certification-test

Instale as dependências:

bashbun install

Configure as variáveis de ambiente:

bashcp .env.example .env
Edite o arquivo .env com suas configurações.

Execute as migrações do banco de dados:

bashbun prisma migrate dev

Inicie o servidor:

bashbun dev
Usando Docker
bashdocker-compose up -d
📊 Estrutura da API
Endpoints principais

POST /users - Criação de usuários
POST /auth - Autenticação de usuários
GET /skills - Listagem de habilidades
POST /certifications - Iniciar uma prova de certificação
POST /certifications/:id/answers - Submeter respostas para uma certificação

📄 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
📞 Contato

Email: tarcisio.devmaster@gmail.com
LinkedIn: Tarcísio Teixeira


<div align="center">
  <sub>Desenvolvido com ❤️ por Tarcísio Teixeira</sub>
</div>
