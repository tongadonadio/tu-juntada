import * as React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("es");
const localizer = momentLocalizer(moment);
const eventsData = [
  {
    id: 0,
    title: "Asado",
    start: new Date(2023, 0, 25, 19, 30, 0),
    end: new Date(2023, 0, 25, 23, 30, 0),
  },
  {
    id: 1,
    title: "Day off",
    allDay: true,
    start: new Date(2023, 0, 27),
    end: new Date(2023, 0, 28),
  },
  {
    id: 2,
    title: "Escapada a Argentina",
    allDay: true,
    start: new Date(2023, 0, 29),
    end: new Date(2023, 0, 31),
  },
  {
    id: 3,
    title: "Asado",
    start: new Date(2023, 1, 2, 19, 30, 0),
    end: new Date(2023, 1, 2, 23, 30, 0),
  },
  {
    id: 4,
    title: "Asado",
    start: new Date(2023, 1, 5, 19, 30, 0),
    end: new Date(2023, 1, 5, 23, 30, 0),
  },
  {
    id: 5,
    title: "Asado",
    start: new Date(2023, 1, 6, 19, 30, 0),
    end: new Date(2023, 1, 6, 23, 30, 0),
  },
];

export default function CustomCalendar() {
  return (
    <div className="calendar-container">
      <Calendar
        className="calendar"
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        onSelectEvent={() => console.log("nada")}
        onSelectSlot={() => console.log("nada")}
      />
    </div>
  );
}
