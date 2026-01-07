import type { DateTime } from "luxon";

export type DateType = "day" | "week" | "month" | "year";

export interface GetByDateRangeReq {
  from: DateTime;
  to: DateTime;
}

export interface GetLimitReq {
  limit: number;
}

export interface GetPageReq {
  page: number;
}
export interface GetByDateRangeLimitReq
  extends GetByDateRangeReq,
    GetLimitReq {}

export interface GetDefaultReq
  extends GetByDateRangeReq,
    GetLimitReq,
    GetPageReq {}
