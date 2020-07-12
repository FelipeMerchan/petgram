import React from 'react'

import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </>
  )
}
