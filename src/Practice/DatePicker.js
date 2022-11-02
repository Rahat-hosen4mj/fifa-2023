import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../asset/images/players/player-1.png";

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="pt-12 flex flex-col items-center justify-center">
      <DayPicker mode="single" selected={date} onSelect={setDate} />
      <p className="font-medium">
        You picked <span className="text-purple-500">{format(date, "PP")}</span>
        .
      </p>
    </div>
  );
};

export default DatePicker;
