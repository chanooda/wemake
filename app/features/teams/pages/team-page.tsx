import { data } from 'react-router';
import { PageTitle } from '~/common/components/page-title';
import { Textarea } from '~/common/components/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '~/common/components/ui/avatar';
import { Badge } from '~/common/components/ui/badge';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/common/components/ui/card';
import { TypographyLarge } from '~/common/components/ui/typography';
import { getMetadataTitle } from '~/common/config';
import { idSchema } from '~/common/model';
import { getTeam } from '~/entities/teams';
import type { Route } from './+types/team-page';

export const meta = ({ data: { team } }: Route.MetaArgs) => {
 return [
  { title: getMetadataTitle(`${team.team_leader.name}'s Team`) },
  {
   name: 'description',
   content: `This is the details page for team ${team.team_leader.name}'s team`,
  },
 ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
 const { teamId } = params;

 const { success, data: parsedData } = idSchema.safeParse({ id: teamId });

 if (!success) {
  throw data({ error_code: 'invalid_params' }, { status: 400 });
 }

 const team = await getTeam(parsedData.id);

 if (!team) {
  throw data({ error_code: 'not Found' }, { status: 404 });
 }

 return { team };
};

const TeamPage = ({ loaderData }: Route.ComponentProps) => {
 const { team } = loaderData;

 return (
  <div>
   <PageTitle title={`Join ${team.team_leader.name}'s team`} />
   <div className="grid grid-cols-6 gap-32">
    <div className="col-span-4 grid grid-cols-4 gap-4">
     {[
      {
       title: 'Product name',
       value: team.product_name,
      },
      {
       title: 'Stage',
       value: team.product_stage,
      },
      {
       title: 'Team size',
       value: team.team_size,
      },
      {
       title: 'Available equity',
       value: team.equity_split,
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
         {team.roles.split(',').map((item) => (
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
       <CardContent className="px-0">
        <TypographyLarge>{team.product_description}</TypographyLarge>
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
          <AvatarFallback>{team.team_leader.name.slice(0, 2)}</AvatarFallback>
          {team.team_leader.avatar && <AvatarImage src={team.team_leader.avatar} />}
         </Avatar>
         <div className="flex flex-col">
          <span className="text-lg font-bold">{team.team_leader.name}</span>
          <Badge variant="secondary" className="rounded-full font-semibold">
           {team.team_leader.role}
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
