import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation addPost($input: PostInput) {
      addPost (input: $input) {
        postSlug
        title
        text
        imgUrl
      }
    }
`

export const DELETE_POST = gql`
  mutation deletePost($postSlug: ID) {
      deletePost(postSlug: $postSlug) {
        postSlug
      }
    }
`