import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query {
    getAllPosts {
      _id
      title
      text
      imgUrl
    }
  }
`;

export const GET_ONE_POST = gql`
  query getPost($id: ID) {
    getPost(id: $id) {
      _id
      title
      text
      imgUrl
    }
  }
`;