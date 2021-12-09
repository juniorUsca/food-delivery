import Link from 'next/link'

import ArrowBackIcon from 'components/Icon/ArrowBack'
import LikeHeartIcon from 'components/Icon/LikeHeart'
import ShareIcon from 'components/Icon/Share'
import OptionsIcon from 'components/Icon/Options'

const Header = ({
  isDetail = false,
  isFilter = false,
  isMenu = false,
  title,
  hasPositionAbsolute = true,
}) => (
  <header>
    <Link href="/"><a><ArrowBackIcon /></a></Link>
    {title && isMenu && (
      <h1>
        {title}
        <br />
        <span>Menu</span>
      </h1>
    )}
    {title && !isMenu && (
      <h1>
        <span>{title}</span>
      </h1>
    )}
    <div>
      {isDetail && (
        <>
          <button type="button" aria-label="like"><LikeHeartIcon /></button>
          <button type="button" aria-label="share"><ShareIcon /></button>
        </>
      )}
      {isFilter && (
        <button type="button" aria-label="options"><OptionsIcon /></button>
      )}
    </div>
    <style jsx>
      {`
      header {
        position: ${hasPositionAbsolute ? 'absolute' : 'static'};
        display: flex;
        justify-content: space-between;
        align-items: ${isMenu ? 'flex-start' : 'center'};
        padding: 57px 30px 8px 30px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
      }
      h1 {
        color: #838383;
        font-size: 18px;
        text-align: center;
      }
      h1 span {
        color: #373737;
        font-size: 20px;
      }
      div {
        min-width: ${title ? '48px' : 'auto'};
      }
      a, button {
        padding: 12px;
        border: none;
        border-radius: 16px;
        background: #fff;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
      }
      a {
        padding: 14px;
      }
      button {
        margin-right: 16px;
      }
      button:last-child {
        margin-right: 0;
      }

      `}
    </style>
  </header>
)

export default Header
