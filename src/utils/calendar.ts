import * as ics from "ics";
import type { Event } from "../types";

export const createAndDownloadICalendarEvent = (event: Event) => {
  if (!event.fields.startDate || !event.fields.endDate) return;

  const startDate = new Date(event.fields.startDate);
  const endDate = new Date(event.fields.endDate);

  // console.log([
  //   startDate.getFullYear(),
  //   startDate.getMonth(),
  //   startDate.getDate(),
  // ]);
  // console.log([endDate.getFullYear(), endDate.getMonth(), endDate.getDate()]);

  const calendarEvent = ics.createEvent({
    start: [startDate.getFullYear(), startDate.getMonth(), startDate.getDate()],
    startInputType: "utc",
    end: [endDate.getFullYear(), endDate.getMonth(), endDate.getDate()],
    endInputType: "utc",
    title: "LIFE ITSELF Conference",
    description: event.fields.tagline,
    location: event.fields.location?.fields.address,
    url: "https://lifeitself.health",
  });

  downloadICalendarEvent(calendarEvent);
};

export const downloadICalendarEvent = (calendarEvent: ics.ReturnObject) => {
  if (calendarEvent.error) throw calendarEvent.error;
  if (!calendarEvent.value) throw new Error("An unexpected error occurred.");

  console.log(calendarEvent.value);

  const filename = "LIFE_ITSELF_Conference.ics";
  const file = new File([calendarEvent.value], filename, {
    type: "text/calendar",
  });
  const url = URL.createObjectURL(file);

  // trying to assign the file URL to a window could cause cross-site
  // issues so this is a workaround using HTML5
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  URL.revokeObjectURL(url);
};
