import React from 'react'

import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => {
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </Layout>
  )
}

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

export default Home
