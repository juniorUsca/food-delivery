import Link from 'next/link'
import NavItem from './NavItem'

const Nav = () => {
  // useState('')
  const a = 1
  return (
    <nav>
      <ul>
        <Link href="/">
          <a>
            <NavItem
              icon="home"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <NavItem
              icon="search"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <NavItem
              icon="shop"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <NavItem
              icon="profile"
            />
          </a>
        </Link>
      </ul>

      <style jsx>
        {`
      nav {
        padding: 16px 30px;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        flex: 0 1 96px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
      }
      a {
        display: block;
      }
      `}
      </style>
    </nav>
  )
}

export default Nav
