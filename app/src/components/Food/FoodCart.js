import MinusIcon from 'components/Icon/Minus'
import PlusIcon from 'components/Icon/Plus'
import CloseIcon from 'components/Icon/Close'

const FoodCart = ({
  title, price, image, quantity = 1,
}) => {
  const fixedPrice = (Math.round(price * quantity * 100) / 100).toFixed(2)
  return (
    <>
      <article>
        <figure>
          <img src={image} alt={title} width="90" height="90" />
        </figure>
        <section>
          <h4>{title}</h4>
          <div className="qty">
            <button type="button">
              <MinusIcon isSmall color="#838383" opacity={0.5} />
            </button>
            <span>1</span>
            <button type="button">
              <PlusIcon isSmall color="#838383" />
            </button>
          </div>
        </section>
        <button className="close" type="button">
          <CloseIcon />
        </button>
        <span className="price">
          {fixedPrice}
        </span>
      </article>
      <style jsx>
        {`
        article {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 15px;
          padding: 10px;
          margin-bottom: 20px;
          position: relative;
        }
        article:last-child {
          margin-bottom: 17px;
        }
        figure {
          overflow: hidden;
          border-radius: 15px;
          width: 70px;
          height: 70px;
          flex: 0 0 70px;
        }
        img {
          vertical-align: top;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        section {
          flex: 1 1 auto;
          padding: 14px 16px;
        }
        h4 {
          font-size: 14px;
          line-height: 21px;
          color: #373737;
          font-weight: 400;
          margin-bottom: 5px;
        }
        button {
          padding: 0;
          border: none;
          background: none;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .qty {
          background: #F8F8FA;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
        }
        .qty button {
          font-size: 24px;
          padding: 9px 12px;
        }
        .qty span {
          font-size: 12px;
          line-height: 18px;
          padding: 4px;
        }
        .price {
          position: absolute;
          bottom: 11px;
          right: 19px;
        }
        .close {
          align-self: flex-start;
          margin: 3px;
        }
        `}
      </style>
    </>
  )
}

export default FoodCart
