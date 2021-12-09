const BillLayout = ({ children }) => (
  <div className="element">
    <div className="shape">
      {children}
    </div>
    <style jsx>
      {`
      .element {
        height: 360px;
        background: #FFD200aa;
        position: relative;
      }
      .shape {
        height: 310px;
        width: 100%;
        position: relative;
        border-radius: 50px 0 0 0;
        box-shadow: 50px 0px 0px 100px #F6F6F6;
      }
      .shape:before {
        content: "";
        position: absolute;
        top: -50px;
        right: 0;
        height: 50px;
        width: 50px;
      }
      .shape:after {
        content: "";
        position: absolute;
        top: -50px;
        left: 0;
        right: 0;
        // background: #F6F6F6;
        // background: red;
        height: 50px;
        border-radius: 0 0 50px 0;
      }
      `}
    </style>
  </div>
)

export default BillLayout
