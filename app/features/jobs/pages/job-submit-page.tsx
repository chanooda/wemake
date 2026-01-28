import { Form } from 'react-router';
import { PageTitle } from '~/common/components/page-title';
import { Select } from '~/common/components/select';
import { Textarea } from '~/common/components/textarea';
import { TextField } from '~/common/components/textfield';
import { Button } from '~/common/components/ui/button';
import { LINK, metadata } from '~/common/config';
import { JOBS_FILTER_LOCATION, JOBS_FILTER_TIME, JOBS_SALARY_RANGE } from '../config/jobs-filter';

export const meta = () => {
 return metadata[LINK.JOBS_SUBMIT];
};

export default function JobSubmitPage() {
 return (
  <div>
   <PageTitle title="Submit Job" subTitle="Submit a job to our community" />
   <Form className="mx-auto flex max-w-screen-xl flex-col items-center gap-16">
    <div className="grid grid-cols-3 gap-8">
     <TextField
      label="Position"
      description="(40 characters max)"
      placeholder="i.e Senior Software Engineer"
     />
     <Textarea
      label="Description"
      description="(400 characters max)"
      placeholder="i.e We are looking for a Senior Software Engineer"
     />
     <Textarea
      label="Responsibilities"
      description="(400 characters max, comma separated)"
      placeholder="i.e Design and implement new features, Improve existing code, Debug and fix bugs, etc."
     />
     <Textarea
      label="Qualifications"
      description="(400 characters max, comma separated)"
      placeholder="i.e Bachelor's degree in Computer Science or related field, 3+ years of experience in software development, Strong understanding of software development principles, etc."
     />
     <Textarea
      label="Benefits"
      description="(400 characters max, comma separated)"
      placeholder="i.e Flexible working hours, Remote work options, Health insurance, Dental insurance, Vision insurance, Retirement benefits, Paid time off, Parental leave, Flexible spending account, Employee assistance program, etc."
     />
     <Textarea
      label="Skills"
      description="(400 characters max, comma separated)"
      placeholder="i.e JavaScript, React, Node.js, Express, MongoDB, PostgreSQL, Docker, Kubernetes, etc."
     />
     <TextField
      label="Company Name"
      description="(40 characters max)"
      placeholder="i.e Meta, Google, Apple, etc."
     />
     <TextField
      label="Company Logo URL"
      description="(40 characters max)"
      placeholder="i.e https://github.com/facebook.png"
     />
     <TextField
      label="Company Location"
      description="(40 characters max)"
      placeholder="i.e San Francisco, CA, USA"
     />
     <TextField
      label="Apply URL"
      description="(40 characters max)"
      placeholder="i.e https://www.meta.com/apply"
     />
     <Select
      label="Job Type"
      description="Select The type of job"
      options={JOBS_FILTER_TIME}
      placeholder="Select a Job Type"
     />
     <Select
      label="Job Location"
      description="Select The location of the job"
      options={JOBS_FILTER_LOCATION}
      placeholder="Select a Job Location"
     />
     <Select
      label="Salary Range"
      description="Select The salary range of the job"
      options={JOBS_SALARY_RANGE}
      placeholder="Select a Salary Range"
     />
    </div>
    <Button className="px-32">Post job for $100</Button>
   </Form>
  </div>
 );
}
