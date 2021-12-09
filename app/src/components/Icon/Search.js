const SearchIcon = ({ isBig = false, color = '#838383' }) => (
  <>
    { isBig && (
    <svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.111 23.222c6.137 0 11.111-4.974 11.111-11.11C23.222 5.974 18.248 1 12.112 1 5.974 1 1 5.975 1 12.111c0 6.137 4.975 11.111 11.111 11.111zM26 26l-6.042-6.042"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    )}
    { !isBig && (
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.667 14.333A6.667 6.667 0 107.667 1a6.667 6.667 0 000 13.333zM16 16l-3.625-3.625"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    )}
  </>
)

export default SearchIcon
