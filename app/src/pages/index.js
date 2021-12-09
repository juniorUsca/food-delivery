import Layout from 'components/Layout'
import Searcher from 'components/Searcher'
import ToolBarLayout from 'components/ToolBar/Layout'
import AddressSelector from 'components/Address/Selector'
import CategoriesLayout from 'components/Category/Layout'
import Category from 'components/Category'
import HorizontalListRestaurant from 'components/Restaurant/HorizontalList'
import Restaurant from 'components/Restaurant'

const Home = () => (
  <>
    <Layout
      withNav
    >
      <ToolBarLayout>
        <Searcher />
      </ToolBarLayout>

      <AddressSelector />

      <CategoriesLayout>
        <Category
          title="All"
          icon="FastFood"
          isSelected
        />
        <Category
          title="Pizza"
          icon="Pizza"
        />
        <Category
          title="Beverages"
          icon="Drink"
        />
        <Category
          title="Asian"
          icon="Cracker"
        />
        <Category
          title="Pizza"
          icon="Pizza"
        />
        <Category
          title="Beverages"
          icon="Drink"
        />
        <Category
          title="Asian"
          icon="Cracker"
        />
      </CategoriesLayout>

      <HorizontalListRestaurant
        title="Nearest Restaurants"
      >
        <Restaurant
          title="Westway"
          image="/restaurants/westway.jpeg"
          offer="50% OFF"
          stars={4.6}
          time="15 min"
        />
        <Restaurant
          title="Fortune"
          image="/restaurants/fortune.jpeg"
          stars={4.6}
          time="25 min"
        />
        <Restaurant
          title="Seafood"
          image="/restaurants/seafood.jpeg"
          stars={4.6}
          time="25 min"
        />
        <Restaurant
          title="Seafood"
          image="/restaurants/seafood.jpeg"
          stars={4.6}
          time="25 min"
        />
      </HorizontalListRestaurant>

      <HorizontalListRestaurant
        title="Popular Restaurants"
      >
        <Restaurant
          title="Moonland"
          image="/restaurants/moonland.jpeg"
          stars={4.6}
          time="15 min"
        />
        <Restaurant
          title="Starfish"
          image="/restaurants/starfish.jpeg"
          offer="30% OFF"
          stars={4.6}
          time="25 min"
        />
        <Restaurant
          title="Black fish"
          image="/restaurants/blackfish.jpeg"
          stars={4.6}
          time="25 min"
        />
        <Restaurant
          title="Seafood"
          image="/restaurants/seafood.jpeg"
          stars={4.6}
          time="25 min"
        />
      </HorizontalListRestaurant>
    </Layout>
  </>
)

export default Home
