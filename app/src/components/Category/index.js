import { useState } from 'react'
import FastFoodIcon from 'components/Icon/FastFood'
import PizzaIcon from 'components/Icon/Pizza'
import DrinkIcon from 'components/Icon/Drink'
import CrackerIcon from 'components/Icon/Cracker'

const Icons = {
  FastFood: FastFoodIcon,
  Pizza: PizzaIcon,
  Drink: DrinkIcon,
  Cracker: CrackerIcon,
}

const Category = ({ title, icon, isSelected = false }) => {
  const Icon = Icons[icon]
  const [isHover, setIsHover] = useState(false)
  return (
    <div className="container">
      <div
        className="category"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span>
          <Icon
            color={isSelected || isHover ? '#ffffff' : '#838383'}
          />
        </span>
      </div>
      <p>{title}</p>
      <style jsx>
        {`
      .container {
        margin: 0 16px 0 0;
      }
      .container:last-child {
        margin: 0;
        padding-right: 30px;
      }
      .category {
        background: ${isSelected || isHover ? '#ff7000' : '#ffffff'};
        height: 65px;
        width: 65px;
        border-radius: 16px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        padding: 17px;
        text-align: center;
        margin: 0 auto;
      }
      p {
        line-height: 21px;
        font-size: 14px;
        text-align: center;
        color: #838383;
        margin: 8px 0;
      }
      `}
      </style>
    </div>
  )
}

export default Category
