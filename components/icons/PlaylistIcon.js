export default function PlaylistIcon(props) {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      aria-labelledby="listAltIconTitle listAltIconDesc"
      stroke="#333333"
      strokeWidth="2.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      color="#333333"
    >
      {" "}
      <desc id="listAltIconDesc">
        Icon of a unordered list with a bigger highlighted item on top
      </desc>{" "}
      <path d="M5 15L19 15M5 19L19 19" />{" "}
      <rect width="14" height="6" x="5" y="5" />{" "}
    </svg>
  );
}
