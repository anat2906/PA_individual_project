export default function LiveIcon(props) {
  return (
    <svg
      {...props}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      aria-labelledby="radioIconTitle radioIconDesc"
      stroke="#333333"
      strokeWidth="2.4"
      strokeLinecap="square"
      strokeLineJoin="miter"
      fill="none"
      color="#333333"
    >
      {" "}
      <title id="radioIconTitle">Radio</title>{" "}
      <desc id="radioIconDesc">Icon of a radio signal</desc>{" "}
      <path d="M5.44972845 6C2.18342385 9.2663046 2.18342385 14.7336954 5.44972845 18M8.59918369 8C6.46693877 10.1322449 6.46693877 13.8677551 8.59918369 16M18.5502716 18C21.8165761 14.7336954 21.8165761 9.2663046 18.5502716 6M15.4008163 16C17.5330612 13.8677551 17.5330612 10.1322449 15.4008163 8" />{" "}
      <circle cx="12" cy="12" r="1" />{" "}
    </svg>
  );
}
