import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query {
    getAllPosts {
      _id
      postSlug
      title
      text
      imgUrl
    }
  }
`;

export const GET_ONE_POST = gql`
  query getPost($postSlug: String) {
    getPost(postSlug: $postSlug) {
      _id
      postSlug
      title
      text
      imgUrl
    }
  }
`;