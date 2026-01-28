import { supabase } from '~/common/api';
import type { GetJobsReq } from '../model/jobs.schema';

export const getJobs = async ({ limit, time, location, salary }: GetJobsReq) => {
 const jobs = supabase.from('jobs').select('*').limit(limit);

 if (time) {
  jobs.eq('job_type', time);
 }
 if (location) {
  jobs.eq('location', location);
 }
 if (salary) {
  jobs.eq('salary_range', salary);
 }

 const { data, error } = await jobs;

 if (error) {
  throw new Error(error.message);
 }

 return data;
};
