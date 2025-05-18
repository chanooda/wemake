import { Card, CardHeader, CardTitle } from "~/common/components/ui/card";
import { H2, TypographyLarge } from "~/common/components/ui/typography";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <H2>Product Categories</H2>
      <TypographyLarge>Browse products by category.</TypographyLarge>
      <Card>
        <CardHeader>
          <CardTitle>Example Category</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
