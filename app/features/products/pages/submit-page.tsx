import { Form } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Select } from "~/common/components/select";
import { Textarea } from "~/common/components/textarea";
import { TextField } from "~/common/components/textfield";
import { LINK, metadata } from "~/common/config";
import type { Route } from "./+types/submit-page";

export const meta: Route.MetaFunction = () => {
  return metadata[LINK.PRODUCT_SUBMIT];
};

export default function SubmitPage() {
  return (
    <div>
      <PageTitle
        title="Submit Your Product"
        subTitle="Share your product with the world"
      />
      <Form className="flex flex-col gap-8">
        <TextField
          label="Name"
          description="This is the name of your product"
        />
        <TextField label="Tagline" description="60 characters or less" />
        <TextField label="URL" description="The URL of your product" />
        <Textarea
          label="Description"
          description="A detailed description of your product"
        />
        <Select
          options={[
            { label: "AI", value: "AI" },
            { label: "Web", value: "Web" },
            { label: "Mobile", value: "Mobile" },
          ]}
          label="Category"
          description="The category of your product"
          name="category"
          required
          placeholder="Select a Category"
        />
      </Form>
    </div>
  );
}
