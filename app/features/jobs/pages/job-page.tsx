import { DateTime } from 'luxon';
import { data } from 'react-router';
import { Badge } from '~/common/components/ui/badge';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent, CardFooter } from '~/common/components/ui/card';
import { TypographyLarge, TypographyMuted } from '~/common/components/ui/typography';
import { getMetadataTitle } from '~/common/config';
import { idSchema } from '~/common/model';
import { getJob } from '~/entities/jobs';
import { JOBS_SALARY_RANGE } from '../config/jobs-filter';
import type { Route } from './+types/job-page';

export const meta = ({ data: { job } }: Route.MetaArgs) => {
 return [
  { title: getMetadataTitle(`${job.position} at ${job.company_name}`) },
  {
   name: 'description',
   content: `This is the details page for job ${job.position} at ${job.company_name}`,
  },
 ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
 const { jobId } = params;

 const { success, data: parsedData } = idSchema.safeParse({ id: jobId });

 if (!success) {
  throw data({ error_code: 'invalid_params' }, { status: 400 });
 }

 const job = await getJob(parsedData.id);

 if (!job) {
  throw data({ error_code: 'not Found' }, { status: 404 });
 }

 return { job };
};
export default function JobPage({ loaderData }: Route.ComponentProps) {
 const { job } = loaderData;

 return (
  <div>
   <div className="from-primary/20 to-primary/50 rounded-md bg-gradient-to-l py-20" />
   <div className="grid grid-cols-6 items-start">
    <div className="col-span-4 -mt-16">
     <img src="https://github.com/facebook.png" className="relative left-8 size-32 rounded-full" />
     <h2 className="mt-2 text-3xl font-bold">{job.position}</h2>
     <TypographyMuted className="text-base">{job.company_name}</TypographyMuted>
     <div className="mt-8 flex flex-wrap gap-2">
      <Badge variant="outline" key={job.job_type}>
       {job.job_type}
      </Badge>
      <Badge variant="outline" key={job.location}>
       {job.location}
      </Badge>
     </div>
     <div className="mt-8 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Overview</h3>
       <p>{job.overview}</p>
      </div>
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Responsibilities</h3>
       <ul className="list-inside list-disc">
        {job.responsibilities.split(',').map((responsibility) => (
         <li key={responsibility}>{responsibility}</li>
        ))}
       </ul>
      </div>
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Qualifications</h3>
       <ul className="list-inside list-disc">
        {job.qualifications.split(',').map((qualification) => (
         <li key={qualification}>{qualification}</li>
        ))}
       </ul>
      </div>
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Benefits</h3>
       <ul className="list-inside list-disc">
        {job.benefits.split(',').map((benefit) => (
         <li key={benefit}>{benefit}</li>
        ))}
       </ul>
      </div>
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Skills</h3>
       <ul className="list-inside list-disc">
        {job.skills.split(',').map((skill) => (
         <li key={skill}>{skill}</li>
        ))}
       </ul>
      </div>
     </div>
    </div>
    <div className="sticky top-4 col-span-2">
     <Card className="mt-18">
      <CardContent>
       <TypographyMuted>Avg. Salary</TypographyMuted>
       <TypographyLarge>
        {JOBS_SALARY_RANGE.find((range) => range.value === job.salary_range)?.label}
       </TypographyLarge>
       <TypographyMuted className="mt-2">Location</TypographyMuted>
       <TypographyLarge>{job.location}</TypographyLarge>
       <TypographyMuted className="mt-2">Type</TypographyMuted>
       <TypographyLarge>{job.job_type}</TypographyLarge>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
       <div className="flex w-full justify-start gap-2">
        <TypographyMuted>
         Posted {DateTime.fromISO(job.created_at).toRelative()} ago
        </TypographyMuted>
        <TypographyMuted>•</TypographyMuted>
        <TypographyMuted>123 views</TypographyMuted>
       </div>
       <Button className="w-full">Apply now</Button>
      </CardFooter>
     </Card>
    </div>
   </div>
  </div>
 );
}
