import { useState } from 'react'

import HomeIcon from 'components/Icon/Home'
import SearchIcon from 'components/Icon/Search'
import ShopIcon from 'components/Icon/Shop'
import ProfileIcon from 'components/Icon/Profile'

const icons = {
  home: HomeIcon,
  search: SearchIcon,
  shop: ShopIcon,
  profile: ProfileIcon,
}

const NavItem = ({
  icon,
}) => {
  const [isHover, setIsHover] = useState(false)
  const Icon = icons[icon]
  return (
    <li
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Icon
        color={isHover ? '#fff' : '#838383'}
        isBig
      />
      <style jsx>
        {`
      li {
        background: ${isHover ? '#FFD200' : '#fff'};
        padding: 15px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: ${isHover ? '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)' : 'none'};
      }
      `}
      </style>
    </li>
  )
}

export default NavItem
