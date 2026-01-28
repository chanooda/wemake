import { useState, type ChangeEvent } from 'react';
import { Form } from 'react-router';
import { PageTitle } from '~/common/components/page-title';
import { Select } from '~/common/components/select';
import { Textarea } from '~/common/components/textarea';
import { TextField } from '~/common/components/textfield';
import { Button } from '~/common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { Label } from '~/common/components/ui/label';
import { TypographyMuted } from '~/common/components/ui/typography';
import { LINK, metadata } from '~/common/config';
import type { Route } from './+types/submit-page';

export const meta: Route.MetaFunction = () => {
 return metadata[LINK.PRODUCT_SUBMIT];
};

export default function SubmitPage() {
 const [file, setFile] = useState<File | undefined>(undefined);

 const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
  const { files } = e.target;
  if (files) {
   setFile(files[0]);
  }
 };

 const url = file ? URL.createObjectURL(file) : '';

 return (
  <div>
   <div>
    <PageTitle title="Submit Your Product" subTitle="Share your product with the world" />
    <Form className="flex">
     <div className="flex w-full justify-center gap-24">
      <div className="flex w-1/2 flex-col gap-4">
       <TextField label="Name" description="This is the name of your product" />
       <TextField label="Tagline" description="60 characters or less" />
       <TextField label="URL" description="The URL of your product" />
       <Textarea label="Description" description="A detailed description of your product" />
       <Select
        options={[
         { label: 'AI', value: 'AI' },
         { label: 'Web', value: 'Web' },
         { label: 'Mobile', value: 'Mobile' },
        ]}
        label="Category"
        description="The category of your product"
        name="category"
        required
        placeholder="Select a Category"
       />

       <Button>Submit</Button>
      </div>
      <div className="w-1/2">
       <div className="flex flex-col gap-2">
        {url && <img src={url} alt="icon preview" className="h-48 w-48 rounded-lg object-cover" />}
        <div className="flex flex-col items-start justify-start">
         <Label className="flex flex-col font-semibold">Icon</Label>
         <TypographyMuted>This is the icon of your product</TypographyMuted>
        </div>
        <Input type="file" onChange={handleChangeFile} />
        <div>
         <TypographyMuted>Recommended size : 128x128px</TypographyMuted>
         <TypographyMuted>Allowed formats: PNG, JPG</TypographyMuted>
         <TypographyMuted>Max file size: 1MB</TypographyMuted>
        </div>
       </div>
      </div>
     </div>
    </Form>
   </div>
  </div>
 );
}
