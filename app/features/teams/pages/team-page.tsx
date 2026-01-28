import { PageTitle } from '~/common/components/page-title';
import { Textarea } from '~/common/components/textarea';
import { Avatar, AvatarImage } from '~/common/components/ui/avatar';
import { Badge } from '~/common/components/ui/badge';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/common/components/ui/card';
import { TypographyLarge } from '~/common/components/ui/typography';
import { getMetadataTitle } from '~/common/config';
import type { Route } from './+types/team-page';

export const meta = ({ params: { teamId } }: Route.MetaArgs) => {
 return [
  { title: getMetadataTitle(`Team#${teamId}`) },
  {
   name: 'description',
   content: `This is the details page for team #${teamId}`,
  },
 ];
};

const TeamPage = ({ params: { teamId } }: Route.ComponentProps) => {
 return (
  <div>
   <PageTitle title={`Join chanoo's team`} />
   <div className="grid grid-cols-6 gap-32">
    <div className="col-span-4 grid grid-cols-4 gap-4">
     {[
      {
       title: 'Product name',
       value: 'Doggie Social',
      },
      {
       title: 'Stage',
       value: 'MVP',
      },
      {
       title: 'Team size',
       value: 3,
      },
      {
       title: 'Available equity',
       value: 50,
      },
     ].map((item) => (
      <Card key={item.title}>
       <CardHeader>
        <CardTitle className="text-muted-foreground text-sm">{item.title}</CardTitle>
        <CardContent className="px-0">
         <TypographyLarge>{item.value}</TypographyLarge>
        </CardContent>
       </CardHeader>
      </Card>
     ))}

     <Card className="col-span-2">
      <CardHeader>
       <CardTitle className="text-muted-foreground text-sm">Looking for</CardTitle>
       <CardContent className="px-0">
        <ul className="list-inside list-disc">
         {['React Developer', 'Backend Developer', 'Product Manager'].map((item) => (
          <li key={item} className="font-semibold">
           {item}
          </li>
         ))}
        </ul>
       </CardContent>
      </CardHeader>
     </Card>
     <Card className="col-span-2">
      <CardHeader>
       <CardTitle className="text-muted-foreground text-sm">Idea Description</CardTitle>
       <CardContent>
        <TypographyLarge>
         We are a team of developers who are building a new social media platform.
        </TypographyLarge>
       </CardContent>
      </CardHeader>
     </Card>
    </div>
    <aside className="col-span-2">
     <Card>
      <CardContent>
       <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
         <Avatar className="size-14">
          <AvatarImage src="https://github.com/chanooda.png" />
         </Avatar>
         <div className="flex flex-col">
          <span className="text-lg font-bold">chanooda</span>
          <Badge variant="secondary" className="rounded-full font-semibold">
           Entrepreneur
          </Badge>
         </div>
        </div>
       </div>
       <form className="mt-8 flex flex-col gap-4">
        <Textarea label="Introduce yourself" description="Tell us about yourself" rows={4} />
        <Textarea
         label="Why do you want to join the team?"
         description="Tell us why you want to join the team"
         rows={4}
        />
        <Button className="w-full">Get in touch</Button>
       </form>
      </CardContent>
     </Card>
    </aside>
   </div>
  </div>
 );
};

export default TeamPage;
