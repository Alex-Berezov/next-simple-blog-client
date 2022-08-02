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

// export const GET_POST = gql`
//   query {
//     getPost {
//       _id
//       title
//       text
//       imgUrl
//     }
//   }
// `;