const CategoriesLayout = ({ children }) => (
  <section>
    {children}
    <style jsx>
      {`
      section {
        display: flex;
        padding: 30px 0 0px 30px;
        overflow-x: scroll;
        overflow-y: hidden;
      }
    `}
    </style>
  </section>
)

export default CategoriesLayout
