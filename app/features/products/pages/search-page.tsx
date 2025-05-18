import { Card, CardHeader, CardTitle } from "~/common/components/ui/card";
import { H2, TypographyLarge } from "~/common/components/ui/typography";

export default function SearchPage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <H2>Product Search</H2>
      <TypographyLarge>Search for products in our community.</TypographyLarge>
      <Card>
        <CardHeader>
          <CardTitle>Example Search Result</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
