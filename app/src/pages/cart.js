import Layout from 'components/Layout'
import Header from 'components/Layout/Header'
import CardDelivery from 'components/Address/CardDeliveryr'
import FoodLayout from 'components/Food/Layout'
import FoodCart from 'components/Food/FoodCart'
import PromoCode from 'components/PromoCode'
import BillLayout from 'components/Bill/Layout'
import Bill from 'components/Bill'

const CartPage = () => (
  <>
    <Layout
      withNav
    >
      <Header
        title="Cart"
        hasPositionAbsolute={false}
      />

      <CardDelivery
        address="242 ST Marks Eve, Finland"
      />

      <FoodLayout>
        <FoodCart
          title="Burger with some asd asd asd ad das asd asd ads ada d adsas  dasads"
          price={152}
          image="/restaurants/fortune.jpeg"
        />
        <FoodCart
          title="Burger with some"
          price={152}
          image="/restaurants/seafood.jpeg"
        />
        <FoodCart
          title="Burger with some"
          price={152}
          image="/restaurants/tamalote.jpeg"
        />
      </FoodLayout>

      <PromoCode />

      <BillLayout>
        <Bill />
      </BillLayout>

    </Layout>
  </>
)

export default CartPage
