import { H2, TypographyMuted } from "~/common/components/ui/typography";

export default function ProductReviewsPage() {
  return (
    <>
      <div>
        <H2 className="border-0 text-lg">Reviews</H2>
        <TypographyMuted className="text-base">
          This product has received numerous reviews from users, highlighting
          its strengths and areas for improvement. Users appreciate the quality
          and performance, while some suggest enhancements in specific features.
        </TypographyMuted>
      </div>
    </>
  );
}
