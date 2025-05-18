import { Card, CardHeader, CardTitle } from "~/common/components/ui/card";
import { H2, TypographyLarge } from "~/common/components/ui/typography";

export default function PromotePage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <H2>Promote Your Product</H2>
      <TypographyLarge>
        Boost your product's visibility in the community.
      </TypographyLarge>
      <Card>
        <CardHeader>
          <CardTitle>Promotion Options Placeholder</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
