import dayjs from "dayjs"; // Bouuh not next-gen
import utc from "dayjs/plugin/utc.js"; // Bouuh not next-gen
import timezone from "dayjs/plugin/timezone.js"; // Bouuh not next-gen

dayjs.extend(utc);
dayjs.extend(timezone);

export const DayJS = dayjs;