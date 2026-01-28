import { defineConfig } from 'drizzle-kit';

export default defineConfig({
 schema: './app/entities/**/schema.ts',
 out: './app/common/api/migrations',
 dialect: 'postgresql',
 dbCredentials: {
  url: process.env.DATABASE_URL!,
 },
});
