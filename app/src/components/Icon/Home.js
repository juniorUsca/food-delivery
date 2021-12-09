const HomeIcon = ({ color = '#838383' }) => (
  <svg
    width={25}
    height={27}
    viewBox="0 0 25 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 9.75L12.25 1 23.5 9.75V23.5A2.5 2.5 0 0121 26H3.5A2.5 2.5 0 011 23.5V9.75z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 26V13.5H16V26"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default HomeIcon
