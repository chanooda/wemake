import { z } from 'zod';
import { limitSchema } from '~/common/model/req.schema';

export const jobsFilterTimeEnum = z.enum(['full-time', 'part-time', 'remote']);
export const jobsFilterLocationEnum = z.enum(['remote', 'in-person', 'hybrid']);
export const jobsFilterSalaryRangeEnum = z.enum([
 '0-50000',
 '50000-70000',
 '70000-100000',
 '100000-120000',
 '120000-150000',
 '150000-250000',
 '250000+',
]);

export const jobsSearchParamsSchema = z.object({
 time: jobsFilterTimeEnum.optional(),
 location: jobsFilterLocationEnum.optional(),
 salary: jobsFilterSalaryRangeEnum.optional(),
});

export const getJobsSchema = z.object({
 ...limitSchema.shape,
 ...jobsSearchParamsSchema.shape,
});

export type GetJobsReq = z.infer<typeof getJobsSchema>;
