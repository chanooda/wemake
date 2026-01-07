import type { DateTime } from "luxon";

export type DateType = "day" | "week" | "month" | "year";

export interface GetByDateRangeLimitReq {
  from: DateTime;
  to: DateTime;
  limit: number;
}
