import { format, compareAsc } from "date-fns";
import { startOfToday } from "date-fns";
import { useState } from "react";

const Date = () => {};

const Month = () => {};

export const Calendar = () => {
  let today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
};
