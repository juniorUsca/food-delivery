const HorizontalListRestaurant = ({ title, children }) => (
  <section>
    <h3>{title}</h3>
    <div>
      {children}
    </div>
    <style jsx>
      {`
      section {
        padding: 0 0 16px 0;
      }
      h3 {
        display: block;
        margin: 8px 30px;
      }
      div {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        padding: 0 30px;
      }
    `}
    </style>
  </section>
)

export default HorizontalListRestaurant
