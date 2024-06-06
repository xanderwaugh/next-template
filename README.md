# Next.JS Full Template

This is a full template for Next.JS projects. It includes:

- [Next.JS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Prisma](https://www.prisma.io/)
- [AuthJS](https://authjs.dev/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## Commands

| Command              | Description                           |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Starts the development server         |
| `npm run build`      | Builds the application for production |
| `npm run start`      | Starts the production server          |
| `npm run lint`       | Lints the code                        |
| `npm run type-check` | Checks the types                      |
| `npm run format`     | Formats the code                      |

# Environment Variables

```bash
cp .env.example .env
```

```bash
# * Prisma
# ! SQLite - Local File || MySQL Format - 'mysql://user:pass@ip:3306/dbname'
DATABASE_URL='file:./dev.db'
# * Next Telemetry
NEXT_TELEMETRY_DISABLED=1
# * Google Analytics
NEXT_PUBLIC_GA_ID="G-xxxxxxxxxx"
# * NEXT AUTH
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=$(openssl rand -hex 32)
DISCORD_CLIENT=""
DISCORD_SECRET=""
# * Upstash (Optional)
UPSTASH_URL=""
UPSTASH_TOKEN=""
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

# Styling

## TailwindCSS

- [**Docs**](https://tailwindcss.com/docs)
- [**Playground**](https://play.tailwindcss.com/)

## DaisyUI

- [**Components**](https://daisyui.com/components/)
- [**Docs**](https://daisyui.com/docs/)
- [**Theme Generator**](https://daisyui.com/theme-generator/)
