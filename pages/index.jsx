import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
`

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
`

const Post = styled.a`
  margin-top: 50px;
  width: 350px;
  height: 270px;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  background: url('${props => props.bgImage}') center / cover no-repeat;

  :hover {
    transform: scale(1.1);
    transition: .3s all ease;
  }
`

const PostTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3260A1;
  padding: 15px 20px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FEFEFE;
  border-radius: 0px 0px 15px 15px;
`

const Home = ({ posts }) => {
  if (!posts) 'Loading...'

  return (
    <ContentWrapper>
      <Head>
        <title>NEXT BLOG | Статьи</title>
      </Head>
      <Navbar />

      <Container>
        <PostsWrapper>
          {
            posts.map(post => {
              return (
                <Link href={'/post/[id]'} as={`/post/${post._id}`} key={post._id}>
                  <Post bgImage={post.imgUrl}>
                    <PostTitle>{post.title}</PostTitle>
                  </Post>
                </Link>
              )
            })
          }
        </PostsWrapper>
      </Container>

    </ContentWrapper>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:5000/api/post')
  const posts = await res.json()

  if (!posts) return { notFound: true }

  return {
    props: {posts},
  }
}

export default Home
