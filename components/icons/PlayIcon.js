export default function PlayIcon(props) {
  return (
    <svg
      {...props}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      aria-labelledby="playIconTitle playIconDesc"
      stroke="#333333"
      strokeWidth="2.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      color="#333333"
    >
      {" "}
      <title id="playIconTitle">Play</title>{" "}
      <desc id="playIconDesc">Play the currently selected track</desc>{" "}
      <path d="M20 12L5 21V3z" />{" "}
    </svg>
  );
}
