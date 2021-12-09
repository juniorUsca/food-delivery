const MarkerIcon = ({ color = '#373737' }) => (
  <svg
    width={20}
    height={24}
    viewBox="0 0 20 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 13a3 3 0 100-6 3 3 0 000 6z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default MarkerIcon
