// import Background from './Background'

const ToolBarLayout = ({
  height = 210,
  image = './pattern.jpeg',
  imageOpacity = 0.1,
  children,
}) => (
  <>
    <div className="element">
      <div className="shape">
        {children}
      </div>
    </div>
    <style jsx>
      {`
      .element {
        background: #FFD200;
        overflow: hidden;
        position: relative;
        height: ${height}px;
        z-index: 1;
      }
      .element:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('${image}');
        background-position: center 80%;
        opacity: ${imageOpacity};
        overflow: hidden;
        z-index: -1;
      }
      .shape {
        height: ${height - 50}px;
        width: 100%;
        position: relative;
        border-radius: 0 0 50px 0;
        box-shadow: 150px 0px 0px 100px #F6F6F6;
      }
      .shape:before {
        content: "";
        position: absolute;
        bottom: -50px;
        height: 50px;
        width: 50px;
      }
      .shape:after {
        content: "";
        position: absolute;
        bottom: -50px;
        left: 0;
        right: 0;
        background: #F6F6F6;
        height: 50px;
        border-radius: 50px 0 0 0;
      }
    `}
    </style>
  </>
)

export default ToolBarLayout
