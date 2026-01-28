import { useState } from 'react';
import { Form } from 'react-router';
import { PageTitle } from '~/common/components/page-title';
import { Select } from '~/common/components/select';
import { Textarea } from '~/common/components/textarea';
import { TextField } from '~/common/components/textfield';
import { Avatar, AvatarFallback, AvatarImage } from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '~/common/components/ui/card';
import { Input } from '~/common/components/ui/input';
import { TypographyMuted } from '~/common/components/ui/typography';

export const meta = () => {
 return [{ title: 'Settings | Wemake' }, { name: 'description', content: 'Account settings' }];
};

const SettingsPage = () => {
 const [avatar, setAvatar] = useState<string>('');

 const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files) {
   const file = event.target.files[0];
   setAvatar(URL.createObjectURL(file));
  }
 };
 return (
  <div>
   <PageTitle title="Settings" />
   <div className="grid grid-cols-6 gap-48">
    <div className="col-span-4 flex flex-col gap-8">
     <h2 className="text-2xl font-bold">Edit Profile</h2>
     <Form className="flex flex-col gap-4">
      <TextField label="Name" description="Enter your name" placeholder="Enter your name" />
      <Select
       label="Rol"
       description="What is role do you identify the most with?"
       options={[
        { label: 'Founder', value: 'founder' },
        { label: 'Developer', value: 'developer' },
        { label: 'Designer', value: 'designer' },
        { label: 'Marketer', value: 'marketer' },
        { label: 'Other', value: 'other' },
       ]}
      />
      <Textarea label="Bio" description="Enter your bio" placeholder="Enter your bio" rows={4} />
      <Button>Update Profile</Button>
     </Form>
    </div>
    <aside className="col-span-2">
     <Card className="h-full">
      <CardHeader>
       <CardTitle>Avatar</CardTitle>
       <CardDescription>Upload a new avatar for your profile</CardDescription>
      </CardHeader>
      <CardContent className="h-full">
       <div className="flex h-full flex-col gap-4">
        <Avatar className="size-32 shadow-md">
         <AvatarFallback>CN</AvatarFallback>
         <AvatarImage src={avatar} />
        </Avatar>
        <Input type="file" onChange={handleChangeFile} name="icon" />
        <TypographyMuted>
         Recommended size : 128x128px
         <br />
         Allowed formats: PNG, JPG
         <br />
         Max file size: 1MB
        </TypographyMuted>
        <Button className="mt-auto">Upload Avatar</Button>
       </div>
      </CardContent>
     </Card>
    </aside>
   </div>
  </div>
 );
};

export default SettingsPage;
