import StarIcon from 'components/Icon/Star'
import TimeIcon from 'components/Icon/Time'

const Restaurant = ({
  title,
  image,
  offer = null,
  stars,
  time,
}) => (
  <article>
    <figure>
      <img
        src={image}
        alt="restaurant"
      />
      {offer && (
        <div className="offer">
          {offer}
        </div>
      )}
    </figure>
    <p className="title">
      {title}
    </p>
    <div>
      <span className="stars">
        <span><StarIcon /></span>
        {' '}
        {stars}
      </span>
      ·
      <span className="time">
        <span><TimeIcon /></span>
        {' '}
        {time}
      </span>
    </div>
    <style jsx>
      {`
      article {
        margin-right: 16px;
      }
      article:last-child {
        margin-right: 0;
        padding-right: 30px;
      }
      figure {
        width: 120px;
        overflow: hidden;
        height: 120px;
        margin: 0;
        border-radius: 16px;
        position: relative;
      }
      img {
        vertical-align: top;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .offer {
        position: absolute;
        background: #ff7000;
        bottom: 0;
        left: 0;
        padding: 16px 12px;
        color: #fff;
        border-radius: 0 16px 16px 0;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
      }
      p {
        margin: 0;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 18px;
      }
      .stars, .time {
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
      }
      .stars span {
        padding-top: 2px;
      }
      .time {
        color: #838383;
      }
      .time span {
        margin-top: 4px;
      }
      `}
    </style>
  </article>
)

export default Restaurant
