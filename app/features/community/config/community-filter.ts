import type { PeriodType } from '~/common/model';

export const SORT_OPTIONS = [
 { label: 'newest', value: 'newest' },
 { label: 'popular', value: 'popular' },
];
export const PERIOD_OPTIONS: { label: string; value: PeriodType }[] = [
 { label: 'all', value: 'all' },
 { label: 'today', value: 'day' },
 { label: 'week', value: 'week' },
 { label: 'month', value: 'month' },
 { label: 'year', value: 'year' },
];
