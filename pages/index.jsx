import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'
import Link from 'next/link'

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

const Home = () => {

  return (
    <ContentWrapper>
      <Head>
        <title>Home page</title>
      </Head>
      <Navbar />

      <div className='container'>
        <PostsWrapper>
          <Link href={'/post/[id]'} as={`/post/test`}>
            <Post bgImage={'./static/images/post1.png'}>
              <PostTitle>Мальдивы. Рай или пафос ?</PostTitle>
            </Post>
          </Link>
          
          <Post bgImage={'./static/images/post2.png'}>
            <PostTitle>Италия. Остров Капри. Обзор.</PostTitle>
          </Post>
          <Post bgImage={'./static/images/post3.png'}>
            <PostTitle>США. Сан-Франциско, дорого?</PostTitle>
          </Post>
          <Post bgImage={'./static/images/post4.png'}>
            <PostTitle>Канада. Пейзажи вблизи Онтарио.</PostTitle>
          </Post>
          <Post bgImage={'./static/images/post5.png'}>
            <PostTitle>Швейцария. Красота природы.</PostTitle>
          </Post>
          <Post bgImage={'./static/images/post6.png'}>
            <PostTitle>Альпы. Покори вершину с нами!</PostTitle>
          </Post>
        </PostsWrapper>
      </div>

    </ContentWrapper>
  )
}

export default Home