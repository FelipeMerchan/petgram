import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    {
      ({ loading, error, data }) => {
        if (loading) return null
        return <ListOfPhotoCardsComponent data={data} />
      }
    }
  </Query>
)
