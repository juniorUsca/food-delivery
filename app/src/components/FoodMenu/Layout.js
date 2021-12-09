const FoodMenuLayout = ({ title, children }) => (
  <section>
    {title && (
      <h2>{title}</h2>
    )}
    <div>
      {children}
    </div>
    <style jsx>
      {`
      h2 {
        font-size: 18px;
        line-height: 27px;
        color: #373737;
        margin: 0px 30px;
      }
      div {
        padding: 16px 30px;
        overflow-x: scroll;
        display: flex;
      }
      `}
    </style>
  </section>
)

export default FoodMenuLayout
