/* eslint-disable */
import {
  CollectionCustomizer,
  TAggregation,
  TConditionTree,
  TPaginatedFilter,
  TPartialRow,
  TSortClause
} from '@forestadmin/agent';

export type AnswerCustomizer = CollectionCustomizer<Schema, 'Answer'>;
export type AnswerRecord = TPartialRow<Schema, 'Answer'>;
export type AnswerConditionTree = TConditionTree<Schema, 'Answer'>;
export type AnswerFilter = TPaginatedFilter<Schema, 'Answer'>;
export type AnswerSortClause = TSortClause<Schema, 'Answer'>;
export type AnswerAggregation = TAggregation<Schema, 'Answer'>;

export type ThemeCustomizer = CollectionCustomizer<Schema, 'Theme'>;
export type ThemeRecord = TPartialRow<Schema, 'Theme'>;
export type ThemeConditionTree = TConditionTree<Schema, 'Theme'>;
export type ThemeFilter = TPaginatedFilter<Schema, 'Theme'>;
export type ThemeSortClause = TSortClause<Schema, 'Theme'>;
export type ThemeAggregation = TAggregation<Schema, 'Theme'>;

export type ThemeStepCustomizer = CollectionCustomizer<Schema, 'ThemeStep'>;
export type ThemeStepRecord = TPartialRow<Schema, 'ThemeStep'>;
export type ThemeStepConditionTree = TConditionTree<Schema, 'ThemeStep'>;
export type ThemeStepFilter = TPaginatedFilter<Schema, 'ThemeStep'>;
export type ThemeStepSortClause = TSortClause<Schema, 'ThemeStep'>;
export type ThemeStepAggregation = TAggregation<Schema, 'ThemeStep'>;

export type _prismaMigrationsCustomizer = CollectionCustomizer<Schema, '_prisma_migrations'>;
export type _prismaMigrationsRecord = TPartialRow<Schema, '_prisma_migrations'>;
export type _prismaMigrationsConditionTree = TConditionTree<Schema, '_prisma_migrations'>;
export type _prismaMigrationsFilter = TPaginatedFilter<Schema, '_prisma_migrations'>;
export type _prismaMigrationsSortClause = TSortClause<Schema, '_prisma_migrations'>;
export type _prismaMigrationsAggregation = TAggregation<Schema, '_prisma_migrations'>;


export type Schema = {
  '_prisma_migrations': {
    plain: {
      'applied_steps_count': number;
      'checksum': string;
      'finished_at': string | null;
      'id': string;
      'logs': string | null;
      'migration_name': string;
      'rolled_back_at': string | null;
      'started_at': string;
    };
    nested: {};
    flat: {};
  };
  'Answer': {
    plain: {
      'correct': boolean;
      'id': number;
      'themeStepId': number | null;
      'word': string;
    };
    nested: {
      'themeStep': Schema['ThemeStep']['plain'] & Schema['ThemeStep']['nested'];
    };
    flat: {
      'themeStep:id': number;
      'themeStep:image': string;
      'themeStep:themeId': number | null;
      'themeStep:theme:createdAt': string;
      'themeStep:theme:id': number;
      'themeStep:theme:initial_theme_screen_bg': string;
      'themeStep:theme:name': string;
      'themeStep:theme:slug': string;
      'themeStep:theme:theme_card_bg': string;
      'themeStep:theme:updatedAt': string;
    };
  };
  'Theme': {
    plain: {
      'createdAt': string;
      'id': number;
      'initial_theme_screen_bg': string;
      'name': string;
      'slug': string;
      'theme_card_bg': string;
      'updatedAt': string;
    };
    nested: {};
    flat: {};
  };
  'ThemeStep': {
    plain: {
      'id': number;
      'image': string;
      'themeId': number | null;
    };
    nested: {
      'theme': Schema['Theme']['plain'] & Schema['Theme']['nested'];
    };
    flat: {
      'theme:createdAt': string;
      'theme:id': number;
      'theme:initial_theme_screen_bg': string;
      'theme:name': string;
      'theme:slug': string;
      'theme:theme_card_bg': string;
      'theme:updatedAt': string;
    };
  };
};
