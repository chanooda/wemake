import { Card, CardHeader, CardTitle } from "~/common/components/ui/card";
import { H2, TypographyLarge } from "~/common/components/ui/typography";

export default function ProductPage() {
  return (
    <div className="flex flex-col gap-8 px-20 py-10">
      <H2>Product Page</H2>
      <TypographyLarge>
        Welcome to the Product Page. Here you can explore all products.
      </TypographyLarge>
      <Card>
        <CardHeader>
          <CardTitle>Example Product</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
