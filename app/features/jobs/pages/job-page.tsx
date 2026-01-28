import { Badge } from '~/common/components/ui/badge';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent, CardFooter } from '~/common/components/ui/card';
import { TypographyLarge, TypographyMuted } from '~/common/components/ui/typography';
import { getMetadataTitle } from '~/common/config';
import type { Route } from './+types/job-page';

export const meta = ({ params: { ideaId } }: Route.MetaArgs) => {
 return [
  { title: getMetadataTitle(`Job Details`) },
  {
   name: 'description',
   content: `This is the details page for idea #${ideaId}`,
  },
 ];
};

export default function JobPage() {
 return (
  <div>
   <div className="from-primary/20 to-primary/50 rounded-md bg-gradient-to-l py-20" />
   <div className="grid grid-cols-6 items-start">
    <div className="col-span-4 -mt-16">
     <img src="https://github.com/facebook.png" className="relative left-8 size-32 rounded-full" />
     <h2 className="mt-2 text-3xl font-bold">Software Engineer</h2>
     <TypographyMuted className="text-base">Meta Inc.</TypographyMuted>
     <div className="mt-8 flex flex-wrap gap-2">
      {['Full-time', 'Remote'].map((type) => (
       <Badge variant="outline" key={type}>
        {type}
       </Badge>
      ))}
     </div>
     <div className="mt-8 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Overview</h3>
       <p>
        We are looking for a Software Engineer with a passion for building scalable and efficient
        systems. You will be responsible for designing and implementing new features and improving
        existing ones.
       </p>
      </div>
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Responsibilities</h3>
       <ul className="list-inside list-disc">
        <li>Design and implement new features and improve existing ones.</li>
        <li>Troubleshoot and debug applications.</li>
        <li>Optimize applications for maximum speed and scalability.</li>
        <li>Ensure the technical feasibility of UI/UX designs.</li>
        <li>Write clean, maintainable code.</li>
        <li>Follow best practices and industry standards.</li>
        <li>Collaborate with other team members and stakeholders.</li>
        <li>Participate in code reviews and provide feedback.</li>
        <li>Stay up-to-date with new technologies and trends.</li>
        <li>Participate in team meetings and provide feedback.</li>
        <li>Participate in team meetings and provide feedback.</li>
       </ul>
      </div>
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Qualifications</h3>
       <ul className="list-inside list-disc">
        <li>Bachelor's degree in Computer Science or related field.</li>
        <li>3+ years of experience in software development.</li>
        <li>Strong understanding of software development principles.</li>
        <li>Strong understanding of software development principles.</li>
       </ul>
      </div>
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Benefits</h3>
       <ul className="list-inside list-disc">
        <li>Flexible working hours.</li>
        <li>Remote work options.</li>
        <li>Health insurance.</li>
        <li>Dental insurance.</li>
        <li>Vision insurance.</li>
        <li>Retirement benefits.</li>
        <li>Paid time off.</li>
        <li>Parental leave.</li>
        <li>Flexible spending account.</li>
        <li>Employee assistance program.</li>
       </ul>
      </div>
      <div className="flex flex-col gap-2">
       <h3 className="text-xl font-bold">Skills</h3>
       <ul className="list-inside list-disc">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Docker</li>
        <li>Kubernetes</li>
       </ul>
      </div>
     </div>
    </div>
    <div className="sticky top-4 col-span-2">
     <Card className="mt-18">
      <CardContent>
       <TypographyMuted>Avg. Salary</TypographyMuted>
       <TypographyLarge>$100,000 ~ $120,000</TypographyLarge>
       <TypographyMuted className="mt-2">Location</TypographyMuted>
       <TypographyLarge>Remote</TypographyLarge>
       <TypographyMuted className="mt-2">Type</TypographyMuted>
       <TypographyLarge>Full-time</TypographyLarge>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
       <div className="flex w-full justify-start gap-2">
        <TypographyMuted>Posted 2 days ago</TypographyMuted>
        <TypographyMuted>•</TypographyMuted>
        <TypographyMuted>395 views</TypographyMuted>
       </div>
       <Button className="w-full">Apply now</Button>
      </CardFooter>
     </Card>
    </div>
   </div>
  </div>
 );
}
