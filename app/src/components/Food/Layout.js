import Link from 'next/link'

const FoodLayout = ({ title, children, hasShowMenu = false }) => (
  <section>
    <h3>{title}</h3>
    <div>{children}</div>
    {hasShowMenu && (
      <p>
        <Link href="/"><a>See our menu</a></Link>
      </p>
    )}
    <style jsx>
      {`
      section {
        padding: 4px 30px;
      }
      h3 {
        color: #373737;
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 12px;
      }
      p {
        margin: 0;
        padding: 0;
        margin-bottom: 20px;
        text-align: right;
      }
      a {
        color: #FF7000;
        font-size: 14px;
        line-height: 21px;
        text-decoration: none;
      }
      `}
    </style>
  </section>
)

export default FoodLayout
