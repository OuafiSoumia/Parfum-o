This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

cd apps/web

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

pour seeder la db : cd apps/web/scripts : npx ts-node seed.ts
formater un fichier : npx prettier --write src/App.tsx

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
cd apps/web --- yarn build : pour tester le build
supprime le fichier du build: npx rimraf .next

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

probleme de deployement fixer par le changement dans le fichier vercel.json de la ligne:
"builds": [{"src": "apps/web/package.json", "use": "@vercel/next"}]
par cette ligne:
"builds": [{ "src": "package.json", "use": "@vercel/next" }],

probleme 2: acces to mongodb local avec vercel -- faut utiliser mongo atlas en ligne 

