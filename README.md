# fju-platform

Estrutura inicial do projeto FJU Platform.

## Pastas

- `client/` - aplicação frontend
- `server/` - backend e API

## Como usar

1. Instalar dependências em `client` e `server`
2. Configurar `.env` locais
3. Iniciar ambos os projetos

## Eventos, unidades e voluntários

O banco agora contém as estruturas para `Unit`, `Event`, `Volunteer`, `EventAttendance` e `Certificate`.
Depois de atualizar o código, aplique a migração dentro de `server/`:

```bash
npm run prisma:migrate -- --name volunteer_events_units
```

O site só exibe unidades e próximos eventos que existam no banco. Cadastre os endereços, coordenadas, WhatsApps e agenda reais antes de publicar; os botões de rota usam latitude/longitude e o WhatsApp é normalizado automaticamente.

## Administração

1. Copie `server/.env.example` para `server/.env` e preencha `DATABASE_URL` e um `JWT_SECRET` forte.
2. Execute as migrações e o seed: `npm run prisma:migrate` e `npm run prisma:seed` dentro de `server/`.
3. Inicie servidor e cliente. O acesso fica em `/admin/login`.

Os assets recebidos da pasta externa devem ser copiados para `client/public/images/` ou `client/public/assets/`; há orientações em `client/public/assets/README.md`.
