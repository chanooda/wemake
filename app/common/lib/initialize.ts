import { Settings } from "luxon";

export const initialize = () => {
  Settings.defaultLocale = "ko-KR";
  Settings.defaultZone = "Asia/Seoul";
};
