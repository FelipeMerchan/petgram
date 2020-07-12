import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCardsWithQuery } from './container/ListOfPhotoCardsWithQuery'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCardsWithQuery categoryId={4} />
            </>
      }
    </div>
  )
}
