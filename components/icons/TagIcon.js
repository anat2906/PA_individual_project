export default function TagIcon(props) {
  return (
    <svg
      {...props}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      aria-labelledby="tagAltIconTitle tagAltIconDesc"
      stroke="#333333"
      strokeWidth="2.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      color="#333333"
    >
      {" "}
      <desc id="tagAltIconDesc">Icon of a paper tag</desc>{" "}
      <circle cx="10" cy="12" r="1" />{" "}
      <path d="M8 18l-6-6 6-6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8z" />{" "}
    </svg>
  );
}
