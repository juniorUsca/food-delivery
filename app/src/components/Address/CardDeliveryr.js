import MarkerIcon from 'components/Icon/Marker'
import ArrowDownIcon from 'components/Icon/ArrowDown'

const CardDelivery = ({ address }) => (
  <section>
    <MarkerIcon color="#fff" />
    <div>
      <p className="tag">Deliver to:</p>
      <p className="address">{address}</p>
    </div>
    <ArrowDownIcon color="#fff" />
    <style jsx>
      {`
      section {
        margin: 16px 30px;
        background: #FF7000;
        color: #fff;
        border-radius: 15px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      section :global(svg:first-child) {
        margin: 23px;
        align-self: flex-start;
      }
      section :global(svg:last-child) {
        margin: 16px;
      }
      div {
        flex: 1 1 auto;
      }
      p {
        margin: 0;
      }
      .tag {
        color: #F8F8FA;
        font-size: 14px;
        line-height: 21px;
        font-weight: 300;
      }
      .address {
        font-size: 16px;
        line-height: 24px;
      }

      `}
    </style>
  </section>
)

export default CardDelivery
