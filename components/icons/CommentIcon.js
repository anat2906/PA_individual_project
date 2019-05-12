export default function CommentIcon(props) {
  return (
    <svg
      {...props}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      aria-labelledby="chatAltIconTitle chatAltIconDesc"
      stroke="#333333"
      stroke-width="2.4"
      stroke-linecap="square"
      stroke-linejoin="miter"
      fill="none"
      color="#333333"
    >
      {" "}
      <title id="chatAltIconTitle">Chat</title>{" "}
      <desc id="chatAltIconDesc">Icon of a rectangular chat bubble</desc>{" "}
      <path d="M13,17 L7,21 L7,17 L3,17 L3,4 L21,4 L21,17 L13,17 Z" />{" "}
    </svg>
  );
}
