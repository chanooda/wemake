import { DateTime } from "luxon";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Form } from "react-router";
import { PageTitle } from "~/common/components/page-title";
import { Select } from "~/common/components/select";
import { Button } from "~/common/components/ui/button";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import { TypographyMuted } from "~/common/components/ui/typography";

export default function PromotePage() {
  const [date, setDate] = useState<DateRange | undefined>();

  const totalDays =
    date?.from && date?.to
      ? DateTime.fromJSDate(date.to).diff(
          DateTime.fromJSDate(date.from),
          "days",
        ).days
      : 0;

  return (
    <div>
      <PageTitle
        title="Submit Your Product"
        subTitle="Share your product with the world"
      />
      <Form className="mx-auto flex max-w-sm flex-col items-center gap-4">
        <Select
          description="Select the product you want to promote"
          label="Select a product"
          name="product"
          placeholder="Select a product"
          options={[]}
        />
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            <Label className="flex flex-col font-semibold">
              Select a range of dates for promotion
            </Label>
            <TypographyMuted>Minimum duration is 3 days</TypographyMuted>
          </div>
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
            className="rounded-md border shadow-sm"
            min={3}
            disabled={{ before: new Date() }}
          />
        </div>
        <Button disabled={totalDays === 0}>
          Go to checkout ${totalDays * 20}
        </Button>
      </Form>
    </div>
  );
}
