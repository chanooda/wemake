import { Card, CardHeader, CardTitle } from "~/common/components/ui/card";
import { H2, TypographyLarge } from "~/common/components/ui/typography";

export default function SubmitPage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <H2>Submit a Product</H2>
      <TypographyLarge>Share your product with the community.</TypographyLarge>
      <Card>
        <CardHeader>
          <CardTitle>Submit Form Placeholder</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
