import Link from 'next/link'

import StarIcon from 'components/Icon/Star'
import TimeIcon from 'components/Icon/Time'

const RestaurantDescription = ({
  title, description, stars, time,
}) => (
  <section>
    <header>
      <h1>{title}</h1>
      <Link href="/restaurant"><a>More info</a></Link>
    </header>
    <div>
      <span className="stars">
        <StarIcon isMedium />
        {' '}
        {stars}
      </span>
      ·
      <span className="time">
        <TimeIcon isMedium />
        {' '}
        {time}
      </span>
    </div>
    <p>{description}</p>
    <style jsx>
      {`
      section {
        padding: 0 30px 24px 30px;
        margin-top: -25px;
        z-index:2;
        position: relative;
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h1 {
        font-size: 30px;
        line-height: 45px;
        color: #373737;
      }
      a {
        color: #FF7000;
        text-decoration: none;
        font-size: 14px;
        line-height: 21px;
      }
      
      div {
        display: flex;
        align-items: center;
      }
      .stars, .time {
        font-size: 15px;
        line-height: 22px;
        display: flex;
        align-items: center;
      }
      .stars > :global(svg),
      .time > :global(svg) {
        margin-right: 4px;
      }
      .stars {
        margin-right: 10px;
      }
      .time {
        margin-left: 10px;
        color: #838383;
      }

      p {
        font-size: 15px;
        line-height: 23px;
        color: #838383;
        margin: 0;
        margin-top: 9px;
      }

      `}
    </style>
  </section>
)

export default RestaurantDescription
