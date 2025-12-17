import { Form } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Select } from "~/common/components/select";
import { Textarea } from "~/common/components/textarea";
import { TextField } from "~/common/components/textfield";
import { Button } from "~/common/components/ui/button";
import { LINK, metadata } from "~/common/config";

export const meta = () => {
  return metadata[LINK.COMMUNITY_CREATE_POST];
};

const PostSubmitPage = () => {
  return (
    <div>
      <PageTitle
        title="Create a Discussion"
        subTitle="Create a discussion in our community"
      />
      <Form className="mx-auto flex max-w-screen-md flex-col gap-8">
        <TextField
          label="Title"
          description="The title of your discussion (40 characters max)"
          placeholder="i.e What is the best tool for productivity?"
        />
        <Select
          label="Category"
          description="The category of your discussion"
          placeholder="Select a category"
          options={[
            { label: "Productivity", value: "productivity" },
            { label: "Technology", value: "technology" },
            { label: "Science", value: "science" },
            { label: "Art", value: "art" },
            { label: "Music", value: "music" },
            { label: "Other", value: "other" },
          ]}
        />
        <Textarea
          label="Content"
          description="The content of your discussion (1000 characters max)"
          placeholder="i.e I'm looking for a new tool to help me with my productivity"
        />
        <Button className="w-1/3 self-center">Create Discussion</Button>
      </Form>
    </div>
  );
};

export default PostSubmitPage;
