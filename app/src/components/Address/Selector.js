import MarkerIcon from 'components/Icon/Marker'

const AddressSelector = () => (
  <>
    <div className="addressSelector">
      <span className="icon">
        <MarkerIcon />
      </span>
      <div className="wrapper">
        <p className="title">Home</p>
        <p className="address">Psj. Jorge Chavez B7</p>
      </div>
    </div>
    <style jsx>
      {`
      .addressSelector {
        display: flex;
        padding: 0 42px;
        margin-top: -18px;
        position: relative;
        z-index: 2;
      }
      span.icon {
        margin-right: 13px;
        margin-top: 7px;
      }
      .wrapper {
        flex-grow: 2;
      }
      p {
        margin: 0;
        color: #373737;
      }
      .title {
        line-height: 22.5px;
        font-weight: 600;
      }
      .address {
        font-size: 14px;
        line-height: 21px;
      }
      `}
    </style>
  </>
)

export default AddressSelector
