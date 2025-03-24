# ProEventos - Sistema de Gerenciamento de Eventos

Este é um sistema completo (Full Stack) desenvolvido com .NET 8 no backend e Angular 18 no frontend. A aplicação permite o gerenciamento de eventos, oferecendo funcionalidades como cadastro, edição e exclusão de eventos, além de integração com palestrantes e redes sociais.

## 📦 Tecnologias Utilizadas

### Backend
- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQLite
- AutoMapper
- Swagger
- Injeção de Dependência (DI)

### Frontend
- Angular 18
- TypeScript
- Bootstrap 5
- ngx-bootstrap
- Consumo de API REST

## 📁 Estrutura do Projeto

```
ProEventos-main/
├── Back/
│   └── src/
│       ├── ProEventos.API             # Camada de apresentação
│       ├── ProEventos.Application     # Regras de negócio
│       ├── ProEventos.Domain          # Entidades do domínio
│       └── ProEventos.Persistence     # Acesso a dados
└── Front/
    └── proeventos-app/                # Aplicação Angular 18
```

## ⚙️ Como Executar

### Backend

1. Execute as migrations:

```bash
dotnet ef database update
```

2. Rode o projeto:

```bash
dotnet run --project ProEventos.API
```

Acesse a documentação Swagger: `https://localhost:5001/swagger`

### Frontend

1. Acesse a pasta do frontend:

```bash
cd Front/proeventos-app
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação:

```bash
ng serve
```

Acesse em `http://localhost:4200`

## 🔄 Funcionalidades Principais

- Cadastro de eventos
- Edição e exclusão de eventos
- Upload de imagens
- Associação com palestrantes
- Gerenciamento de lotes
- Integração com redes sociais

## 📄 Licença

Projeto educacional de código aberto.
