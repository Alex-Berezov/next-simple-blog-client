import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation addPost($input: PostInput) {
      addPost (input: $input) {
        title
        text
        imgUrl
      }
    }
`