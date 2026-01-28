import { sql } from 'drizzle-orm';
import {
 bigint,
 check,
 integer,
 pgEnum,
 pgTable,
 text,
 timestamp,
 uuid,
} from 'drizzle-orm/pg-core';
import { profiles } from '~/entities/users';
import { TEAM_PRODUCT_STAGE_OPTIONS } from '../config/teams.const';

export const productStage = pgEnum(
 'product_stage',
 TEAM_PRODUCT_STAGE_OPTIONS.map((option) => option.value) as [string, ...string[]],
);

export const team = pgTable(
 'teams',
 {
  team_id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  product_name: text().notNull(),
  team_size: integer().notNull(),
  equity_split: integer().notNull(),
  product_stage: productStage().notNull(),
  roles: text().notNull(),
  product_description: text().notNull(),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().notNull().defaultNow(),
  team_leader_id: uuid()
   .references(() => profiles.profile_id, { onDelete: 'cascade' })
   .notNull(),
 },
 (table) => [
  check('team_size_check', sql`${table.team_size} BETWEEN 1 AND 100`),
  check('equity_split_check', sql`${table.equity_split} BETWEEN 1 AND 100`),
  check('product_description_check', sql`LENGTH(${table.product_description}) <= 200`),
 ],
);
