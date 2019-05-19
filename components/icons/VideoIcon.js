export default function VideoIcon(props) {
  return (
    <svg
      {...props}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      aria-labelledby="filmIconTitle filmIconDesc"
      stroke="#333333"
      strokeWidth="2.4"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      color="#333333"
    >
      {" "}
      <title id="filmIconTitle">Film</title>{" "}
      <desc id="filmIconDesc">Icon of a movie camera (camcoder)</desc>{" "}
      <path strokeLinecap="round" d="M16 10.087l5-1.578v7.997l-4.998-1.578" />{" "}
      <path d="M16 7H3v11h13z" />{" "}
    </svg>
  );
}
