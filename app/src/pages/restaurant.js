import Layout from 'components/Layout'
import Header from 'components/Layout/Header'
import ToolBarLayout from 'components/ToolBar/Layout'
import RestaurantDescription from 'components/Restaurant/Description'
import FoodMenuLayout from 'components/FoodMenu/Layout'
import FoodMenu from 'components/FoodMenu'
import FoodLayout from 'components/Food/Layout'
import Food from 'components/Food'

const RestaurantPage = () => (
  <>
    <Layout
      withNav
    >
      <ToolBarLayout
        height={336}
        image="restaurants/fortune.jpeg"
        imageOpacity={1}
      >
        <Header isDetail />
      </ToolBarLayout>

      <RestaurantDescription
        title="Westway"
        description="Healthy eating means eating a variety of foods that give you the nutrients you need to maintain your health, feel good, and have energy."
        stars={4.6}
        time="15 min"
      />

      <FoodMenuLayout
        title="Westway Food Menu"
      >
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
        hasShowMenu
      >
        <Food
          title="Vegitable Salad"
          subtitle="In Pizza Mania"
          price={152}
          image="/restaurants/moonland.jpeg"
          offer="50% OFF"
        />
        <Food
          title="BUrger with some"
          subtitle="In Pizza Mania"
          price={152}
          image="/restaurants/fortune.jpeg"
        />
      </FoodLayout>

    </Layout>
  </>
)

export default RestaurantPage
