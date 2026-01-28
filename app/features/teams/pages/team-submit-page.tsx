import { PageTitle } from '~/common/components/page-title';
import { Select } from '~/common/components/select';
import { Textarea } from '~/common/components/textarea';
import { TextField } from '~/common/components/textfield';
import { Button } from '~/common/components/ui/button';
import { LINK } from '~/common/config';
import { metadata } from '~/common/config/sitemap';
import { TEAM_PRODUCT_STAGE_OPTIONS } from '~/entities/teams/config/teams.const';

export const meta = () => {
 return metadata[LINK.TEAMS_CREATE];
};

const TeamSubmitPage = () => {
 return (
  <div>
   <PageTitle title="Create a Team" subTitle="Create a team in our community" />
   <form className="flex flex-col gap-12">
    <div className="grid grid-cols-3 gap-8">
     <TextField
      label="What is the name of your product?"
      description="20 characters max"
      placeholder="i.e Doggy Social"
     />
     <Select
      placeholder="Select the stage of your product"
      label="What is the stage of your product?"
      description="Select the stage of your product"
      options={TEAM_PRODUCT_STAGE_OPTIONS}
     />
     <TextField label="What is the size of your team?" description="(1-100)" />
     <TextField label="How much equity are you willing to give?" description="(each)" />
     <TextField
      label="What roles are you looking for?"
      description="(comma separated)"
      placeholder="i.e React Developer, Backend Developer, Product Manager"
     />
     <Textarea
      rows={4}
      label="What is the description of your product?"
      description="200 characters max"
      placeholder="i.e We are a team of developers who are building a new social media platform."
     />
    </div>
    <Button className="w-1/3 self-center">Create Team</Button>
   </form>
  </div>
 );
};

export default TeamSubmitPage;
