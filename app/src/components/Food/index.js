import PlusIcon from 'components/Icon/Plus'
import CheckIcon from 'components/Icon/Check'

const FoodItem = ({
  title, subtitle, price, image, offer, isAdded,
}) => {
  const fixedPrice = (Math.round(price * 100) / 100).toFixed(2)
  return (
    <>
      <article>
        <figure>
          <img src={image} alt={title} width="90" height="90" />
          {offer && (
            <div className="offer">
              {offer}
            </div>
          )}
        </figure>
        <section>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>
            Price.
            {' '}
            {fixedPrice}
          </p>
        </section>
        <button type="button">
          {!isAdded && (
            <PlusIcon />
          )}
          {isAdded && (
            <CheckIcon />
          )}
        </button>
      </article>
      <style jsx>
        {`
        article {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 15px;
          margin-bottom: 20px;
        }
        article:last-child {
          margin-bottom: 17px;
        }
        figure {
          overflow: hidden;
          border-radius: 15px;
          width: 90px;
          height: 90px;
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
          padding: 4px 12px;
          color: #fff;
          border-radius: 0 15px 15px 15px;
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-transform: uppercase;
          opacity: 0.9;
        }
        section {
          flex: 1 1 auto;
          padding: 13px 16px;
        }
        h4 {
          font-size: 14px;
          line-height: 21px;
          color: #373737;
          font-weight: 400;
        }
        h5 {
          font-size: 12px;
          line-height: 18px;
          color: #838383;
        }
        p {
          margin: 0;
          font-size: 14px;
          line-height: 21px;
          color: #373737;
          font-weight: 600;
        }
        button {
          padding: 0;
          margin-right: 24px;
          border: none;
          background: none;
          display: flex;
          cursor: pointer;
        }
        `}
      </style>
    </>
  )
}

export default FoodItem
