import { useState } from 'react'

const FoodMenu = ({ title, isSelected }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <article>
      <button
        type="button"
        aria-label={title}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {title}
      </button>
      <style jsx>
        {`
      article {
        margin-right: 8px;
      }
      article:last-child {
        margin-right: 0;
        padding-right: 30px;
      }
      button {
        border: none;
        font-size: 14px;
        line-height: 21px;
        background: ${isHover || isSelected ? '#FF7000' : '#fff'};
        color: ${isHover || isSelected ? '#fff' : '#838383'};
        padding: 7px 16px;
        border-radius: 10px;
        white-space: nowrap;
      }
      `}
      </style>
    </article>
  )
}

export default FoodMenu
