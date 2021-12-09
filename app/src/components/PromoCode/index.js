import PlusIcon from 'components/Icon/Plus'

const PromoCode = () => (
  <section>
    <input type="text" placeholder="PROMO CODE" />
    <button type="button" aria-label="add promo code"><PlusIcon isSmall /></button>
    <style jsx>
      {`
      section {
        margin: 14px 30px;
        position: relative;
      }
      input {
        background: #fff;
        padding: 16px;
        padding-right: 54px;
        border: none;
        width: 100%;
        border-radius: 15px;
        font-size: 15px;
        line-height: 22px;
      }
      button {
        border: none;
        background: none;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        padding: 0 20px;
        cursor: pointer;
      }
      `}
    </style>
  </section>
)

export default PromoCode
