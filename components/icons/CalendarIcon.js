export default function CalendarIcon(props) {
  return (
    <svg
      {...props}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      aria-labelledby="calendarIconTitle calendarIconDesc"
      stroke="#333333"
      stroke-width="2.4"
      stroke-linecap="square"
      stroke-linejoin="miter"
      fill="none"
      color="#333333"
    >
      {" "}
      <title id="calendarIconTitle">Calendar</title>{" "}
      <desc id="calendarIconDesc">Icon of a binded calendar</desc>{" "}
      <rect width="18" height="16" x="3" y="5" />{" "}
      <path d="M21 10L3 10M8 7L8 3M16 7L16 3" />{" "}
    </svg>
  );
}
