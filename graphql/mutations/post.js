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

export const DELETE_POST = gql`
  mutation deletePost($id: String) {
      deletePost(_id: $id) {
        _id
      }
    }
`