import { useSearchParams } from 'react-router';
import { PageTitle } from '~/common/components/page-title';
import { Button } from '~/common/components/ui/button';
import { LINK, metadata } from '~/common/config';
import { cn } from '~/common/lib';
import { getJobs } from '~/entities/jobs';
import { jobsSearchParamsSchema } from '~/entities/jobs/model/jobs.schema';
import { JOBS_FILTER_LOCATION, JOBS_FILTER_TIME, JOBS_SALARY_RANGE } from '../config/jobs-filter';
import { JobCard } from '../ui/job-card';
import type { Route } from './+types/jobs-page';

export const meta = () => {
 return metadata[LINK.JOBS];
};

export const loader = async ({ request }: Route.LoaderArgs) => {
 const url = new URL(request.url);

 const { success, data } = jobsSearchParamsSchema.safeParse(Object.fromEntries(url.searchParams));

 if (!success) {
  throw new Error('Invalid parameters');
 }

 const jobs = await getJobs({ limit: 10, ...data });

 console.log(jobs);

 return { jobs };
};

const JobsPage = ({ loaderData }: Route.ComponentProps) => {
 const [searchParams, setSearchParams] = useSearchParams();

 const { jobs } = loaderData;

 const handleClickFilter = (key: string, value: string) => {
  setSearchParams(
   (searchParams) => {
    searchParams.set(key, value);
    return searchParams;
   },
   {
    preventScrollReset: true,
   },
  );
 };

 return (
  <div>
   <PageTitle title="Jobs" subTitle="Find jobs in our community" />
   <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-6">
    <div className="xl:cols-span-4 col-span-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
     {jobs.map((job) => (
      <JobCard
       key={job.job_id}
       id={String(job.job_id)}
       company={job.company_name}
       companyLogoUrl={job.company_logo_url}
       companyHq={job.company_hq}
       title={job.position}
       postedAt={job.created_at}
       type={job.job_type}
       positionLocation={job.location}
       salaryRange={job.salary_range}
      />
     ))}
    </div>
    <div className="sticky top-20 col-span-1 xl:col-span-2">
     <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
       <div className="flex flex-col gap-2">
        <h4 className="text-md font-medium">Type</h4>
        <div className="flex flex-wrap gap-2">
         {JOBS_FILTER_TIME.map((filter) => (
          <Button
           type="button"
           variant="outline"
           key={filter.value}
           onClick={() => handleClickFilter('time', filter.value)}
           className={cn(searchParams.get('time') === filter.value && 'bg-accent')}
          >
           {filter.label}
          </Button>
         ))}
        </div>
       </div>
       <div className="flex flex-col gap-2">
        <h4 className="text-md font-medium">Location</h4>
        <div className="flex flex-wrap gap-2">
         {JOBS_FILTER_LOCATION.map((filter) => (
          <Button
           type="button"
           variant="outline"
           key={filter.value}
           onClick={() => handleClickFilter('location', filter.value)}
           className={cn(searchParams.get('location') === filter.value && 'bg-accent')}
          >
           {filter.label}
          </Button>
         ))}
        </div>
       </div>
       <div className="flex flex-col gap-2">
        <h4 className="text-md font-medium">Salary</h4>
        <div className="flex flex-wrap gap-2">
         {JOBS_SALARY_RANGE.map((filter) => (
          <Button
           type="button"
           variant="outline"
           key={filter.value}
           onClick={() => handleClickFilter('salary', filter.value)}
           className={cn(searchParams.get('salary') === filter.value && 'bg-accent')}
          >
           {filter.label}
          </Button>
         ))}
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default JobsPage;
