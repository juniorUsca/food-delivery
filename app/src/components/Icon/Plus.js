const PlusIcon = ({ color = '#C4C4C4', isMedium = false, isSmall = false }) => {
  let size = 'md'
  if (isMedium) size = 'md'
  if (isSmall) size = 'sm'

  return (
    <>
      {size === 'md' && (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8v8M8 12h8"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      )}
      {size === 'sm' && (
      <svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 7h10M7 2v10V2z"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      )}
    </>
  )
}

export default PlusIcon
