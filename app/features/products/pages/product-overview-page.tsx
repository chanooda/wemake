import { H2, TypographyMuted } from "~/common/components/ui/typography";
import { getMetadataTitle } from "~/common/config";
import type { Route } from "./+types/product-overview-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: getMetadataTitle("Product Overview"),
    },
    {
      name: "description",
      content: "View Product details and information",
    },
  ];
};

export default function ProductOverviewPage({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <>
      <div>
        <H2 className="border-0 text-lg">What is this product</H2>
        <TypographyMuted className="text-base">
          This product is a comprehensive solution designed to meet the needs of
          users looking for efficiency and reliability. It offers a range of
          features that enhance productivity and streamline workflows.
        </TypographyMuted>
      </div>
      <div>
        <H2 className="border-0 text-lg">Key Features</H2>
        <TypographyMuted className="text-base">
          - Feature 1: Description of feature 1. - Feature 2: Description of
          feature 2. - Feature 3: Description of feature 3.
        </TypographyMuted>
      </div>
    </>
  );
}
