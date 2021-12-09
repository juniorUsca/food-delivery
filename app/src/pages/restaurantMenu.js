import Layout from 'components/Layout'
import Header from 'components/Layout/Header'
import FoodMenuLayout from 'components/FoodMenu/Layout'
import FoodMenu from 'components/FoodMenu'
import FoodLayout from 'components/Food/Layout'
import Food from 'components/Food'

const RestaurantMenuPage = () => (
  <>
    <Layout
      withNav
      withCart
    >
      <Header
        isFilter
        isMenu
        title="Westway"
        hasPositionAbsolute={false}
      />

      <FoodMenuLayout>
        <FoodMenu
          title="Best Seller"
          isSelected
        />
        <FoodMenu
          title="Veg"
        />
        <FoodMenu
          title="Non-Veg"
        />
        <FoodMenu
          title="Beverages"
        />
        <FoodMenu
          title="Veg"
        />
        <FoodMenu
          title="Non-Veg"
        />
        <FoodMenu
          title="Beverages"
        />
      </FoodMenuLayout>

      <FoodLayout
        title="Best sellers"
      >
        <Food
          title="Vegitable Salad"
          subtitle="In Pizza Mania"
          price={152}
          image="/restaurants/moonland.jpeg"
          offer="50% OFF"
        />
        <Food
          title="Burger with some"
          subtitle="In Pizza Mania"
          price={152}
          image="/restaurants/fortune.jpeg"
        />
        <Food
          title="Vegitable Salad"
          subtitle="In Pizza Mania"
          price={152}
          image="/restaurants/seafood.jpeg"
          offer="30% OFF"
          isAdded
        />
        <Food
          title="Burger with some"
          subtitle="In Pizza Mania"
          price={152}
          image="/restaurants/tamalote.jpeg"
          isAdded
        />
        <Food
          title="Burger with some"
          subtitle="In Pizza Mania"
          price={152}
          image="/restaurants/blackfish.jpeg"
          offer="10% OFF"
        />
        <Food
          title="Burger with some"
          subtitle="In Pizza Mania"
          price={152}
          image="/restaurants/tallarines.jpeg"
          isAdded
        />
      </FoodLayout>

    </Layout>
  </>
)

export default RestaurantMenuPage
